import {
  Box,
  Button,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import CustomSelectBox from "../../components/CustomSelectBox";
import { useState } from "react";
import path from "../../config/apiUrl";
import { getData } from "../../config/axiosFunctions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { createNewPayerAction } from "../../features/actions/payerAction";

const NewPayer = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [payerTypeOpt, setPayerTypeOpt] = useState([]);
  const { loading } = useSelector((state) => state.payer);

  const initialValues = {
    payerName: "",
    planName: "",
    payerAddress: "",
    payerGroupNumber: null,
    payerClaimOfficeAddress: "",
    payerZipCode: "",
    payerPhone: null,
    payerFax: null,
    payerEmail: "",
    payerWebsite: "",
    payerCityName: "",
    payerStateName: "",
    payerType: "",
  };

  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log(values, "new payer values");
      if (initialValues.payerName.length === 0) {
        alert("Add Required Fields");
      } else {
        dispatch(createNewPayerAction(values));
      }
      action.resetForm();
      handleClose();
    },
  });

  const dataFetchUrls = {
    payerType: `${path}/ct-payerType`,
  };
  const fetchDataOptions = async (url, setter) => {
    try {
      const response = await getData(url);
      console.log(response.result, "payer types opt11");
      setter(response.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataOptions(dataFetchUrls.payerType, setPayerTypeOpt);
  }, []);
  return (
    <>

      <Typography
        variant="h6"
        component={"h1"}
        fontSize={"1.6rem"}
        marginBottom={4}
      >
        New Payer
        <Box component={"hr"} />
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(2, minmax(0, 1fr))",
            },
          }}
        >
          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerName}
            name="payerName"
            id="payerName"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
          {/* payer type */}
          <CustomSelectBox
            value={values.payerType}
            name="payerType"
            dropdownOptions={payerTypeOpt?.map((opt) => ({
              value: opt.payerType,
              id: opt.payerTypeId,
            }))}
            label="Payer Type"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Plan Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.planName}
            name="planName"
            id="planName"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />

          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="number"
            label="Fax"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerFax}
            name="payerFax"
            id="payerFax"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="number"
            label="Phone Number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerPhone}
            name="payerPhone"
            id="payerPhone"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="number"
            label="Group Number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerGroupNumber}
            name="payerGroupNumber"
            id="payerGroupNumber"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerEmail}
            name="payerEmail"
            id="payerEmail"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Website"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerWebsite}
            name="payerWebsite"
            id="payerWebsite"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="Zipcode"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerZipCode}
            name="payerZipCode"
            id="payerZipCode"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="City"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerCityName}
            name="payerCityName"
            id="payerCityName"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="text"
            label="State"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerStateName}
            name="payerStateName"
            id="payerStateName"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />

          <TextareaAutosize
            size="small"
            fullWidth
            minRows={5}
            variant="filled"
            type="text"
            placeholder="Address"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerAddress}
            name="payerAddress"
            id="payerAddress"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
          <TextareaAutosize
            size="small"
            minRows={5}
            fullWidth
            variant="filled"
            type="text"
            placeholder="Claim Address"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.payerClaimOfficeAddress}
            name="payerClaimOfficeAddress"
            id="payerClaimOfficeAddress"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />

          <Box>
            <Button type="submit" variant="contained" color="secondary">
              {loading ? "Creating Payer..." : "Create Payer"}
            </Button>
          </Box>
        </Box>
  
      </form>
    
    </>
  );
};

export default NewPayer;
