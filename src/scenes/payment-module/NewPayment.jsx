import React from "react";
import CustomModal from "../../components/CustomModal";
import { useState } from "react";
import ClaimTable from "../claim-dir/claim/ClaimTable";
import PayerList from "../patient/PayerList";
import {
  Box,
  CircularProgress,
  FormControlLabel,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CustomField from "../../components/CustomField";
import CustomSearchField from "../../components/CustomSearchField";
import CustomButton from "../../components/CustomButton";
import { useFormik } from "formik";
import { paymentInitVal3 } from "../../utils/formikInitValues";
import { useDispatch } from "react-redux";
import { addSelectedClaim } from "../../features/slice/PaymentSlice";
import CustomSelectBox from "../../components/CustomSelectBox";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PostPayment from "../payment/PostPayment";
import { createPaymentAction } from "../../features/actions/PaymentAction";
import axios from "axios";

const NewPayment = () => {
  const dispatch = useDispatch();
  const [openClaimModal, setOpenClaimModal] = useState(false);
  const [openPayerModal, setOpenPayerModal] = useState(false);

  const [showPostPay, setShowPostPay] = useState(false);
  const [applyEob, setApplyEob] = useState(false);
  const [paymentDetailDto, setPaymentDetailDto] = useState(null);
  console.log(paymentDetailDto, "all paymentsDto");
  //   formik logic here
  const formik = useFormik({
    initialValues: paymentInitVal3,
    onSubmit: (values) => {
      const postValues = {
        ...values,
        paymentDetailDto: paymentDetailDto,
      };
      dispatch(createPaymentAction(postValues));
    },
  });

  //   handling payer type
  const handlePaymentBy = (selectedRow) => {
    if (formik.values.isClaim) {
      setOpenClaimModal(true);
      if (selectedRow.primaryPayerInsuranceName) {
        console.log(selectedRow, "selectedRow5667");
        formik.setValues((prevValues) => ({
          ...prevValues,
          paymentBy: ` ${selectedRow.primaryPayerInsuranceName} (${selectedRow.payerSequenceNo})`,
          paymentFromName: selectedRow.primaryPayerInsuranceName,
          paymentFrom: selectedRow.payerId,
          payerId: selectedRow.payerId,
          payerSequenceNo: selectedRow.payerSequenceNo,
        }));
        dispatch(addSelectedClaim([selectedRow]));
        setOpenClaimModal(false);
      }
    } else {
      setOpenPayerModal(true);
      if (selectedRow.payerName) {
        formik.setValues((prevValues) => ({
          ...prevValues,
          paymentBy: `${selectedRow.payerName} (${selectedRow.payerSequenceNo})`,
          paymentFromName: selectedRow.payerName,
          paymentFrom: selectedRow.payerId,
          payerSequenceNo: selectedRow.payerSequenceNo,
        }));
        setOpenPayerModal(false);
      }
    }
  };

  const renderSourceOptions = () => {
    if (formik.values.paymentMethod === "check") {
      return (
        <>
          <CustomField
            value={formik.values.checkNumber}
            type="text"
            label="Check/EFT #"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            name="checkNumber"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              label="From"
              value={formik.values.checkDate}
              onChange={(newDate) => formik.setFieldValue("checkDate", newDate)}
              onBlur={() => formik.setFieldTouched("checkDate", true)}
              renderInput={(params) => <TextField {...params} />}
              inputFormat="MM/DD/YYYY"
            // clearable
            />
          </LocalizationProvider>
        </>
      );
    } else if (formik.values.paymentMethod === "creditCard") {
      return (
        <>
          <CustomSelectBox
            value={formik.values.creditCardType}
            name="creditCardType"
            dropdownOptions={creditCardOpt?.map((opt) => ({
              value: opt.cardType,
              id: opt.id,
            }))}
            label="Credit Card Type"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
        </>
      );
    } else if (formik.values.paymentMethod === "eft") {
      return (
        <CustomField
          value={formik.values.checkNumber}
          type="text"
          label="Check/EFT #"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          name="checkNumber"
        />
      );
    } else {
      return null;
    }
  };

  const creditCardOpt = [
    {
      id: 1,
      cardType: "Visa",
    },
    {
      id: 2,
      cardType: "Master",
    },
    {
      id: 3,
      cardType: "American Express",
    },
    {
      id: 4,
      cardType: "Discover",
    },
    {
      id: 5,
      cardType: "Other",
    },
  ];

  // apply eob handle
  const handleApplyEOB = () => {
    if (
      formik.values.paymentBy === "" ||
      formik.values.paymentBy.length === 0 ||
      formik.values.paymentBy === null
    ) {
      alert("Fill up the required fields");
    } else {
      const loadingBtn = setTimeout(() => {
        setShowPostPay(true);
      }, 1500);
      loadingBtn && setApplyEob(true);
    }
  };

  return (
    <>
      <CustomModal
        open={openClaimModal}
        handleClose={() => setOpenClaimModal(false)}
      >
        <ClaimTable
          handleClose={() => setOpenClaimModal(false)}
          onCellClick={handlePaymentBy}
          isModal={true}
        />
      </CustomModal>
      {/* payer modal */}
      <CustomModal
        open={openPayerModal}
        handleClose={() => setOpenPayerModal(false)}
      >
        <PayerList
          handleClose={() => setOpenPayerModal(false)}
          modalFor="payment"
          handlePaymentBy={handlePaymentBy}
        />
      </CustomModal>

      {/* first window data */}
      <Box margin={"20px"}>
        {showPostPay ? (
          <PostPayment
            formik={formik}
            setPaymentDetailDto={setPaymentDetailDto}
          />
        ) : (
          <div>
            <Box>
              <CustomButton
                variant="contained"
                margin="0 0 15px"
                handleClick={handleApplyEOB}
              >
                {applyEob ? <CircularProgress /> : "Apply As EOB"}
              </CustomButton>
            </Box>
            <Stack
              sx={{
                width: { xs: "95%", sm: "75%", md: "50%" },
                border: "1px solid lightgrey",
                borderRadius: "10px",
                padding: "15px",
              }}
            >
              <Box
                display="grid"
                gap="30px"
                margin={"20px 0"}
                sx={{
                  gridTemplateColumns: {
                    xs: "repeat(1, minmax(0, 1fr))",
                    sm: "repeat(1, minmax(0, 1fr))",
                    md: "repeat(1, minmax(0, 1fr))",
                  },
                }}
              >
                <CustomSearchField
                  type="text"
                  label="Payment By"
                  handleModalOpen={handlePaymentBy}
                  name="paymentBy"
                  fieldVal={formik.values.paymentBy}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />

                <Stack flexDirection={"row"} alignItems={"center"}>
                  <FormControlLabel
                    label="Claim"
                    control={
                      <Radio
                        value="claim"
                        variant="soft"
                        name="claim"
                        checked={formik.values.isClaim}
                        onChange={() => formik.setFieldValue("isClaim", true)}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Payer"
                    control={
                      <Radio
                        value="payer"
                        variant="soft"
                        name="payer"
                        checked={!formik.values.isClaim}
                        onChange={() => formik.setFieldValue("isClaim", false)}
                      />
                    }
                  />
                </Stack>
              </Box>

              <Box
                display="grid"
                gap="30px"
                margin={"20px 0"}
                sx={{
                  gridTemplateColumns: {
                    xs: "repeat(1, minmax(0, 1fr))",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(2, minmax(0, 1fr))",
                  },
                }}
              >
                <CustomField
                  type="text"
                  label="Payment From"
                  value={formik.values.paymentFromName}
                  name="paymentFromName"
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
                <CustomField
                  type="number"
                  label="Payment Amount"
                  value={formik.values.paymentAmount}
                  name="paymentAmount"
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </Box>

              <Stack flexDirection={"row"} alignItems={"center"}>
                <Typography marginRight={"20px"}>Source:</Typography>
                <FormControlLabel
                  label="Check"
                  control={
                    <Radio
                      value="check"
                      variant="soft"
                      name="paymentMethod"
                      checked={formik.values.paymentMethod === "check"}
                      onChange={formik.handleChange}
                    />
                  }
                />
                <FormControlLabel
                  label="Credit Card"
                  control={
                    <Radio
                      value="creditCard"
                      variant="soft"
                      name="paymentMethod"
                      checked={formik.values.paymentMethod === "creditCard"}
                      onChange={formik.handleChange}
                    />
                  }
                />
                <FormControlLabel
                  label="Electronic Fund Transfer"
                  control={
                    <Radio
                      value="eft"
                      variant="soft"
                      name="paymentMethod"
                      checked={formik.values.paymentMethod === "eft"}
                      onChange={formik.handleChange}
                    />
                  }
                />
              </Stack>

              <Box
                display="grid"
                gap="30px"
                margin={"20px 0"}
                sx={{
                  gridTemplateColumns: {
                    xs: "repeat(1, minmax(0, 1fr))",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(2, minmax(0, 1fr))",
                  },
                }}
              >
                {renderSourceOptions()}
              </Box>
            </Stack>
          </div>
        )}
      </Box>
    </>
  );
};

export default NewPayment;
