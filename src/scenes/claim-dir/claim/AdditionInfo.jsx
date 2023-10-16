import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import CustomDatePicker from "../../../components/CustomDatePicker";
import CustomField from "../../../components/CustomField";
import CustomSelectBox from "../../../components/CustomSelectBox";
import { getData } from "../../../config/axiosFunctions";
import path from "../../../config/apiUrl";

const AdditionInfo = ({ formik }) => {
  const [delayReason, setDelayReason] = useState([]);
  const [specialProgram, setSpecialProgram] = useState([]);
  const [signaturePatient, setSignaturePatient] = useState([]);
  const [insureSignature, setInsureSignature] = useState([]);
  const [providerAcceptance, setProviderAcceptance] = useState([]);
  const [documentationMethod, setDocumentationMethod] = useState([]);
  const [documentationType, setDocumentationType] = useState([]);
  const [serviceAuthorization, setServiceAuthorization] = useState([]);
  console.log(formik.values.formType, "vals1234");
  // Define data fetching URLs
  const dataFetchUrls = {
    delayReason: `${path}/ct-delayReason`,
    specialProgram: `${path}/ct-specialProgram`,
    patientSignature: `${path}/patientSignature`,
    insureSignature: `${path}/ct-insuredSignature`,
    providerAcceptance: `${path}/ct-providerAcceptance`,
    documentationMethod: `${path}/ct-documentationMethod`,
    documentationType: `${path}/ct-documentationType`,
    serviceAuthorization: `${path}/ct-serviceAuthorization`,
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
    fetchDataOptions(dataFetchUrls.delayReason, setDelayReason);
    fetchDataOptions(dataFetchUrls.specialProgram, setSpecialProgram);
    fetchDataOptions(dataFetchUrls.patientSignature, setSignaturePatient);
    fetchDataOptions(dataFetchUrls.insureSignature, setInsureSignature);
    fetchDataOptions(dataFetchUrls.providerAcceptance, setProviderAcceptance);
    fetchDataOptions(dataFetchUrls.documentationMethod, setDocumentationMethod);
    fetchDataOptions(dataFetchUrls.documentationType, setDocumentationType);
    fetchDataOptions(
      dataFetchUrls.serviceAuthorization,
      setServiceAuthorization
    );
  }, []);

  return (
    <>
      <Box margin="20px">
        <div>
          <Typography variant="h5" component={"p"}>
            Show Additional Information about each field
          </Typography>
          <FormControl
            sx={{
              margin: "20px 0",
            }}
          >
            <RadioGroup row name="row-radio-buttons-group">
              <FormControlLabel
                value={1}
                control={
                  <Radio
                    checked={formik.values.formType === "1"}
                    onChange={() => formik.setFieldValue("formType", "1")}
                  />
                }
                label="None"
              />
              <FormControlLabel
                value={2}
                control={
                  <Radio
                    checked={formik.values.formType === "2"}
                    onChange={() => formik.setFieldValue("formType", "2")}
                  />
                }
                label="ANSI Location (For Electronic Claims)"
              />
              <FormControlLabel
                value={3}
                control={
                  <Radio
                    checked={formik.values.formType === "3"}
                    onChange={() => formik.setFieldValue("formType", "3")}
                  />
                }
                label="CMS 1500 (02-12) Box Numbers (For Printed Claims)"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {/* patient condition */}
        <Accordion>
          <AccordionSummary>
            <Typography>Patient Condition</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>Is Patient Condition Related to:</Typography>
            <Stack direction="row" alignItems="center" marginTop="30px">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ width: "100px" }}
              >
                Employement
              </FormLabel>
              <RadioGroup
                sx={{
                  marginLeft: "20px",
                  // width: "150px",
                  border: "1px solid red",
                }}
                row
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      checked={formik.values.isEmployment}
                      onChange={() =>
                        formik.setFieldValue("isEmployment", true)
                      }
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      checked={!formik.values.isEmployment}
                      onChange={() =>
                        formik.setFieldValue("isEmployment", false)
                      }
                    />
                  }
                  label="No"
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 CLM-11-1 (EM)"
                    : formik.values.formType === "3"
                    ? "BOX 10a"
                    : ""}
                </Typography>
              </RadioGroup>
            </Stack>
            <Stack direction="row" alignItems="center" marginTop="15px">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ width: "100px" }}
              >
                Auto Accident
              </FormLabel>
              <RadioGroup
                sx={{
                  marginLeft: "20px",
                  // width: "150px",
                }}
                row
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      checked={formik.values.isAutoAccident}
                      onChange={() =>
                        formik.setFieldValue("isAutoAccident", true)
                      }
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      checked={!formik.values.isAutoAccident}
                      onChange={() =>
                        formik.setFieldValue("isAutoAccident", false)
                      }
                    />
                  }
                  label="No"
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 CLM-11-1 (AA)"
                    : formik.values.formType === "3"
                    ? "BOX 10b"
                    : ""}
                </Typography>
              </RadioGroup>
            </Stack>
            <Stack direction="row" alignItems="center" marginTop="15px">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ width: "100px" }}
              >
                Other Accident
              </FormLabel>
              <RadioGroup
                sx={{
                  marginLeft: "20px",
                  // width: "150px",
                }}
                row
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      checked={formik.values.isOtherAccident}
                      onChange={() =>
                        formik.setFieldValue("isOtherAccident", true)
                      }
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      checked={!formik.values.isOtherAccident}
                      onChange={() =>
                        formik.setFieldValue("isOtherAccident", false)
                      }
                    />
                  }
                  label="No"
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 CLM-11-1 (OA)"
                    : formik.values.formType === "3"
                    ? "BOX 10c"
                    : ""}
                </Typography>
              </RadioGroup>
            </Stack>

            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "30px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 300px))",
                },
              }}
            >
              <Stack alignItems="center" direction="row">
                <CustomDatePicker
                  dateLabel="Accident Illness Date"
                  dateValue={formik.values.accidentDate}
                  handleDateChange={(value) =>
                    formik.setFieldValue("accidentDate", value)
                  }
                  handleDateBlur={() =>
                    formik.setFieldTouched("accidentDate", true)
                  }
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 DTP-439 "
                    : formik.values.formType === "3"
                    ? "BOX 14/15*"
                    : ""}
                </Typography>
              </Stack>

              <Stack alignItems="center" direction="row">
                <CustomDatePicker
                  dateLabel="Last Menstrual Period"
                  dateValue={formik.values.lastMenstrualDate}
                  handleDateChange={(value) =>
                    formik.setFieldValue("lastMenstrualDate", value)
                  }
                  handleDateBlur={() =>
                    formik.setFieldTouched("lastMenstrualDate", true)
                  }
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 DTP-484"
                    : formik.values.formType === "3"
                    ? "BOX 14"
                    : ""}
                </Typography>
              </Stack>

              <Stack alignItems="center" direction="row">
                <CustomDatePicker
                  dateLabel="Initial Treatment Date"
                  dateValue={formik.values.initialTreatmentDate}
                  handleDateChange={(value) =>
                    formik.setFieldValue("initialTreatmentDate", value)
                  }
                  handleDateBlur={() =>
                    formik.setFieldTouched("initialTreatmentDate", true)
                  }
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 DTP-454"
                    : formik.values.formType === "3"
                    ? "BOX 15"
                    : ""}
                </Typography>
              </Stack>

              <Stack alignItems="center" direction="row">
                <CustomDatePicker
                  dateLabel="Date Last Seen"
                  dateValue={formik.values.lastSeenDate}
                  handleDateChange={(value) =>
                    formik.setFieldValue("lastSeenDate", value)
                  }
                  handleDateBlur={() =>
                    formik.setFieldTouched("lastSeenDate", true)
                  }
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 DTP-304"
                    : formik.values.formType === "3"
                    ? "BOX 15"
                    : ""}
                </Typography>
              </Stack>

              <Stack alignItems="center" direction="row">
                <CustomDatePicker
                  dateLabel="Unable to Work From Date"
                  dateValue={formik.values.unableToWorkFromDate}
                  handleDateChange={(value) =>
                    formik.setFieldValue("unableToWorkFromDate", value)
                  }
                  handleDateBlur={() =>
                    formik.setFieldTouched("unableToWorkFromDate", true)
                  }
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 DTP-314"
                    : formik.values.formType === "3"
                    ? "BOX 16"
                    : null}
                </Typography>
              </Stack>

              <Stack alignItems="center" direction="row">
                <CustomDatePicker
                  dateLabel="Unable to Work To Date"
                  dateValue={formik.values.unableToWorkToDate}
                  handleDateChange={(value) =>
                    formik.setFieldValue("unableToWorkToDate", value)
                  }
                  handleDateBlur={() =>
                    formik.setFieldTouched("unableToWorkToDate", true)
                  }
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 DTP-314"
                    : formik.values.formType === "3"
                    ? "BOX 16"
                    : ""}
                </Typography>
              </Stack>
            </Box>

            <Stack direction="row" alignItems="center" marginTop="30px">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Patient is homebound?
              </FormLabel>
              <RadioGroup
                sx={{ marginLeft: "20px" }}
                row
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      checked={formik.values.isPatientHomebound}
                      onChange={() =>
                        formik.setFieldValue("isPatientHomebound", true)
                      }
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      checked={!formik.values.isPatientHomebound}
                      onChange={() =>
                        formik.setFieldValue("isPatientHomebound", false)
                      }
                    />
                  }
                  label="No"
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 CRC-75"
                    : formik.values.formType === "3"
                    ? "N/A"
                    : null}
                </Typography>
              </RadioGroup>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Claim Information */}
        <Accordion>
          <AccordionSummary>Claim Information</AccordionSummary>

          <AccordionDetails>
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 300px))",
                },
              }}
            >
              <Stack>
                <CustomField
                  type="text"
                  label="Claim Codes"
                  value={formik.values.claimCodes}
                  name="claimCodes"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "N/A"
                    : formik.values.formType === "3"
                    ? "BOX 10d"
                    : null}
                </Typography>
              </Stack>

              <Stack>
                <CustomField
                  type="number"
                  label="Other Claim ID"
                  value={formik.values.otherClaimId}
                  name="otherClaimId"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2010BA REF-Y4"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null}
                </Typography>
              </Stack>
            </Box>
            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "20px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(1, minmax(0, 620px))",
                },
              }}
            >
              <Stack>
                <CustomField
                  type="text"
                  label="Additional Claim Information"
                  value={formik.values.claimInformation}
                  name="claimInformation"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />

                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "N/A"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null}
                </Typography>
              </Stack>

              <Stack>
                <CustomField
                  type="text"
                  label="Claim Note"
                  value={formik.values.claimNote}
                  name="claimNote"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null}
                </Typography>
              </Stack>
            </Box>

            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "20px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(1, minmax(0, 300px))",
                },
              }}
            >
              <Stack>
                <CustomField
                  type="text"
                  label="Resubmit Reason Code"
                  value={formik.values.reasonCode}
                  name="reasonCode"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 DTP-435"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null}
                </Typography>
              </Stack>
            </Box>

            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "20px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(1, minmax(0, 620px))",
                },
              }}
            >
              <Stack>
                <CustomSelectBox
                  name="reasonDelayCode"
                  value={formik.values.reasonDelayCode}
                  dropdownOptions={delayReason?.map((opt) => ({
                    value: opt.delayReasonCodeName,
                    id: opt.delayReasonCodeId,
                  }))}
                  label="Detail Reason"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 DTP-096"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null}
                </Typography>
              </Stack>
            </Box>

            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "20px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 300px))",
                },
              }}
            >
              <Stack>
                <CustomDatePicker
                  dateLabel="Hospitalized From Date"
                  dateValue={formik.values.hospitalizedFromDate}
                  handleDateChange={(value) =>
                    formik.setFieldValue("hospitalizedFromDate", value)
                  }
                  handleDateBlur={() =>
                    formik.setFieldTouched("hospitalizedFromDate", true)
                  }
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2400 PSI-2"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null}
                </Typography>
              </Stack>

              <Stack>
                <CustomDatePicker
                  dateLabel="Hospitalized To Date"
                  dateValue={formik.values.hospitalizedToDate}
                  handleDateChange={(value) =>
                    formik.setFieldValue("hospitalizedToDate", value)
                  }
                  handleDateBlur={() =>
                    formik.setFieldTouched("hospitalizedToDate", true)
                  }
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 CLM-12"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null}
                </Typography>
              </Stack>
            </Box>

            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "20px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(1, minmax(0, 300px))",
                },
              }}
            >
              <Stack>
                <CustomField
                  type="number"
                  label="Lab Charges"
                  value={formik.values.labCharges}
                  name="labCharges"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
              </Stack>
            </Box>

            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "20px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(1, minmax(0, 620px))",
                },
              }}
            >
              <Stack>
                <CustomSelectBox
                  name="specialProgramCode"
                  value={formik.values.specialProgramCode}
                  dropdownOptions={specialProgram?.map((opt) => ({
                    value: opt.specialProgramName,
                    id: opt.specialProgramId,
                  }))}
                  label="Special Program Codes"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
              </Stack>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* Assignment of benefits */}
        <Accordion>
          <AccordionSummary>
            <Typography>Assignment of Benefits</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, ))",
                  md: "repeat(2, minmax(0, 300px))",
                },
              }}
            >
              <CustomSelectBox
                name="patientSignature"
                value={formik.values.patientSignature}
                dropdownOptions={signaturePatient?.map((opt) => ({
                  value: opt.patientSignatureName,
                  id: opt.patientSignatureId,
                }))}
                label="Patient's Signature on File"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomSelectBox
                name="insuredSignature"
                value={formik.values.insuredSignature}
                dropdownOptions={insureSignature?.map((opt) => ({
                  value: opt.insuredSignatureName,
                  id: opt.insuredSignature,
                }))}
                label="Insured's Signature"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomSelectBox
                name="providerAcceptance"
                value={formik.values.providerAcceptance}
                dropdownOptions={providerAcceptance?.map((opt) => ({
                  value: opt.providerAcceptance,
                  id: opt.providerAcceptanceId,
                }))}
                label="Provider Accept Assignment"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* other reference information */}
        <Accordion>
          <AccordionSummary>
            <Typography>Other Reference Information</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 300px))",
                  md: "repeat(2, minmax(0, 300px))",
                },
              }}
            >
              <CustomSelectBox
                name="documentationMethod"
                value={formik.values.documentationMethod}
                dropdownOptions={documentationMethod?.map((opt) => ({
                  value: opt.documentationMethodName,
                  id: opt.documentationMethodId,
                }))}
                label="Documentation Method"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomSelectBox
                name="documentationType"
                value={formik.values.documentationType}
                dropdownOptions={documentationType?.map((opt) => ({
                  value: opt.documentationTypeName,
                  id: opt.documentationTypeId,
                }))}
                label="Documentation Type"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </Box>

            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "20px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 300px))",
                  md: "repeat(2, minmax(0, 300px))",
                },
              }}
            >
              <CustomField
                type="number"
                label="Patient Height (in.)"
                value={formik.values.patientHeight}
                name="patientHeight"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomField
                type="number"
                label="Patient Weight (lbs.)"
                value={formik.values.patientWeight}
                name="patientWeight"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </Box>

            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "20px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 620px))",
                  md: "repeat(1, minmax(0, 620px))",
                },
              }}
            >
              <CustomSelectBox
                name="serviceAuthorization"
                value={formik.values.serviceAuthorization}
                dropdownOptions={serviceAuthorization?.map((opt) => ({
                  value: opt.serviceAuthorizationName,
                  id: opt.serviceAuthorizationId,
                }))}
                label="Service Authorization Exception"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomField
                type="text"
                label="Demonstration Project"
                value={formik.values.demonstrationProject}
                name="demonstrationProject"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomField
                type="text"
                label="Mammography Certification"
                value={formik.values.mammographyCertification}
                name="mammographyCertification"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomField
                type="text"
                label="Investigational Device Exemption"
                value={formik.values.investigationalDeviceExemption}
                name="investigationalDeviceExemption"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomField
                type="text"
                label="Ambulatory Patient Group"
                value={formik.values.ambulatoryPatientGroup}
                name="ambulatoryPatientGroup"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default AdditionInfo;
