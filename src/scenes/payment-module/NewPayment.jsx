import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedClaim,
  setPaymentDataForApi,
} from "../../features/slice/PaymentSlice";
import CustomSelectBox from "../../components/CustomSelectBox";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PostPayment from "../payment/PostPayment";
import { createPaymentAction } from "../../features/actions/PaymentAction";
import axios from "axios";
import CustomDatePicker from "../../components/CustomDatePicker";

const NewPayment = () => {
  const dispatch = useDispatch();
  const [openClaimModal, setOpenClaimModal] = useState(false);
  const [openPayerModal, setOpenPayerModal] = useState(false);

  const [showPostPay, setShowPostPay] = useState(false);
  const [applyEob, setApplyEob] = useState(false);
  const [paymentDetailDto, setPaymentDetailDto] = useState(null);

  // get  paymentData For api value in redux
  let { paymentDataForApi } = useSelector((state) => state.payment);
  //   formik logic here
  const formik = useFormik({
    initialValues: paymentInitVal3,
    onSubmit: (values) => {
      const postValues = {
        ...values,
        paymentClaimDto: paymentDataForApi.paymentClaimDto,
      };
      console.log("paymentDataForApi" , postValues)
      dispatch(createPaymentAction(postValues));
    },
  });

  //   handling payer type
  const handlePaymentBy = (selectedRow) => {
    if (formik.values.isClaim) {
      console.log("selected Rows", selectedRow);

      setOpenClaimModal(true);
      if (selectedRow.primaryPayerInsuranceName) {
        console.log(selectedRow, "selectedRow5667");
        dispatch(
          setPaymentDataForApi({
            ...paymentDataForApi,
            paymentBy: ` ${selectedRow.primaryPayerInsuranceName} (${selectedRow.payerSequenceNo})`,
            paymentFromName: selectedRow.primaryPayerInsuranceName,
            paymentFrom: selectedRow.payerId,
            payerId: selectedRow.payerId,
            payerSequenceNo: selectedRow.payerSequenceNo,
            paymentClaimDto: [
              {
                claimId: selectedRow.claimChargesDto[0].claimInfoId,
                claimNumber: selectedRow.claimNumber,
                claimChargesDto: selectedRow.claimChargesDto,
                paymentDetailDto: [],
              },
            ],
          })
        );
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
        dispatch(
          setPaymentDataForApi({
            ...paymentDataForApi,
            paymentBy: `${selectedRow.payerName} (${selectedRow.payerSequenceNo})`,
            paymentFromName: selectedRow.payerName,
            paymentFrom: selectedRow.payerId,
            payerSequenceNo: selectedRow.payerSequenceNo,
            paymentClaimDto: [
              {
                claimId: selectedRow.claimChargesDto[0].claimInfoId,
                claimNumber: selectedRow.claimNumber,
                claimChargesDto: selectedRow.claimChargesDto,
                paymentDetailDto: [],
              },
            ],
          })
        );
        setOpenPayerModal(false);
      }
    }
  };

  const renderSourceOptions = () => {
    if (formik.values.paymentMethodId === 1) {
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
            <CustomDatePicker
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
    } else if (formik.values.paymentMethodId === 3) {
      return (
        <>
          
          <CustomSelectBox
            value={formik.values.creditCardTypeId}
            name="creditCardTypeId"
            dropdownOptions={creditCardOpt?.map((opt) => ({
              value: opt.cardType,
              id: opt.id,
            }))}
            label="Credit Card Type"
            //  handleChange={formik.handleChange}
             handleChange={(e)=>{
                formik.setFieldValue("creditCardTypeId" , Number(e.target.value))
             }}
            handleBlur={formik.handleBlur}
          />
        </>
      );
    } else if (formik.values.paymentMethodId === 4) {
      return (
        <CustomField
          value={formik.values.checkNumber}
          type="text"
          label="Check/EFT#"
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
      console.log("formik.values" , formik.values)
      console.log("paymentDataForApi", paymentDataForApi);
      console.log("formik.values.paymentBy", formik.values.paymentBy);
      const loadingBtn = setTimeout(() => {
        setShowPostPay(true);
      }, 1500);
      loadingBtn && setApplyEob(true);
    }
  };

  useEffect(() => {
    dispatch(setPaymentDataForApi(paymentInitVal3));
  }, []);

  return (
    <>
      <Box className="backgroundpatient ">
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
                          onChange={() =>
                            formik.setFieldValue("isClaim", false)
                          }
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
                        value="1"
                        variant="soft"
                        name="paymentMethodId"
                        checked={formik.values.paymentMethodId === 1}
                        // onChange={formik.handleChange}
                        onChange={(e)=>{
                                formik.setFieldValue("paymentMethodId" , Number(e.target.value))
                        }}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Credit Card"
                    control={
                      <Radio
                        value="3"
                        variant="soft"
                        name="paymentMethodId"
                        checked={formik.values.paymentMethodId === 3}
                        // onChange={formik.handleChange}
                        onChange={(e)=>{
                          formik.setFieldValue("paymentMethodId" , Number(e.target.value))
                  }}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Electronic Fund Transfer"
                    control={
                      <Radio
                        value="4"
                        variant="soft"
                        name="paymentMethodId"
                        checked={formik.values.paymentMethodId === 4}
                        // onChange={formik.handleChange}
                        onChange={(e)=>{
                          formik.setFieldValue("paymentMethodId" , Number(e.target.value))
                  }}
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
      </Box>
    </>
  );
};

export default NewPayment;
