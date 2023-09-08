import {
  Box,
  Button,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomSelectBox from "../../components/CustomSelectBox";
import path from "../../config/apiUrl";
import { getData } from "../../config/axiosFunctions";
import { useDispatch } from "react-redux";
import { Add, Search } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomModal from "../../components/CustomModal";
import NewPayer from "./NewPayer";
import PayerList from "./PayerList";

const PayerInfo = ({ formik, formData, setFormData }) => {
  const dispatch = useDispatch();
  const [priorityOptions, setPriorityOptions] = useState([]);
  const [policyTypeOptions, setPolicyTypeOptions] = useState([]);
  const [openNewPayerModal, setOpenNewPayerModal] = useState(false);
  const [openPyerListModal, setOpenPyerListModal] = useState(false);
  const [selectedPayerName, setSelectedPayerName] = useState(
    formData.payerInfoPayerName
  );
  console.log(selectedPayerName, "payername");

  const handleChange = (event) => {
    console.log(event.target.value, "value");
    formik.handleChange(event);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // const handlePayerNameChange = (event) => {
  //   const newPayerName = event.target.value;
  //   console.log("Selected Payer Name:", newPayerName);

  //   setSelectedPayerName(newPayerName); // Set the selected payer name

  //   const updatedFormData = {
  //     ...formData,
  //     payerInfoPayerName: newPayerName, // Update payerInfoPayerName in formData
  //   };

  //   setFormData(updatedFormData);

  //   console.log("Updated Form Data:", updatedFormData);
  // };

  // Define data fetching URLs
  const dataFetchUrls = {
    priorityType: `${path}/ct-priorityType`,
    policyTypes: `${path}/ct-policyType`,
  };

  // Define a reusable function to fetch data for a given URL
  const fetchDataOptions = async (url, setter) => {
    try {
      const response = await getData(url);
      setter(response.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataOptions(dataFetchUrls.priorityType, setPriorityOptions);
    fetchDataOptions(dataFetchUrls.policyTypes, setPolicyTypeOptions);
  }, [dispatch]);

  //  modal

  useEffect(() => {
    setSelectedPayerName(formData.payerInfoPayerName);
  }, [formData.payerInfoPayerName]);

  return (
    <>
      <CustomModal
        open={openPyerListModal}
        handleClose={() => setOpenPyerListModal(false)}
      >
        <PayerList
          onCellClick={(val) => setSelectedPayerName(val.payerName)}
          handleClose={() => setOpenPyerListModal(false)}
        />
      </CustomModal>

      <CustomModal
        open={openNewPayerModal}
        handleClose={() => setOpenNewPayerModal(false)}
      >
        <NewPayer />
      </CustomModal>

      <Box display="flex" flexDirection="column" gap={5}>
        <Typography variant="h5" component={"h4"} marginBottom="8px">
          Payer Information:
        </Typography>
        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "1fr 3fr",
              md: "repeat(4, minmax(0, 1fr))",
            },
          }}
        >
          {/* priority type */}
          <CustomSelectBox
            value={formData.payerInfoPriorityName}
            name="payerInfoPriorityName"
            dropdownOptions={priorityOptions?.map((opt) => ({
              value: opt.priorityType,
              id: opt.priorityTypeId,
            }))}
            label="Priority Type"
            handleChange={handleChange}
            handleBlur={formik.handleBlur}
          />

          {/* policy type */}
          <CustomSelectBox
            value={formData.payerInfoPolicyType}
            name="payerInfoPolicyType"
            dropdownOptions={policyTypeOptions?.map((opt) => ({
              value: opt.policyType,
              id: opt.policyTypeId,
            }))}
            label="Policy Type"
            handleChange={handleChange}
            handleBlur={formik.handleBlur}
          />
        </Box>

        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "3fr 1fr 1fr",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gridColumn: { xs: "1 / span 1", sm: "1 / span 2", md: "auto" },
            }}
          >
            <TextField
              type="text"
              size="small"
              variant="filled"
              sx={{
                width: { xs: "100%", sm: "100%" },
                fontSize: "1rem",
              }}
              value={selectedPayerName}
              name="payerInfoPayerName"
              onChange={(event) => {
                const newPayerName = event.target.value;
                console.log("Selected Payer Name:", newPayerName);

                setSelectedPayerName(newPayerName); // Set the selected payer name

                formik.handleChange(event);

                setFormData({
                  ...formData,
                  payerInfoPayerName: newPayerName, // Update payerInfoPayerName in formData
                });

                console.log("Updated Form Data:", {
                  ...formData,
                  payerInfoPayerName: newPayerName,
                });
              }}
              onBlur={formik.handleBlur}
              onClick={() => setOpenPyerListModal(true)}
              label="Payer"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              sx={{ width: "10%" }}
              variant="outlined"
              onClick={() => setOpenNewPayerModal(true)}
            >
              <Add />
            </Button>
          </Box>

          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="number"
            label="Member Id"
            onBlur={formik.handleBlur}
            onChange={handleChange}
            value={formData.payerInfoMemberId}
            name="payerInfoMemberId"
            id="payerInfoMemberId"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />

          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="number"
            label="Group Id"
            onBlur={formik.handleBlur}
            onChange={handleChange}
            value={formData.payerInfoGroupId}
            name="payerInfoGroupId"
            id="payerInfoGroupId"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" } }}
          />
        </Box>

        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
          }}
        >
          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="number"
            label="Copay"
            onBlur={formik.handleBlur}
            onChange={handleChange}
            value={formData.payerInfoCopayAmount}
            name="payerInfoCopayAmount"
            id="payerInfoCopayAmount"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: "span 1" }}
          />

          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="number"
            label="Co-Insurance %"
            onBlur={formik.handleBlur}
            onChange={handleChange}
            value={formData.payerInfoCoInsurancePercent}
            name="payerInfoCoInsurancePercent"
            id="payerInfoCoInsurancePercent"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: "span 1" }}
          />

          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="number"
            label="Deductible"
            onBlur={formik.handleBlur}
            onChange={handleChange}
            value={formData.payerInfoDeductibleAmount}
            name="payerInfoDeductibleAmount"
            id="payerInfoDeductibleAmount"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: "span 1" }}
          />

          <TextField
            size="small"
            fullWidth
            variant="filled"
            type="number"
            label="Out of Pocket Max"
            onBlur={formik.handleBlur}
            onChange={handleChange}
            value={formData.payerInfoOutOfPocketMax}
            name="payerInfoOutOfPocketMax"
            id="payerInfoOutOfPocketMax"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: "span 1" }}
          />
        </Box>

        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              label="Effective Date"
              value={formData.payerInfoEffectiveDate}
              onChange={(value) =>
                formik.setFieldValue("payerInfoEffectiveDate", value)
              }
              onBlur={() =>
                formik.setFieldTouched("payerInfoEffectiveDate", true)
              }
              renderInput={(params) => <TextField {...params} />}
              inputFormat="MM/DD/YYYY"
              clearable
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              label="Termination Date"
              value={formData.payerInfoTerminationDate}
              onChange={(value) =>
                formik.setFieldValue("payerInfoTerminationDate", value)
              }
              onBlur={() =>
                formik.setFieldTouched("payerInfoTerminationDate", true)
              }
              renderInput={(params) => <TextField {...params} />}
              inputFormat="MM/DD/YYYY"
              clearable
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </>
  );
};

export default PayerInfo;
