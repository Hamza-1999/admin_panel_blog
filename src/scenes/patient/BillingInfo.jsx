import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import CustomSelectBox2 from "../../components/CustomSelectBox2";
import { getData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomField from "../../components/CustomField";
import CheckBox from "../../components/CheckBox";

const BillingInfo = ({ formik }) => {
  const [statementType, setStatementType] = useState([]);
  const [mailStatementTo, setMailStatementTo] = useState([]);
  const [relationToPatient, setRelationToPatient] = useState([]);

  // Define data fetching URLs
  const dataFetchUrls = {
    statementType: `${path}/ct-statementType`,
    mailStatementTo: `${path}/ct-mailStatement`,
    relationToPatient: `${path}/ct-relationToPatient`,
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
    fetchDataOptions(dataFetchUrls.statementType, setStatementType);
    fetchDataOptions(dataFetchUrls.mailStatementTo, setMailStatementTo);
    fetchDataOptions(dataFetchUrls.relationToPatient, setRelationToPatient);
  }, []);
  return (
    <Box display="flex" flexDirection="column">
      <Accordion defaultExpanded={true}>
        <AccordionSummary>
          <Typography variant="h2" fontWeight='600' >Statement Options</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Box display="flex" gap="20px" flexDirection="column">
            {/* <FormGroup>
             <FormControlLabel 
              className="customLabel"
              control={<Checkbox />} label="Send Statement" />
            </FormGroup> */}





            {/* statement type */}
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
              <CustomSelectBox2
                value={formik.values.statementTypeId}
                name="statementTypeId"
                dropdownOptions={statementType?.map((opt) => ({
                  value: opt.statementType,
                  id: opt.statementTypeId,
                }))}
                label="State Type"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                formik={formik}
              />
              {/* mail statement */}
              <CustomSelectBox2
                value={formik.values.mailStatementId}
                name="mailStatementId"
                dropdownOptions={mailStatementTo?.map((opt) => ({
                  value: opt.mailStatementType,
                  id: opt.mailStatementId,
                }))}
                label="Mail Statement To"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                formik={formik}
              />
            </Box>
            {/* comment */}
            <Stack>
              <label  className="customLabel">Patient Comment (applies to user print statements)</label>
              <TextareaAutosize
                minRows={10}
                value={formik.values.patientComment1}
                name="patientComment1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ resize: "none", fontSize:"1.5rem" }}
              />
            </Stack>
            <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}>
              <label className="customLabel" style={{ display: "block" }}>
                Patient Comment (applies to automated statements)
              </label>
              <TextareaAutosize
                minRows={6}
                value={formik.values.patientComment2}
                name="patientComment2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ resize: "none", width: "100%", fontSize:"1.5rem" }}
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* collection options */}
      <Accordion>
        <AccordionSummary >
       <Typography variant="h2" fontWeight="600">
       Collection Options
     </Typography>
     </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={
            <CheckBox/>} 

label={
  <Typography variant="h4" fontWeight='600'>
Send Statement
  </Typography>
}
/>
            <Typography variant="h3" component="p" fontSize="1.4rem" marginBottom={'6px'} marginTop={'8px'}>
              (applies to statement automation and batch printing)
            </Typography>
          </FormGroup>
          {/*  */}
          <Box
            display="flex"
            gap="20px"
            flexDirection={{ xs: "column", sm: "row", md: "row" }}
            alignItems={{ xs: "flex-start", sm: "flex-end", md: "flex-end" }}
            justifyContent="space-between"
          >
            <Box width={{ xs: "100%", sm: "30%", md: "35%" }}>
              <CustomDatePicker
                dateLabel="Collection Date"
                dateValue={formik.values.hospitalizedToDate}
                handleDateChange={(value) =>
                  formik.setFieldValue("collectionDate", value)
                }
                handleDateBlur={() =>
                  formik.setFieldTouched("collectionDate", true)
                }
              />
            </Box>

            <Box width={{ xs: "100%", sm: "70%", md: "65%" }}>
              <CustomField
                type="text"
                label="Collection Reason"
                value={formik.values.collectionReason}
                name="collectionReason"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* payment portal */}
      <Accordion>
        {/* <AccordionSummary>Payment Portal Options</AccordionSummary> */}
        <AccordionSummary >
       <Typography variant="h2" fontWeight="600">
       Payment Portal Options
     </Typography>
     </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography component="h4" fontWeight="500">No Payment Portal</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* guarantor */}
      <Accordion>
        {/* <AccordionSummary>Guarantor</AccordionSummary> */}
        <AccordionSummary >
       <Typography variant="h2" fontWeight="600">
       Guarantor
     </Typography>
     </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column" gap="20px">
            <Box width={{ xs: "100%", sm: "60%", md: "50%" }}>
              <CustomSelectBox2
                value={formik.values.billingRelationshipToPatientId}
                name="billingRelationshipToPatientId"
                dropdownOptions={relationToPatient?.map((opt) => ({
                  value: opt.relationShipToPatientName,
                  id: opt.relationShipToPatientId,
                }))}
                label="Relation to Patient"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                formik={formik}
              />
            </Box>

            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              justifyContent="space-between"
              gap="20px"
            >
              <FormControl
                sx={{ width: { xs: "100%", sm: "100%", md: "38%" } }}
              >
                <CustomField
                  label="Last Name"
                  value={formik.values.guarantorLastName}
                  name="guarantorLastName"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
              </FormControl>
              <FormControl
                sx={{ width: { xs: "100%", sm: "100%", md: "38%" } }}
              >
                <CustomField
                  label="First Name"
                  value={formik.values.guarantorFirstName}
                  name="guarantorFirstName"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
              </FormControl>
              <FormControl
                sx={{ width: { xs: "100%", sm: "100%", md: "20%" } }}
              >
                <CustomField
                  label="MI"
                  value={formik.values.guarantorMI}
                  name="guarantorMI"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
              </FormControl>
            </Stack>

            <Box
              display="grid"
              alignItems="end"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 300px))",
                  md: "repeat(2, minmax(0, 300px))",
                },
              }}
            >
              <CustomDatePicker
                dateLabel="Date of Birth"
                dateValue={formik.values.guarantorDOB}
                handleDateChange={(value) =>
                  formik.setFieldValue("guarantorDOB", value)
                }
                handleDateBlur={() =>
                  formik.setFieldTouched("guarantorDOB", true)
                }
              />

              <CustomField
                label="SSN"
                type="text"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.guarantorSSN}
                name="guarantorSSN"
              />
            </Box>

            <Stack>
              <label className="customLabel">Address</label>
              <TextareaAutosize
                value={formik.values.guarantorAddress}
                name="guarantorAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minRows={5}
                style={{ resize: "none",fontSize:"1.5rem" }}
              />
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              justifyContent="space-between"
              gap="20px"
            >
              <FormControl sx={{ width: { xs: "100%", sm: "33%", md: "49%" } }}>
                <CustomField
                  label="City"
                  value={formik.values.guarantorCity}
                  name="guarantorCity"
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </FormControl>
              <FormControl sx={{ width: { xs: "100%", sm: "33%", md: "19%" } }}>
                <CustomField
                  label="State"
                  value={formik.values.guarantorState}
                  name="guarantorState"
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </FormControl>
              <FormControl sx={{ width: { xs: "100%", sm: "33%", md: "29%" } }}>
                <CustomField
                  label="Zip Code"
                  value={formik.values.guarantorZipCode}
                  name="guarantorZipCode"
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </FormControl>
            </Stack>
    <FormGroup>
      <FormControlLabel  
        control={<Checkbox/>}
        label={
          <Typography variant="h4" fontWeight='600'>
            International Address
          </Typography>
        }
       
        // label="International Address"
      />
    </FormGroup>





            <Box
              display="grid"
              alignItems="end"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 300px))",
                  md: "repeat(2, minmax(0, 300px))",
                },
              }}
            >
              <CustomField
                label="Home Phone"
                type="text"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.guarantorHomePhone}
                name="guarantorHomePhone"
              />

              <CustomField
                label="Cell Phone"
                type="text"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.guarantorCellPhone}
                name="guarantorCellPhone"
              />
              <CustomField
                label="Work Phone"
                type="text"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.guarantorWorkPhone}
                name="guarantorWorkPhone"
              />
            </Box>

            <FormControl fullWidth>
              <CustomField
                type="email"
                value={formik.values.guarantorEmail}
                name="guarantorEmail"
                label="Email"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </FormControl>
            <Stack>
              <label className="customLabel">
                  Remarks
                  </label>
              <TextareaAutosize
                minRows={4}
                value={formik.values.guarantorRemarks}
                name="guarantorRemarks"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ resize: "none", width: "100%",fontSize:"1.5rem" }}
              />
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default BillingInfo;
