import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextField,
  Typography,
} from "@mui/material";

import { ErrorMessage, Field, Formik } from "formik";
// import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
// import { useState } from "react";
import FormInfoHeading from "../../components/FormInfoHeading";
import { useDispatch, useSelector } from "react-redux";
import { newPatientAction } from "../../features/actions/createPatientAction";
import { getData } from "../../config/axiosFunctions";
import { useEffect, useState } from "react";
import path from "../../config/apiUrl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomSelectBox from "../../components/CustomSelectBox";
import { Expand, ExpandMore } from "@mui/icons-material";
import CustomField from "../../components/CustomField";
import CustomSearchField from "../../components/CustomSearchField";
// import { createPatientSchema } from "../../schemas";

const PatientInfo = ({ formik }) => {
  console.log(formik.values, "formdata");
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  const [accountTypeOptions, setAccountTypeOptions] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);
  const [maritalOptions, setMaritalOptions] = useState([]);
  const [raceOptions, setRaceOptions] = useState([]);
  const [sexOrientationOptions, setSexOrientationOptions] = useState([]);
  const [employeementOptions, setEmployeementOptions] = useState([]);
  const [referenceOptions, setReferenceOptions] = useState([]);
  const [patienRelationOpt, setPatientRelationOpt] = useState([]);
  const [ethnicityOptions, setEthnicityOptions] = useState([]);
  const [studentStatusOpt, setStudentStatusOpt] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [residenceOptions, setResidenceOptions] = useState([]);

  const dispatch = useDispatch();

  // Define data fetching URLs
  const dataFetchUrls = {
    accountType: `${path}/ct-accountType`,
    genderTypes: `${path}/ct-genderIdentity`,
    maritalStatus: `${path}/ct-maritalStatus`,
    raceStatus: `${path}/ct-raceStatus`,
    sexualOrientation: `${path}/ct-sexualorientatioStatus`,
    employmentStatus: `${path}/ct-employmentStatus`,
    referralSource: `${path}/ct-referralSource`,
    relationToPatient: `${path}/ct-relationToPatient`,
    ethnicityStatus: `${path}/ct-ethnicityStatus`,
    studentStatus: `${path}/ct-studentStatus`,
    cities: `${path}/city`,
    countries: `${path}/country`,
    states: `${path}/state`,
    residenceTypes: `${path}/ct-residenceType`,
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
    fetchDataOptions(dataFetchUrls.accountType, setAccountTypeOptions);
    fetchDataOptions(dataFetchUrls.cities, setCityOptions);
    fetchDataOptions(dataFetchUrls.countries, setCountryOptions);
    fetchDataOptions(dataFetchUrls.employmentStatus, setEmployeementOptions);
    fetchDataOptions(dataFetchUrls.ethnicityStatus, setEthnicityOptions);
    fetchDataOptions(dataFetchUrls.genderTypes, setGenderOptions);
    fetchDataOptions(dataFetchUrls.maritalStatus, setMaritalOptions);
    fetchDataOptions(dataFetchUrls.raceStatus, setRaceOptions);
    fetchDataOptions(dataFetchUrls.referralSource, setReferenceOptions);
    fetchDataOptions(dataFetchUrls.relationToPatient, setPatientRelationOpt);
    fetchDataOptions(dataFetchUrls.residenceTypes, setResidenceOptions);
    fetchDataOptions(dataFetchUrls.sexualOrientation, setSexOrientationOptions);
    fetchDataOptions(dataFetchUrls.states, setStateOptions);
    fetchDataOptions(dataFetchUrls.studentStatus, setStudentStatusOpt);
  }, [dispatch]);

  return (
    <>
      <Box display="flex" flexDirection="column">
        {/* general Info */}
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              component={"h2"}
              fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.4rem" }}
            >
              General Information:
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
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
                type="text"
                name="firstName"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                value={formik.values.firstName}
                label="First Name"
              />
              <CustomField
                type="text"
                name="lastName"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                value={formik.values.lastName}
                label="Last Name"
              />
              <CustomField
                type="text"
                name="email"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                value={formik.values.email}
                label="Email"
              />
              <CustomField
                type="text"
                name="drivingLicense"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                value={formik.values.drivingLicense}
                label="Driving License"
              />

              {/* payer and provider */}
              <CustomSearchField />

              <CustomSelectBox
                name="genderIdentityName"
                value={formik.values.genderIdentityName}
                dropdownOptions={genderOptions?.map((opt) => ({
                  value: opt.genderIdentityName,
                  id: opt.genderIdentityId,
                }))}
                label="Gender"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* sexual orientation dropdown */}
              <CustomSelectBox
                name="sexualOrientationName"
                value={formik.values.sexualOrientationName}
                dropdownOptions={sexOrientationOptions?.map((opt) => ({
                  value: opt.sexualOrientationName,
                  id: opt.sexualOrientationId,
                }))}
                label="Sex Orientation"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* marital status */}
              <CustomSelectBox
                name="maritalStatusName"
                value={formik.values.maritalStatusName}
                dropdownOptions={maritalOptions?.map((opt) => ({
                  value: opt.maritalStatusName,
                  id: opt.maritalStatusId,
                }))}
                label="Marital Status"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* Race Status */}
              <CustomSelectBox
                value={formik.values.raceStatusName}
                name="raceStatusName"
                dropdownOptions={raceOptions?.map((opt) => ({
                  value: opt.raceStatusName,
                  id: opt.raceStatusId,
                }))}
                label="Race Status"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* account types */}
              <CustomSelectBox
                value={formik.values.accountType}
                name="accountType"
                dropdownOptions={accountTypeOptions?.map((opt) => ({
                  value: opt.accountType,
                  id: opt.accountTypeId,
                }))}
                label="Account Type"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* employeement status */}
              <CustomSelectBox
                value={formik.values.employmentStatusName}
                name="employmentStatusName"
                dropdownOptions={employeementOptions?.map((opt) => ({
                  value: opt.employmentStatusName,
                  id: opt.employmentStatusId,
                }))}
                label="Employement Status"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* referrel source*/}
              <CustomSelectBox
                value={formik.values.referralSourceName}
                name="referralSourceName"
                dropdownOptions={referenceOptions?.map((opt) => ({
                  value: opt.referralSourceName,
                  id: opt.referralSourceId,
                }))}
                label="Referral Source"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* relation to patient */}
              <CustomSelectBox
                value={formik.values.relationShipToPatientName}
                name="relationShipToPatientName"
                dropdownOptions={patienRelationOpt?.map((opt) => ({
                  value: opt.relationShipToPatientName,
                  id: opt.relationShipToPatientId,
                }))}
                label="Relation to Patient"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* Ethnicity Status*/}
              <CustomSelectBox
                value={formik.values.ethnicityName}
                name="ethnicityName"
                dropdownOptions={ethnicityOptions?.map((opt) => ({
                  value: opt.ethnicityName,
                  id: opt.ethnicityId,
                }))}
                label="Ethnicity Status"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              {/* student Status*/}
              <CustomSelectBox
                value={formik.values.studentStatusName}
                name="studentStatusName"
                dropdownOptions={studentStatusOpt?.map((opt) => ({
                  value: opt.studentStatusName,
                  id: opt.studentStatusId,
                }))}
                label="Student Status"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* contact details */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              component={"h2"}
              fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.4rem" }}
            >
              Contact Details:
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
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
              {/* cell number */}
              <CustomField
                type="number"
                name="cellPhone"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                value={formik.values.cellPhone}
                label="Phone Number"
              />
              {/* home phone number */}
              <CustomField
                type="number"
                name="homePhone"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                value={formik.values.homePhone}
                label="Home Number"
              />
              <CustomField
                type="number"
                name="workPhone"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                value={formik.values.workPhone}
                label="Work Number"
              />
              <CustomField
                type="number"
                name="ext"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                value={formik.values.ext}
                label="Ext"
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Birth Details */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              component={"h2"}
              fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.4rem" }}
            >
              Birth Details:
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
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
                  label="Date of Birth"
                  value={formik.values.dateOfBirth}
                  onChange={(value) => {
                    formik.setFieldValue("dateOfBirth", value);
                  }}
                  onBlur={() => formik.setFieldTouched("dateOfBirth", true)}
                  renderInput={(params) => <TextField {...params} />}
                  inputFormat="MM/DD/YYYY"
                  // clearable
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                <DatePicker
                  label="Date of Death"
                  value={formik.values.dateOfDeath}
                  onChange={(value) =>
                    formik.setFieldValue("dateOfDeath", value)
                  }
                  onBlur={() => formik.setFieldTouched("dateOfDeath", true)}
                  renderInput={(params) => <TextField {...params} />}
                  inputFormat="MM/DD/YYYY"
                  // clearable
                />
              </LocalizationProvider>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* addres details */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              component={"h2"}
              fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.4rem" }}
            >
              Address Details:
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
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
              {/* street line address */}
              <CustomField
                type="text"
                value={formik.values.address}
                name="address"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                label="Street Line Address"
              />
              {/* zip code */}
              <CustomField
                type="text"
                value={formik.values.zipCode}
                name="zipCode"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                label="Zipcode"
              />
              {/* country types */}
              <CustomSelectBox
                value={formik.values.countryName}
                name="countryName"
                dropdownOptions={countryOptions?.map((opt) => ({
                  value: opt.countryName,
                  id: opt.countryId,
                }))}
                label="Country"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              {/* state options */}
              <CustomSelectBox
                value={formik.values.stateName}
                name="stateName"
                dropdownOptions={stateOptions?.map((opt) => ({
                  value: opt.stateName,
                  id: opt.stateId,
                }))}
                label="State"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              {/* city types */}
              <CustomSelectBox
                value={formik.values.cityName}
                name="cityName"
                dropdownOptions={cityOptions?.map((opt) => ({
                  value: opt.cityName,
                  id: opt.cityId,
                }))}
                label="City"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              {/*  residence Type*/}
              <CustomSelectBox
                value={formik.values.residenceTypeName}
                name="residenceTypeName"
                dropdownOptions={residenceOptions?.map((opt) => ({
                  value: opt.residenceTypeName,
                  id: opt.residenceTypeId,
                }))}
                label="Residence Type"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* emergency contact */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              component={"h2"}
              fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.4rem" }}
            >
              Emergency Contact:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
              {/* first name */}
              <CustomField
                type="text"
                value={formik.values.emergencyContactFirstName}
                name="emergencyContactFirstName"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                label="First Name"
              />
              {/* last name */}
              <CustomField
                type="text"
                value={formik.values.emergencyContactLastName}
                name="emergencyContactLastName"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                label="Last Name"
              />
              {/* address */}
              <CustomField
                type="text"
                value={formik.values.emergencyContactAddress}
                name="emergencyContactAddress"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                label="Address"
              />
              {/* city */}
              <CustomField
                type="text"
                value={formik.values.emergencyContactCity}
                name="emergencyContactCity"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                label="City"
              />
              {/* state */}
              <CustomField
                type="text"
                value={formik.values.emergencyContactState}
                name="emergencyContactState"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                label="State"
              />
              {/* zipcode */}
              <CustomField
                type="text"
                value={formik.values.emergencyContactZipCode}
                name="emergencyContactZipCode"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                isOutlined={false}
                label="Zip Code"
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default PatientInfo;
