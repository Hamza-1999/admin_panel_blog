import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomSelectBox from "../../components/CustomSelectBox";
import path from "../../config/apiUrl";
import { getData } from "../../config/axiosFunctions";
import { useDispatch } from "react-redux";
import { Add } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomModal from "../../components/CustomModal";
import NewPayer from "./NewPayer";
import PayerList from "./PayerList";
import CustomSearchField from "../../components/CustomSearchField";
import CustomField from "../../components/CustomField";

const PayerInfo = ({ formik }) => {
  const dispatch = useDispatch();

  const [priorityOptions, setPriorityOptions] = useState([]);
  const [policyTypeOptions, setPolicyTypeOptions] = useState([]);
  const [openNewPayerModal, setOpenNewPayerModal] = useState(false);
  const [openPyerListModal, setOpenPyerListModal] = useState(false);

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

  const handleSelectPayer = (val) => {
    console.log(val, "selectpayervalue");
    formik.setFieldValue("payerInfoPayerName", val.payerName);
    formik.setFieldValue("payerId", val.id);
    formik.setFieldValue("payerInfoSequenceNumber", val.payerSequenceNo);
    setOpenPyerListModal(false);
  };
  return (
    <>
      <CustomModal
        open={openPyerListModal}
        handleClose={() => setOpenPyerListModal(false)}
      >
        <PayerList
          handleClose={() => setOpenPyerListModal(false)}
          handleSelectPayer={handleSelectPayer}
        />
      </CustomModal>

      <CustomModal
        open={openNewPayerModal}
        handleClose={() => setOpenNewPayerModal(false)}
      >
        <NewPayer handleClose={() => setOpenNewPayerModal(false)} />
      </CustomModal>

      <Box display="flex" flexDirection="column" gap={5}>
        <Typography  component="h3"
              fontWeight={'bold'}
         >
          Payer Information:
        </Typography>

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
          <CustomField
            type="number"
            label="Copay"
            value={formik.values.payerInfoCopayAmount}
            name="payerInfoCopayAmount"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <CustomField
            type="number"
            label="Co-Insurance %"
            value={formik.values.payerInfoCoInsurancePercent}
            name="payerInfoCoInsurancePercent"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <CustomField
            type="number"
            label="Deductible"
            value={formik.values.payerInfoDeductibleAmount}
            name="payerInfoDeductibleAmount"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <CustomField
            type="number"
            label="Out of Pocket Max"
            value={formik.values.payerInfoOutOfPocketMax}
            name="payerInfoOutOfPocketMax"
            handleChange={formik.handleChange}
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
              md: "repeat(4, minmax(0, 1fr))",
            },
          }}
        >
        
        </Box>

        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "1fr 3fr",
              md: "repeat(4, minmax(0, 1fr))",
              
            },
            width:{xs:'90%',md:'90%'}
          }}
        >
          {/* priority type */}
          <CustomSelectBox
            value={formik.values.payerInfoPriorityName}
            name="payerInfoPriorityName"
            dropdownOptions={priorityOptions?.map((opt) => ({
              value: opt.priorityType,
              id: opt.priorityTypeId,
            }))}
            label="Priority Type"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />

          {/* policy type */}
          <CustomSelectBox
            value={formik.values.payerInfoPolicyType}
            name="payerInfoPolicyType"
            dropdownOptions={policyTypeOptions?.map((opt) => ({
              value: opt.policyType,
              id: opt.policyTypeId,
            }))}
            label="Policy Type"
            handleChange={formik.handleChange}
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
            <FormControl
              sx={{
                width: { xs: "100%", sm: "100%" },
                marginTop:"8px",
                fontSize: "1rem",
               
              }}
            >
              <CustomSearchField 
                label="Payer Name"
                type="text"
                fieldVal={formik.values.payerInfoPayerName}
                name="payerInfoPayerName"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                handleModalOpen={() => setOpenPyerListModal(true)}
              />
            </FormControl>
            <Button 
              sx={{ width: "10%",marginTop:'32px',marginRight:'40px',marginLeft:"10px",marginBottom:"4px",color:'#216FED'}}
              variant="outlined" 
              onClick={() => setOpenNewPayerModal(true)}
            >
              <Add />
            </Button>
          </Box>
          {/* payer info member id */}
          <CustomField
            label="Member Id"
            type="number"
            handleChange={formik.handleChange}
            value={formik.values.payerInfoMemberId}
            name="payerInfoMemberId"
            handleBlur={formik.handleBlur}
          />
          {/* group id */}
          <CustomField
            label="Group Id"
            type="number"
            handleChange={formik.handleChange}
            value={formik.values.payerInfoGroupId}
            name="payerInfoGroupId"
            handleBlur={formik.handleBlur}
          />
        </Box>

        {/* <Box
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
          <CustomField
            type="number"
            label="Copay"
            value={formik.values.payerInfoCopayAmount}
            name="payerInfoCopayAmount"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <CustomField
            type="number"
            label="Co-Insurance %"
            value={formik.values.payerInfoCoInsurancePercent}
            name="payerInfoCoInsurancePercent"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <CustomField
            type="number"
            label="Deductible"
            value={formik.values.payerInfoDeductibleAmount}
            name="payerInfoDeductibleAmount"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <CustomField
            type="number"
            label="Out of Pocket Max"
            value={formik.values.payerInfoOutOfPocketMax}
            name="payerInfoOutOfPocketMax"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
        </Box> */}

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
          {/* <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              label="Effective Date"
              value={formik.values.payerInfoEffectiveDate}
              onChange={(value) =>
                formik.setFieldValue("payerInfoEffectiveDate", value)
              }
              onBlur={() =>
                formik.setFieldTouched("payerInfoEffectiveDate", true)
              }
              renderInput={(params) => <TextField {...params} />}
              inputFormat="MM/DD/YYYY"
              // clearable
            />
          </LocalizationProvider> */}


<div>
  <label style={{ color: "#216FED",fontSize:"17px",fontWeight:'bold' }}>Effective Date</label>
  <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
    <DatePicker className="payerInfoEffectiveDate"
      value={formik.values.dateOfDeath}
      onChange={(value) =>
        formik.setFieldValue("payerInfoEffectiveDate", value)
      }
      onBlur={() => formik.setFieldTouched("payerInfoEffectiveDate", true)}
      renderInput={(params) => <TextField {...params} />}
      inputFormat="MM/DD/YYYY"
    />
  </LocalizationProvider>
</div>

          {/* <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              label="Termination Date"
              value={formik.values.payerInfoTerminationDate}
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
          </LocalizationProvider> */}


<div>
  <label style={{ color: "#216FED",fontSize:"17px",fontWeight:'bold' }}>Termination Date</label>
  <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
    <DatePicker className="payerInfoTerminationDate"
      value={formik.values.dateOfDeath}
      onChange={(value) =>
        formik.setFieldValue("payerInfoTerminationDate", value)
      }
      onBlur={() => formik.setFieldTouched("payerInfoTerminationDate", true)}
      renderInput={(params) => <TextField {...params} />}
      inputFormat="MM/DD/YYYY"
    />
  </LocalizationProvider>
</div>
        </Box>
      </Box>
    </>
  );
};

export default PayerInfo;
