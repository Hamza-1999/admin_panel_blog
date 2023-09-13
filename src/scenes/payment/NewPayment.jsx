import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import CustomSearchField from "../../components/CustomSearchField";
import { useFormik } from "formik";
import { paymentInitValue } from "../../utils/formikInitValues";
import { useState } from "react";
import CustomModal from "../../components/CustomModal";
import Claim from "../claim-dir/claim/Claim";
import PayerList from "../patient/PayerList";
import CustomField from "../../components/CustomField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomSelectBox from "../../components/CustomSelectBox";
import ClaimTable from "../claim-dir/claim/ClaimTable";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import PostPayment from "./PostPayment";

const NewPayment = () => {
  const [openClaimModal, setOpenClaimModal] = useState(false);
  const [openPayerModal, setOpenPayerModal] = useState(false);
  // const [postPaymentData, setPostPaymentData] = useState({});
  const [showPostPay, setShowPostPay] = useState(false);
  const [applyEob, setApplyEob] = useState(false);
  // console.log(postPaymentData, "allpostPayData");
  const formik = useFormik({
    initialValues: paymentInitValue,
    // onSubmit: (values) => {
    //   console.log(values, "payment Values");
    // },
  });

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

  const onCellClick = (val) => {
    handlePaymentBy(val);
  };

  const handlePaymentBy = (val) => {
    console.log(val, "tableVal");
    if (formik.values.isClaim) {
      setOpenClaimModal(true);
      if (val.primaryPayerInsuranceName && val.payerSequenceNo) {
        formik.setValues((prevValues) => ({
          ...prevValues,
          paymentBy: `${val.primaryPayerInsuranceName} (${val.payerSequenceNo})`,
          paymentFrom: val.primaryPayerInsuranceName,
          payerId: val.payerId,
          patientId: val.patientId,
          patientFirstName: val.patientFirstName,
          patientLastName: val.patientLastName,
          patientAccountNo: val.patientAccountNo,
          claimNumber: val.claimNumber,
          dateOfService: val.dateOfService,
          claimInfoId: val.id,
          payerSequenceNo: val.payerSequenceNo,
          billed: val.totalBilled,
          balance: val.totalBilled,
          claimChargesDto: val.claimChargesDto,
        }));
        setOpenClaimModal(false);
      }
    } else {
      setOpenPayerModal(true);
      if (val.payerName && val.payerSequenceNo) {
        formik.setValues((prevValues) => ({
          ...prevValues,
          paymentBy: `${val.payerName} (${val.payerSequenceNo})`,
          paymentFrom: val.payerName,
          payerId: val.payerId,
          patientId: val.patientId,
          claimInfoId: val.id,
          payerSequenceNo: val.payerSequenceNo,
          billed: val.totalCharges,
          balance: val.totalCharges,
          claimChargesDto: val.claimChargesDto,
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

  // reload useEffect

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
      const confirmationMessage = "Are you sure you want to reload this page?";
      e.returnValue = confirmationMessage;

      const userResponse = window.confirm(confirmationMessage);
      if (userResponse) {
        window.location.reload();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <CustomModal
        open={openClaimModal}
        handleClose={() => setOpenClaimModal(false)}
      >
        <ClaimTable
          handleClose={() => setOpenClaimModal(false)}
          onCellClick={onCellClick}
          isModal={true}
        />
      </CustomModal>
      <CustomModal
        open={openPayerModal}
        handleClose={() => setOpenPayerModal(false)}
      >
        <PayerList
          handleClose={() => setOpenPayerModal(false)}
          onCellClick={(val) => handlePaymentBy(val)}
        />
      </CustomModal>

      <Box margin={"20px"}>
        {showPostPay ? (
          <PostPayment
            setShowPostPay={setShowPostPay}
            setApplyEob={setApplyEob}
            formik={formik}
          />
        ) : (
          <div>
            <Box>
              <CustomButton
                variant="contained"
                margin="0 0 15px"
                handleClick={handleApplyEOB}
              >
                {applyEob ? <CircularProgress /> : "Apply as EOB"}
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
                  name="paymentBy"
                  fieldVal={formik.values.paymentBy}
                  handleModalOpen={handlePaymentBy}
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
                  value={formik.values.paymentFrom}
                  name="paymentFrom"
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
