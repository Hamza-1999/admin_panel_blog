import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import "./PatientInfo.css";
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
import CustomButton from "../../components/CustomButton";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomSelectBox2 from "../../components/CustomSelectBox2";
import CustomExpandIcon from "../../components/CustomExpandIcon";
import CustomAccordion from "../../components/CustomAccordion";
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
  }, []);

  return (
    <>
      <Box display="flex" flexDirection="column">
        {/* general Info */}
        <CustomAccordion defaultExpanded={true} heading={"General Information"}>

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

              <CustomSelectBox2
                value={formik.values.GenderIdentityStatusId}
                name="GenderIdentityStatusId"
                dropdownOptions={genderOptions?.map((opt) => ({
                  value: opt.genderIdentityName,
                  id: opt.genderIdentityId,
                }))}
                label="Gender"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                formik={formik}
              />

              {/* sexual orientation dropdown */}
              <CustomSelectBox2
                formik={formik}
                name="sexualOrientationId"
                value={formik.values.sexualOrientationId}
                dropdownOptions={sexOrientationOptions?.map((opt) => ({
                  value: opt.sexualOrientationName,
                  id: opt.sexualOrientationId,
                }))}
                label="Sex Orientation"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* marital status */}
              <CustomSelectBox2
                formik={formik}
                name="maritalStatusId"
                value={formik.values.maritalStatusId}
                dropdownOptions={maritalOptions?.map((opt) => ({
                  value: opt.maritalStatusName,
                  id: opt.maritalStatusId,
                }))}
                label="Marital Status"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* Race Status */}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.raceStatusId}
                name="raceStatusId"
                dropdownOptions={raceOptions?.map((opt) => ({
                  value: opt.raceStatusName,
                  id: opt.raceStatusId,
                }))}
                label="Race Status"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* account types */}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.accountTypeId}
                name="accountTypeId"
                dropdownOptions={accountTypeOptions?.map((opt) => ({
                  value: opt.accountType,
                  id: opt.accountTypeId,
                }))}
                label="Account Type"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* employeement status */}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.employmentStatusId}
                name="employmentStatusId"
                dropdownOptions={employeementOptions?.map((opt) => ({
                  value: opt.employmentStatusName,
                  id: opt.employmentStatusId,
                }))}
                label="Employement Status"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* referrel source*/}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.referralSourceId}
                name="referralSourceId"
                dropdownOptions={referenceOptions?.map((opt) => ({
                  value: opt.referralSourceName,
                  id: opt.referralSourceId,
                }))}
                label="Referral Source"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* relation to patient */}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.relationShipToPatientId}
                name="relationShipToPatientId"
                dropdownOptions={patienRelationOpt?.map((opt) => ({
                  value: opt.relationShipToPatientName,
                  id: opt.relationShipToPatientId,
                }))}
                label="Relation to Patient"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* Ethnicity Status*/}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.ethnicityId}
                name="ethnicityId"
                dropdownOptions={ethnicityOptions?.map((opt) => ({
                  value: opt.ethnicityName,
                  id: opt.ethnicityId,
                }))}
                label="Ethnicity Status"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              {/* student Status*/}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.studentStatusId}
                name="studentStatusId"
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
        </CustomAccordion>

        {/* contact details */}
        <CustomAccordion  heading="Contact Details">
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
        </CustomAccordion>

        {/* Birth Details */}
        <CustomAccordion  heading="Birth Details">
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
              <div>
                <label className="customLabel">Date of Birth</label>
                <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                  <CustomDatePicker
                    className="customDatePicker"
                    // label="Date of Death"
                    value={formik.values.dateOfBirth}
                    onChange={(value) =>
                      formik.setFieldValue("dateOfBirth", value)
                    }
                    onBlur={() => formik.setFieldTouched("dateOfBirth", true)}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="MM/DD/YYYY"
                  />
                </LocalizationProvider>
              </div>
              <div>
                <label className="customLabel">Date of Death</label>
                <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                  <CustomDatePicker
                    className="customDatePicker"
                    // label="Date of Death"
                    value={formik.values.dateOfDeath}
                    onChange={(value) =>
                      formik.setFieldValue("dateOfDeath", value)
                    }
                    onBlur={() => formik.setFieldTouched("dateOfDeath", true)}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="MM/DD/YYYY"
                  />
                </LocalizationProvider>
              </div>
            </Box>
          </AccordionDetails>
        </CustomAccordion>

        {/* addres details */}
        <CustomAccordion  heading="Address Details">
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
              <CustomSelectBox2
                formik={formik}
                value={formik.values.countryId}
                name="countryId"
                dropdownOptions={countryOptions?.map((opt) => ({
                  value: opt.countryName,
                  id: opt.countryId,
                }))}
                label="Country"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              {/* state options */}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.stateId}
                name="stateId"
                dropdownOptions={stateOptions?.map((opt) => ({
                  value: opt.stateName,
                  id: opt.stateId,
                }))}
                label="State"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              {/* city types */}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.cityId}
                name="cityId"
                dropdownOptions={cityOptions?.map((opt) => ({
                  value: opt.cityName,
                  id: opt.cityId,
                }))}
                label="City"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              {/*  residence Type*/}
              <CustomSelectBox2
                formik={formik}
                value={formik.values.residenceTypeId}
                name="residenceTypeId"
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
        </CustomAccordion>

        {/* emergency contact */}
        <CustomAccordion heading="Emergency Contact">
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
        </CustomAccordion>
      </Box>
    </>
  );
};

export default PatientInfo;
