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
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomSelectBox2 from "../../components/CustomSelectBox2";

const PayerInfo = ({ formik, newFormik }) => {
  const dispatch = useDispatch();

  // const [priorityOptions, setPriorityOptions] = useState([]);
  const [policyTypeOptions, setPolicyTypeOptions] = useState([]);
  const [openNewPayerModal, setOpenNewPayerModal] = useState(false);
  const [openPyerListModal, setOpenPyerListModal] = useState(false);

  const dataFetchUrls = {
    // priorityType: `${path}/ct-priorityType`,
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
    // fetchDataOptions(dataFetchUrls.priorityType, setPriorityOptions);
    fetchDataOptions(dataFetchUrls.policyTypes, setPolicyTypeOptions);
  }, [dispatch]);

  const handleSelectPayer = (val) => {
    console.log(val, "selectpayervalue");
    newFormik.setFieldValue("payerInfoPayerName", val.payerName);
    newFormik.setFieldValue("payerId", val.id);
    newFormik.setFieldValue("payerInfoSequenceNumber", val.payerSequenceNo);
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
        <Typography component="h2" fontWeight="600">
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
            isDecimal={true}
            value={newFormik.values.payerInfoCopayAmount}
            name="payerInfoCopayAmount"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
          />
          <CustomField
            type="number"
            label="Co-Insurance %"
            value={newFormik.values.payerInfoCoInsurancePercent}
            name="payerInfoCoInsurancePercent"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
          />
          <CustomField
            type="number"
            label="Deductible"
            value={newFormik.values.payerInfoDeductibleAmount}
            name="payerInfoDeductibleAmount"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
            isDecimal={true}
          />
          <CustomField
            type="number"
            label="Out of Pocket Max"
            value={newFormik.values.payerInfoOutOfPocketMax}
            name="payerInfoOutOfPocketMax"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
            isDecimal={true}
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
        ></Box>

        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              // sm: "1fr 3fr",
              md: "repeat(4, minmax(0, 1fr))",
            },
            // width:{xs:'90%',md:'90%'}
            width: { xs: "90%", md: "100%" },
          }}
        >
          {/* priority type
          // <CustomSelectBox
          //   value={newFormik.values.payerInfoPriorityName}
          //   name="payerInfoPriorityName"
          //   dropdownOptions={priorityOptions?.map((opt) => ({
          //     value: opt.priorityType,
          //     id: opt.priorityTypeId,
          //   }))}
          //   label="Priority Type"
          //   handleChange={newFormik.handleChange}
          //   handleBlur={newFormik.handleBlur}
          // /> */}

          {/* policy type */}
          <CustomSelectBox2
            value={newFormik.values.payerInfoPolicyId}
            name="payerInfoPolicyId"
            dropdownOptions={policyTypeOptions?.map((opt) => ({
              value: opt.policyType,
              id: opt.policyTypeId,
            }))}
            label="Policy Type"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
          />

          <CustomField
            style={{ marginBottom: "1rem" }}
            label="Member Id"
            type="number"
            handleChange={newFormik.handleChange}
            value={newFormik.values.payerInfoMemberId}
            name="payerInfoMemberId"
            handleBlur={newFormik.handleBlur}
            error={newFormik.errors}
            touched={newFormik.touched}
            isRequired={true}
          />
          {/* group id */}
          <CustomField
            label="Group Id"
            type="number"
            handleChange={newFormik.handleChange}
            value={newFormik.values.payerInfoGroupId}
            name="payerInfoGroupId"
            handleBlur={newFormik.handleBlur}
          />
        </Box>

        {/* <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "3fr 1fr 1fr",
             
            },
          }}
        > */}
        <Box
          sx={{
            display: "flex",
            width: "100%",

            // gridColumn: { xs: "1 / span 1", sm: "1 / span 2", md: "auto" },

            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(1, minmax(0, 1fr))",
            },
          }}
        >
          <FormControl
            sx={{
              width: { xs: "100%", sm: "100%" },
              marginTop: "8px",
              fontSize: "1rem",
            }}
          >
            <CustomSearchField
              label="Payer Name"
              type="text"
              fieldVal={newFormik.values.payerInfoPayerName}
              name="payerInfoPayerName"
              handleChange={newFormik.handleChange}
              handleBlur={newFormik.handleBlur}
              handleModalOpen={() => setOpenPyerListModal(true)}
              error={newFormik.errors}
              touched={newFormik.touched}
              isRequired={true}
            />
          </FormControl>
          <Button
            sx={{
              marginTop: "38px",
              marginRight: "40px",
              marginLeft: "10px",
              marginBottom: "4px",
              color: "#216FED",
            }}
            variant="outlined"
            onClick={() => setOpenNewPayerModal(true)}
          >
            <Add />
          </Button>
        </Box>

        {/* <CustomField style={{marginBottom:'1rem'}}
            label="Member Id"
            type="number"
            handleChange={newFormik.handleChange}
            value={newFormik.values.payerInfoMemberId}
            name="payerInfoMemberId"
            handleBlur={newFormik.handleBlur}
            
          />
     
          <CustomField
            label="Group Id"
            type="number"
            handleChange={newFormik.handleChange}
            value={newFormik.values.payerInfoGroupId}
            name="payerInfoGroupId"
            handleBlur={newFormik.handleBlur}
          /> */}
        {/* </Box> */}

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
          <div>
            <label className="customLabel">Effective Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
              <CustomDatePicker
                className="payerInfoEffectiveDate"
                value={newFormik.values.dateOfDeath}
                onChange={(value) =>
                  newFormik.setFieldValue("payerInfoEffectiveDate", value)
                }
                onBlur={() =>
                  newFormik.setFieldTouched("payerInfoEffectiveDate", true)
                }
                renderInput={(params) => <TextField {...params} />}
                inputFormat="MM/DD/YYYY"
              />
            </LocalizationProvider>
          </div>

          <div>
            <label className="customLabel">Termination Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
              <CustomDatePicker
                className="payerInfoTerminationDate"
                value={newFormik.values.dateOfDeath}
                onChange={(value) =>
                  newFormik.setFieldValue("payerInfoTerminationDate", value)
                }
                onBlur={() =>
                  newFormik.setFieldTouched("payerInfoTerminationDate", true)
                }
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
