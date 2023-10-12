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
  console.log(formik.values, "vals1234");
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
              <FormControlLabel value={1} control={<Radio />} label="None" />
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="ANSI Location (For Electronic Claims)"
              />
              <FormControlLabel
                value={3}
                control={<Radio />}
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
                  width: "150px",
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
              </RadioGroup>
            </Stack>
            <Stack direction="row" alignItems="center">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ width: "100px" }}
              >
                Auto Accident
              </FormLabel>
              <RadioGroup
                sx={{
                  marginLeft: "20px",
                  width: "150px",
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
              </RadioGroup>
            </Stack>
            <Stack direction="row" alignItems="center">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ width: "100px" }}
              >
                Other Accident
              </FormLabel>
              <RadioGroup
                sx={{
                  marginLeft: "20px",
                  width: "150px",
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
              <CustomField label="Claim Codes" />
              <CustomField label="Other Claim ID" />
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
              <CustomField label="Additional Claim Information" />
              <CustomField label="Claim Note" />
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
              <CustomField label="Resubmit Reason Code" />
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
              <CustomSelectBox
                // name="genderIdentityName"
                // value={formik.values.genderIdentityName}
                dropdownOptions={delayReason?.map((opt) => ({
                  value: opt.delayReasonCodeName,
                  id: opt.delayReasonCodeId,
                }))}
                label="Delail Reason"
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
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 300px))",
                },
              }}
            >
              <CustomDatePicker dateLabel="Hospitalized From Date" />
              <CustomDatePicker dateLabel="Hospitalized To Date" />
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
              <CustomField label="Lab Charges" />
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
              <CustomSelectBox
                // name="genderIdentityName"
                // value={formik.values.genderIdentityName}
                dropdownOptions={specialProgram?.map((opt) => ({
                  value: opt.specialProgramName,
                  id: opt.specialProgramId,
                }))}
                label="Special Program Codes"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
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
                // name="genderIdentityName"
                // value={formik.values.genderIdentityName}
                dropdownOptions={signaturePatient?.map((opt) => ({
                  value: opt.patientSignatureName,
                  id: opt.patientSignatureId,
                }))}
                label="Patient's Signature on File"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomSelectBox
                // name="genderIdentityName"
                // value={formik.values.genderIdentityName}
                dropdownOptions={insureSignature?.map((opt) => ({
                  value: opt.insuredSignatureName,
                  id: opt.insuredSignature,
                }))}
                label="Insured's Signature"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomSelectBox
                // name="genderIdentityName"
                // value={formik.values.genderIdentityName}
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
                // name="genderIdentityName"
                // value={formik.values.genderIdentityName}
                dropdownOptions={documentationMethod?.map((opt) => ({
                  value: opt.documentationMethodName,
                  id: opt.documentationMethodId,
                }))}
                label="Documentation Method"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomSelectBox
                // name="genderIdentityName"
                // value={formik.values.genderIdentityName}
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
              <CustomField label="Patient Height (in.)" />
              <CustomField label="Patient Weight (lbs.)" />
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
                // name="genderIdentityName"
                // value={formik.values.genderIdentityName}
                dropdownOptions={serviceAuthorization?.map((opt) => ({
                  value: opt.serviceAuthorizationName,
                  id: opt.serviceAuthorizationId,
                }))}
                label="Service Authorization Exception"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomField label="Demonstration Project" />
              <CustomField label="Mammography Certification" />
              <CustomField label="Investigational Device Exemption" />
              <CustomField label="Ambulatory Patient Group" />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default AdditionInfo;
