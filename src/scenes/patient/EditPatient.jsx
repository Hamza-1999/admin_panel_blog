import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputBase,
} from "@mui/material";
import { ErrorMessage, Field, Formik } from "formik";
// import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
// import { useState } from "react";

import FormInfoHeading from "../../components/FormInfoHeading";
import { useDispatch, useSelector } from "react-redux";
import {
  getPatientAction,
  updatePatientAction,
} from "../../features/actions/createPatientAction";
import { getData } from "../../config/axiosFunctions";
import { useEffect, useState } from "react";
import path from "../../config/apiUrl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import CustomSelectBox from "../../components/CustomSelectBox";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
// import { createPatientSchema } from "../../schemas";

const EditPatient = ({ handleClose }) => {
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isLoading, setIsLoading] = useState(true);
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

  const { accountNo } = useParams();
  const dispatch = useDispatch();
  const { loading, getAllPatients } = useSelector((state) => state.patient);
  const navigate = useNavigate();
  console.log(getAllPatients, "updateGet56");

  useEffect(() => {
    if (!getAllPatients?.result?.length) {
      dispatch(getPatientAction()).then(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  const findPatient = getAllPatients.result?.find(
    (el) => el.accountNo === accountNo
  );

  console.log(findPatient, "finding for edit 66");

  console.log("Date of Birth:", findPatient?.dateOfBirth);
  console.log("Date of Death:", findPatient?.dateOfDeath);
  // initial formik values
  const initialValues = {
    firstName: findPatient?.firstName || "",
    lastName: findPatient?.lastName || "",
    email: findPatient?.email || "",
    drivingLicense: findPatient?.drivingLicense || "",
    dateOfBirth: findPatient?.dateOfBirth
      ? dayjs(findPatient.dateOfBirth)
      : null,
    dateOfDeath: findPatient?.dateOfDeath
      ? dayjs(findPatient.dateOfDeath)
      : null,
    cellPhone: findPatient?.cellPhone || "",
    homePhone: findPatient?.homePhone || "",
    workPhone: findPatient?.workPhone || "",
    ext: findPatient?.ext || "",
    address: findPatient?.address || "",
    zipCode: findPatient?.zipCode || "",
    emergencyContactFirstName: findPatient?.emergencyContactFirstName || "",
    emergencyContactLastName: findPatient?.emergencyContactLastName || "",
    emergencyContactAddress: findPatient?.emergencyContactAddress || "",
    emergencyContactZipCode: findPatient?.emergencyContactZipCode || "",
    emergencyContactState: findPatient?.emergencyContactState || "",
    emergencyContactCity: findPatient?.emergencyContactCity || "",
    // dateOfDeath: null,
    // dropdowns
    genderIdentityName: findPatient?.genderIdentityName || "",
    maritalStatusName: findPatient?.maritalStatusName || "",
    raceStatusName: findPatient?.raceStatusName || "",
    sexualOrientationName: findPatient?.sexualOrientationName || "",
    employmentStatusName: findPatient?.employmentStatusName || "",
    referralSourceName: findPatient?.referralSourceName || "",
    relationShipToPatientName: findPatient?.relationShipToPatientName || "",
    ethnicityName: findPatient?.ethnicityName || "",
    studentStatusName: findPatient?.studentStatusName || "",
    accountType: findPatient?.accountType || "",
    cityName: findPatient?.cityName || "",
    countryName: findPatient?.countryName || "",
    stateName: findPatient?.stateName || "",
    residenceTypeName: findPatient?.residenceTypeName || "",
  };
  const handleFormSubmit = (values, actions) => {
    try {
      dispatch(
        updatePatientAction({
          accountNo: findPatient?.accountNo,
          ...values,
        })
      );
      console.log(values, "checking submit values of update patient");
      actions.setSubmitting(false);
      handleClose();
      // navigate("/managepatient");
    } catch (error) {
      console.error("Error updating patient:", error);
      actions.setSubmitting(false);
    }
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const customSelectMenuStyling = (maxHeight, horizontalAlign) => {
    return {
      MenuProps: {
        getContentAnchorEl: null, // Aligns the menu to the top of the select field
        anchorOrigin: {
          vertical: "bottom",
          horizontal: horizontalAlign || "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: horizontalAlign || "left",
        },
        PaperProps: {
          style: {
            maxHeight: maxHeight || "100px", // Set the maximum height of the menu
          },
        },
      },
    };
  };

  return (
    <Box m="20px">
      <Header title="Update PATIENT" subtitle="Update a Patient Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        // validationSchema={createPatientSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          setValues,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              height: "70vh",
              overflowY: "scroll",
              border: "1px solid lightgrey",
              padding: "17px 27px",
            }}
          >
            <Box display="flex" flexDirection="column" gap={4}>
              {/* general Info */}
              <FormInfoHeading>General Information:</FormInfoHeading>
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.drivingLicense}
                  name="drivingLicense"
                  id="drivingLicense"
                  // error={!!touched.drivingLicense && !!errors.drivingLicense}
                  // helperText={touched.drivingLicense && errors.drivingLicense}
                  sx={{ gridColumn: "span 1" }}
                />

                <CustomSelectBox
                  name="genderIdentityName"
                  value={values.genderIdentityName}
                  dropdownOptions={genderOptions?.map((opt) => ({
                    value: opt.genderIdentityName,
                    id: opt.genderIdentityId,
                  }))}
                  label="Gender"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                {/* sexual orientation dropdown */}
                <CustomSelectBox
                  name="sexualOrientationName"
                  value={values.sexualOrientationName}
                  dropdownOptions={sexOrientationOptions?.map((opt) => ({
                    value: opt.sexualOrientationName,
                    id: opt.sexualOrientationId,
                  }))}
                  label="Sex Orientation"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                {/* marital status */}
                <CustomSelectBox
                  name="maritalStatusName"
                  value={values.maritalStatusName}
                  dropdownOptions={maritalOptions?.map((opt) => ({
                    value: opt.maritalStatusName,
                    id: opt.maritalStatusId,
                  }))}
                  label="Marital Status"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                {/* Race Status */}
                <CustomSelectBox
                  value={values.raceStatusName}
                  name="raceStatusName"
                  dropdownOptions={raceOptions?.map((opt) => ({
                    value: opt.raceStatusName,
                    id: opt.raceStatusId,
                  }))}
                  label="Race Status"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                {/* account types */}
                <CustomSelectBox
                  value={values.accountType}
                  name="accountType"
                  dropdownOptions={accountTypeOptions?.map((opt) => ({
                    value: opt.accountType,
                    id: opt.accountTypeId,
                  }))}
                  label="Account Type"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                {/* employeement status */}
                <CustomSelectBox
                  value={values.employmentStatusName}
                  name="employmentStatusName"
                  dropdownOptions={employeementOptions?.map((opt) => ({
                    value: opt.employmentStatusName,
                    id: opt.employmentStatusId,
                  }))}
                  label="Employement Status"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                {/* referrel source*/}
                <CustomSelectBox
                  value={values.referralSourceName}
                  name="referralSourceName"
                  dropdownOptions={referenceOptions?.map((opt) => ({
                    value: opt.referralSourceName,
                    id: opt.referralSourceId,
                  }))}
                  label="Referral Source"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                {/* relation to patient */}
                <CustomSelectBox
                  value={values.relationShipToPatientName}
                  name="relationShipToPatientName"
                  dropdownOptions={patienRelationOpt?.map((opt) => ({
                    value: opt.relationShipToPatientName,
                    id: opt.relationShipToPatientId,
                  }))}
                  label="Relation to Patient"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                {/* Ethnicity Status*/}
                <CustomSelectBox
                  value={values.ethnicityName}
                  name="ethnicityName"
                  dropdownOptions={ethnicityOptions?.map((opt) => ({
                    value: opt.ethnicityName,
                    id: opt.ethnicityId,
                  }))}
                  label="Ethnicity Status"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                {/* student Status*/}
                <CustomSelectBox
                  value={values.studentStatusName}
                  name="studentStatusName"
                  dropdownOptions={studentStatusOpt?.map((opt) => ({
                    value: opt.studentStatusName,
                    id: opt.studentStatusId,
                  }))}
                  label="Student Status"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </Box>
              {/* contact details */}
              <FormInfoHeading>Contact Details:</FormInfoHeading>
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.cellPhone}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.homePhone}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.workPhone}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ext}
                  name="ext"
                  id="ext"
                  // error={!!touched.ext && !!errors.ext}
                  // helperText={touched.ext && errors.ext}
                  sx={{ gridColumn: "span 1" }}
                />
              </Box>

              {/* DATE PICKER */}
              <FormInfoHeading>Birth Details:</FormInfoHeading>

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
                    value={values.dateOfBirth}
                    onChange={(value) => setFieldValue("dateOfBirth", value)}
                    onBlur={() => setFieldTouched("dateOfBirth", true)}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="MM/DD/YYYY"
                    clearable
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                  <DatePicker
                    label="Date of Death"
                    value={values.dateOfDeath}
                    onChange={(value) => setFieldValue("dateOfDeath", value)}
                    onBlur={() => setFieldTouched("dateOfDeath", true)}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="MM/DD/YYYY"
                    clearable
                  />
                </LocalizationProvider>

                {/* <DatePicker
                  selected={values.dateOfBirth}
                  onChange={(date) => setFieldValue("dateOfBirth", date)}
                  onBlur={handleBlur("dateOfBirth")}
                  placeholderText="Date Of Birth"
                  dateFormat="MM/dd/yyyy"
                />
                {touched.dateOfBirth && errors.dateOfBirth ? (
                  <div>{errors.dateOfBirth}</div>
                ) : null}

                <DatePicker
                  selected={values.dateOfDeath}
                  onChange={(date) => setFieldValue("dateOfDeath", date)}
                  onBlur={handleBlur("dateOfDeath")}
                  placeholderText="Date Of Death"
                  dateFormat="MM/dd/yyyy"
                />
                {touched.dateOfDeath && errors.dateOfDeath ? (
                  <div>{errors.dateOfDeath}</div>
                ) : null} */}
              </Box>

              <FormInfoHeading>Address Details:</FormInfoHeading>
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.zipCode}
                  id="zipCode"
                  name="zipCode"
                  // error={!!touched.zipCode && !!errors.zipCode}
                  // helperText={touched.zipCode && errors.zipCode}
                  sx={{ gridColumn: "span 1" }}
                />

                {/* country types */}
                <FormControl>
                  <InputLabel>Country</InputLabel>
                  <Select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.countryName}
                    name="countryName"
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
                  >
                    {countryOptions?.map((opt) => (
                      <MenuItem value={opt.countryName} key={opt.countryId}>
                        {opt.countryName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* state options */}
                <FormControl>
                  <InputLabel>State</InputLabel>
                  <Select
                    onChange={
                      handleChange
                      //   (e) => {
                      //   handleChange(e);
                      //   const selectedOption = stateOptions.find(
                      //     (option) => option.stateName === e.target.value
                      //   );
                      //   if (selectedOption) {
                      //     values.stateId = selectedOption.stateId;
                      //     values.stateName = selectedOption.stateName;
                      //   } else {
                      //     values.stateId = null;
                      //     values.stateName = null;
                      //   }
                      // }
                    }
                    onBlur={handleBlur}
                    value={values.stateName}
                    name="stateName"
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
                  >
                    {stateOptions?.map((opt) => (
                      <MenuItem value={opt.stateName} key={opt.stateId}>
                        {opt.stateName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* city types */}
                <FormControl>
                  <InputLabel>City</InputLabel>
                  <Select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cityName}
                    name="cityName"
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
                  >
                    {cityOptions?.map((opt) => (
                      <MenuItem value={opt.cityName} key={opt.cityId}>
                        {opt.cityName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/*  residence Type*/}
                <CustomSelectBox
                  value={values.residenceTypeName}
                  name="residenceTypeName"
                  dropdownOptions={residenceOptions?.map((opt) => ({
                    value: opt.residenceTypeName,
                    id: opt.residenceTypeId,
                  }))}
                  label="Residence Type"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </Box>

              {/* emergency contact */}
              <FormInfoHeading>Emergency Contact:</FormInfoHeading>
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emergencyContactFirstName}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emergencyContactLastName}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emergencyContactAddress}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emergencyContactCity}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emergencyContactState}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emergencyContactZipCode}
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
            </Box>
            <Box
              display="flex"
              justifyContent="end"
              mt="20px"
              paddingBottom={"20px"}
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Patient"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default EditPatient;
