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
import dayjs from "dayjs";
import styled from "@emotion/styled";
import CustomSelectBox from "../../components/CustomSelectBox";
import { Expand, ExpandMore } from "@mui/icons-material";
// import { createPatientSchema } from "../../schemas";

const PatientInfo = ({ formik, formData, setFormData }) => {
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

  const handleChange = (event) => {
    formik.handleChange(event);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.firstName}
                name="firstName"
                id="firstName"
                // error={!!touched.firstName && !!errors.firstName}
                // helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.lastName}
                name="lastName"
                id="lastName"
                // error={!!touched.lastName && !!errors.lastName}
                // helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.email}
                name="email"
                id="email"
                // error={!!touched.email && !!errors.email}
                // helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Driving License"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.drivingLicense}
                name="drivingLicense"
                id="drivingLicense"
                // error={!!touched.drivingLicense && !!errors.drivingLicense}
                // helperText={touched.drivingLicense && errors.drivingLicense}
                sx={{ gridColumn: "span 1" }}
              />

              <CustomSelectBox
                name="genderIdentityName"
                value={formData.genderIdentityName}
                dropdownOptions={genderOptions?.map((opt) => ({
                  value: opt.genderIdentityName,
                  id: opt.genderIdentityId,
                }))}
                label="Gender"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* sexual orientation dropdown */}
              <CustomSelectBox
                name="sexualOrientationName"
                value={formData.sexualOrientationName}
                dropdownOptions={sexOrientationOptions?.map((opt) => ({
                  value: opt.sexualOrientationName,
                  id: opt.sexualOrientationId,
                }))}
                label="Sex Orientation"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* marital status */}
              <CustomSelectBox
                name="maritalStatusName"
                value={formData.maritalStatusName}
                dropdownOptions={maritalOptions?.map((opt) => ({
                  value: opt.maritalStatusName,
                  id: opt.maritalStatusId,
                }))}
                label="Marital Status"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* Race Status */}
              <CustomSelectBox
                value={formData.raceStatusName}
                name="raceStatusName"
                dropdownOptions={raceOptions?.map((opt) => ({
                  value: opt.raceStatusName,
                  id: opt.raceStatusId,
                }))}
                label="Race Status"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* account types */}
              <CustomSelectBox
                value={formData.accountType}
                name="accountType"
                dropdownOptions={accountTypeOptions?.map((opt) => ({
                  value: opt.accountType,
                  id: opt.accountTypeId,
                }))}
                label="Account Type"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* employeement status */}
              <CustomSelectBox
                value={formData.employmentStatusName}
                name="employmentStatusName"
                dropdownOptions={employeementOptions?.map((opt) => ({
                  value: opt.employmentStatusName,
                  id: opt.employmentStatusId,
                }))}
                label="Employement Status"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* referrel source*/}
              <CustomSelectBox
                value={formData.referralSourceName}
                name="referralSourceName"
                dropdownOptions={referenceOptions?.map((opt) => ({
                  value: opt.referralSourceName,
                  id: opt.referralSourceId,
                }))}
                label="Referral Source"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* relation to patient */}
              <CustomSelectBox
                value={formData.relationShipToPatientName}
                name="relationShipToPatientName"
                dropdownOptions={patienRelationOpt?.map((opt) => ({
                  value: opt.relationShipToPatientName,
                  id: opt.relationShipToPatientId,
                }))}
                label="Relation to Patient"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* Ethnicity Status*/}
              <CustomSelectBox
                value={formData.ethnicityName}
                name="ethnicityName"
                dropdownOptions={ethnicityOptions?.map((opt) => ({
                  value: opt.ethnicityName,
                  id: opt.ethnicityId,
                }))}
                label="Ethnicity Status"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />
              {/* student Status*/}
              <CustomSelectBox
                value={formData.studentStatusName}
                name="studentStatusName"
                dropdownOptions={studentStatusOpt?.map((opt) => ({
                  value: opt.studentStatusName,
                  id: opt.studentStatusId,
                }))}
                label="Student Status"
                handleChange={handleChange}
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
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.cellPhone}
                id="cellPhone"
                name="cellPhone"
                // error={!!touched.cellPhone && !!errors.cellPhone}
                // helperText={touched.cellPhone && errors.cellPhone}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Home Number"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.homePhone}
                name="homePhone"
                id="homePhone"
                // error={!!touched.homePhone && !!errors.homePhone}
                // helperText={touched.homePhone && errors.homePhone}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Work Phone"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.workPhone}
                name="workPhone"
                id="workPhone"
                // error={!!touched.workPhone && !!errors.workPhone}
                // helperText={touched.workPhone && errors.workPhone}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Ext"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.ext}
                name="ext"
                id="ext"
                // error={!!touched.ext && !!errors.ext}
                // helperText={touched.ext && errors.ext}
                sx={{ gridColumn: "span 1" }}
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
                  value={formData.dateOfBirth}
                  onChange={(value) =>
                    formik.setFieldValue("dateOfBirth", value)
                  }
                  onBlur={() => formik.setFieldTouched("dateOfBirth", true)}
                  renderInput={(params) => <TextField {...params} />}
                  inputFormat="MM/DD/YYYY"
                  clearable
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                <DatePicker
                  label="Date of Death"
                  value={formData.dateOfDeath}
                  onChange={(value) =>
                    formik.setFieldValue("dateOfDeath", value)
                  }
                  onBlur={() => formik.setFieldTouched("dateOfDeath", true)}
                  renderInput={(params) => <TextField {...params} />}
                  inputFormat="MM/DD/YYYY"
                  clearable
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
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Street Line Address"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.address}
                id="address"
                name="address"
                // error={!!touched.address && !!errors.address}
                // helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 1" }}
              />

              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Zipcode"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.zipCode}
                id="zipCode"
                name="zipCode"
                // error={!!touched.zipCode && !!errors.zipCode}
                // helperText={touched.zipCode && errors.zipCode}
                sx={{ gridColumn: "span 1" }}
              />

              {/* country types */}
              <CustomSelectBox
                value={formData.countryName}
                name="countryName"
                dropdownOptions={countryOptions?.map((opt) => ({
                  value: opt.countryName,
                  id: opt.countryId,
                }))}
                label="Country"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />
              {/* state options */}
              <CustomSelectBox
                value={formData.stateName}
                name="stateName"
                dropdownOptions={stateOptions?.map((opt) => ({
                  value: opt.stateName,
                  id: opt.stateId,
                }))}
                label="State"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />
              {/* city types */}
              <CustomSelectBox
                value={formData.cityName}
                name="cityName"
                dropdownOptions={cityOptions?.map((opt) => ({
                  value: opt.cityName,
                  id: opt.cityId,
                }))}
                label="City"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />
              {/*  residence Type*/}
              <CustomSelectBox
                value={formData.residenceTypeName}
                name="residenceTypeName"
                dropdownOptions={residenceOptions?.map((opt) => ({
                  value: opt.residenceTypeName,
                  id: opt.residenceTypeId,
                }))}
                label="Residence Type"
                handleChange={handleChange}
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
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.emergencyContactFirstName}
                id="emergencyContactFirstName"
                name="emergencyContactFirstName"
                // error={
                //   !!touched.emergencyContactFirstName &&
                //   !!errors.emergencyContactFirstName
                // }
                // helperText={
                //   touched.emergencyContactFirstName &&
                //   errors.emergencyContactFirstName
                // }
                sx={{ gridColumn: "span 1" }}
              />

              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.emergencyContactLastName}
                id="emergencyContactLastName"
                name="emergencyContactLastName"
                // error={
                //   !!touched.emergencyContactLastName &&
                //   !!errors.emergencyContactLastName
                // }
                // helperText={
                //   touched.emergencyContactLastName &&
                //   errors.emergencyContactLastName
                // }
                sx={{ gridColumn: "span 1" }}
              />

              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.emergencyContactAddress}
                id="emergencyContactAddress"
                name="emergencyContactAddress"
                // error={
                //   !!touched.emergencyContactAddress &&
                //   !!errors.emergencyContactAddress
                // }
                // helperText={
                //   touched.emergencyContactAddress &&
                //   errors.emergencyContactAddress
                // }
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.emergencyContactCity}
                id="emergencyContactCity"
                name="emergencyContactCity"
                // error={
                //   !!touched.emergencyContactCity &&
                //   !!errors.emergencyContactCity
                // }
                // helperText={
                //   touched.emergencyContactCity &&
                //   errors.emergencyContactCity
                // }
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="State"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.emergencyContactState}
                id="emergencyContactState"
                name="emergencyContactState"
                // error={
                //   !!touched.emergencyContactState &&
                //   !!errors.emergencyContactState
                // }
                // helperText={
                //   touched.emergencyContactState &&
                //   errors.emergencyContactState
                // }
                sx={{ gridColumn: "span 1" }}
              />

              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Zipcode"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.emergencyContactZipCode}
                id="emergencyContactZipCode"
                name="emergencyContactZipCode"
                // error={
                //   !!touched.emergencyContactZipCode &&
                //   !!errors.emergencyContactZipCode
                // }
                // helperText={
                //   touched.emergencyContactZipCode &&
                //   errors.emergencyContactZipCode
                // }
                sx={{ gridColumn: "span 1" }}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default PatientInfo;
