import {
  Box,
  Button,
  TextField,
  Stack,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
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
// import { createPatientSchema } from "../../schemas";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const EditPatient = () => {
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
  const [companyOptions, setCompanyOptions] = useState([]);
  const [branchOptions, setBranchOptions] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { getAllPatients, loading } = useSelector((state) => state.patient);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all patients data if not already loaded
    if (!getAllPatients?.result?.length) {
      dispatch(getPatientAction());
    }
  }, [dispatch]);
  const findPatient = getAllPatients.result?.find(
    (el) => el.patientId === parseInt(id)
  );

  // initial formik values
  const initialValues = {
    patientId: findPatient ? findPatient.patientId : "",
    firstName: findPatient ? findPatient.firstName : "",
    lastName: findPatient ? findPatient.lastName : "",
    email: findPatient ? findPatient.email : "",
    dateOfBirth: findPatient
      ? dayjs(findPatient.dateOfBirth)
      : dayjs("2022-04-17"),
    drivingLicense: findPatient ? findPatient.drivingLicense : "",
    cellPhone: findPatient ? findPatient.cellPhone : "",
    homePhone: findPatient ? findPatient.homePhone : "",
    workPhone: findPatient ? findPatient.workPhone : "",
    ext: findPatient ? findPatient.ext : "",
    address: findPatient ? findPatient.address : "",
    zipCode: findPatient ? findPatient.zipCode : "",
    emergencyContactFirstName: findPatient
      ? findPatient.emergencyContactFirstName
      : "",
    emergencyContactLastName: findPatient
      ? findPatient.emergencyContactLastName
      : "",
    emergencyContactAddress: findPatient
      ? findPatient.emergencyContactAddress
      : "",
    emergencyContactZipCode: findPatient
      ? findPatient.emergencyContactZipCode
      : "",
    emergencyContactState: findPatient ? findPatient.emergencyContactState : "",
    emergencyContactCity: findPatient ? findPatient.emergencyContactCity : "",
    // dateOfDeath: null,
    // dropdowns
    genderName: findPatient ? findPatient.genderName : "",
    maritalStatusName: findPatient ? findPatient.maritalStatusName : "",
    raceName: findPatient ? findPatient.raceName : "",
    sexualOrientationName: findPatient ? findPatient.sexualOrientationName : "",
    employmentStatusName: findPatient ? findPatient.employmentStatusName : "",
    referralSourceName: findPatient ? findPatient.referralSourceName : "",
    relationShipToPatientName: findPatient
      ? findPatient.relationShipToPatientName
      : "",
    ethnicityName: findPatient ? findPatient.ethnicityName : "",
    studentStatusName: findPatient ? findPatient.studentStatusName : "",
    accountTypeName: findPatient ? findPatient.accountTypeName : "",
    cityName: findPatient ? findPatient.cityName : "",
    countryName: findPatient ? findPatient.countryName : "",
    stateName: findPatient ? findPatient.stateName : "",
    residenceName: findPatient ? findPatient.residenceName : "",
    companyName: findPatient ? findPatient.companyName : "",
    branchName: findPatient ? findPatient.branchName : "",
  };

  // Define data fetching URLs
  const dataFetchUrls = {
    accountType: `${path}/ct-accountType`,
    genderTypes: `${path}/ct-genderIdentity`,
    maritalStatus: `${path}/ct-maritalStatus`,
    raceStatus: `${path}/ct-raceStatus`,
    sexualOrientation: `${path}/ct-sexualorientatioStatus`,
    employmentStatus: `${path}/ct-employmentStatus`,
    referralSource: `http://192.168.3.73:3000/ct-referralSource`,
    relationToPatient: `${path}/ct-relationToPatient`,
    ethnicityStatus: `http://192.168.3.73:3000/ct-ethnicityStatus`,
    studentStatus: `${path}/ct-studentStatus`,
    cities: `${path}/city`,
    countries: `${path}/country`,
    states: `${path}/state`,
    residenceTypes: `${path}/ct-residenceType`,
    companies: `${path}/company`,
    branches: `${path}/branch`,
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
    fetchDataOptions(dataFetchUrls.branches, setBranchOptions);
    fetchDataOptions(dataFetchUrls.cities, setCityOptions);
    fetchDataOptions(dataFetchUrls.companies, setCompanyOptions);
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
    // fetchAccountTypeOptions();
    // fetchEmployeementStatus();
  }, [dispatch]);

  const handleFormSubmit = (values, actions) => {
    try {
      dispatch(
        updatePatientAction({
          patientId: findPatient.patientId,
          ...values,
        })
      );
      console.log(values, "checking submit values of createPatient");
      actions.setSubmitting(false);
      navigate("/managepatient");
    } catch (error) {
      console.error("Error updating patient:", error);
      actions.setSubmitting(false);
    }
  };
  return (
    <Box m="20px">
      <Header title="UPDATE PATIENT" subtitle="Update a Patient Profile" />
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
        }) => {
          return (
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
                      md: "repeat(3, minmax(0, 1fr))",
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

                  <FormControl>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = genderOptions.find(
                          (option) =>
                            option.genderIdentityName === e.target.value
                        );
                        if (selectedOption) {
                          values.genderIdentityId =
                            selectedOption.genderIdentityId;
                          values.genderName = selectedOption.genderIdentityName;
                          console.log(values.genderName, "if: - gender");
                        } else {
                          values.genderIdentityId = null;
                          values.genderName = null;
                          console.log(values.genderName, "else gendername");
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.genderName}
                      name="genderName"
                    >
                      {genderOptions?.map((opt) => (
                        <MenuItem
                          value={opt.genderIdentityName}
                          key={opt.genderIdentityId}
                        >
                          {opt.genderIdentityName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* sexual orientation dropdown */}
                  <FormControl>
                    <InputLabel>Sexual Orientation</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = sexOrientationOptions.find(
                          (option) =>
                            option.sexualOrientationName === e.target.value
                        );
                        if (selectedOption) {
                          values.sexualOrientationId =
                            selectedOption.sexualOrientationId;
                          values.sexualOrientationName =
                            selectedOption.sexualOrientationName;
                        } else {
                          values.sexualOrientationId = null;
                          values.sexualOrientationName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.sexualOrientationName}
                      name="sexualOrientationName"
                    >
                      {sexOrientationOptions?.map((opt) => (
                        <MenuItem
                          value={opt.sexualOrientationName}
                          key={opt.sexualOrientationId}
                        >
                          {opt.sexualOrientationName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl>
                    <InputLabel>Marital Status</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = maritalOptions.find(
                          (option) =>
                            option.maritalStatusName === e.target.value
                        );
                        if (selectedOption) {
                          values.maritalStatusId =
                            selectedOption.maritalStatusId;
                          values.maritalStatusName =
                            selectedOption.maritalStatusName;
                        } else {
                          values.maritalStatusId = null;
                          values.maritalStatusName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.maritalStatusName}
                      name="maritalStatusName"
                    >
                      {maritalOptions?.map((opt) => (
                        <MenuItem
                          value={opt.maritalStatusName}
                          key={opt.maritalStatusId}
                        >
                          {opt.maritalStatusName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* Race Status */}
                  <FormControl>
                    <InputLabel>Race Status</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = raceOptions.find(
                          (option) => option.raceStatusName === e.target.value
                        );
                        if (selectedOption) {
                          values.raceStatusId = selectedOption.raceStatusId;
                          values.raceName = selectedOption.raceStatusName;
                        } else {
                          values.raceStatusId = null;
                          values.raceName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.raceName}
                      name="raceName"
                    >
                      {raceOptions?.map((opt) => (
                        <MenuItem
                          value={opt.raceStatusName}
                          key={opt.raceStatusId}
                        >
                          {opt.raceStatusName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* account types */}
                  <FormControl>
                    <InputLabel>Account Type</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = accountTypeOptions.find(
                          (option) => option.accountType === e.target.value
                        );
                        if (selectedOption) {
                          values.accountTypeId = selectedOption.accountTypeId;
                          values.accountTypeName = selectedOption.accountType;
                        } else {
                          values.accountTypeId = null;
                          values.accountTypeName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.accountTypeName}
                      name="accountTypeName"
                    >
                      {accountTypeOptions?.map((opt) => (
                        <MenuItem
                          value={opt.accountType}
                          key={opt.accountTypeId}
                        >
                          {opt.accountType}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* employeement status */}
                  <FormControl>
                    <InputLabel>Employeement Status</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = employeementOptions.find(
                          (option) =>
                            option.employmentStatusName === e.target.value
                        );
                        if (selectedOption) {
                          values.employmentStatusId =
                            selectedOption.employmentStatusId;
                          values.employmentStatusName =
                            selectedOption.employmentStatusName;
                        } else {
                          values.employmentStatusId = null;
                          values.employmentStatusName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.employmentStatusName}
                      name="employmentStatusName"
                    >
                      {employeementOptions?.map((opt) => (
                        <MenuItem
                          value={opt.employmentStatusName}
                          key={opt.employmentStatusId}
                        >
                          {opt.employmentStatusName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* referrel source*/}
                  <FormControl>
                    <InputLabel>Refrence</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = referenceOptions.find(
                          (option) =>
                            option.referralSourceName === e.target.value
                        );
                        if (selectedOption) {
                          values.referralSourceId =
                            selectedOption.referralSourceId;
                          values.referralSourceName =
                            selectedOption.referralSourceName;
                        } else {
                          values.referralSourceId = null;
                          values.referralSourceName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.referralSourceName}
                      name="referralSourceName"
                    >
                      {referenceOptions?.map((opt) => (
                        <MenuItem
                          value={opt.referralSourceName}
                          key={opt.referralSourceId}
                        >
                          {opt.referralSourceName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* relation to patient */}
                  <FormControl>
                    <InputLabel>Relation to patient</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = patienRelationOpt.find(
                          (option) =>
                            option.relationShipToPatientName === e.target.value
                        );
                        if (selectedOption) {
                          values.relationShipToPatientId =
                            selectedOption.relationShipToPatientId;
                          values.relationShipToPatientName =
                            selectedOption.relationShipToPatientName;
                        } else {
                          values.relationShipToPatientId = null;
                          values.relationShipToPatientName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.relationShipToPatientName}
                      name="relationShipToPatientName"
                    >
                      {patienRelationOpt?.map((opt) => (
                        <MenuItem
                          value={opt.relationShipToPatientName}
                          key={opt.relationShipToPatientId}
                        >
                          {opt.relationShipToPatientName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* Ethnicity Status*/}
                  <FormControl>
                    <InputLabel>Ethnicity Status</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = ethnicityOptions.find(
                          (option) => option.ethnicityName === e.target.value
                        );
                        if (selectedOption) {
                          values.ethnicityId = selectedOption.ethnicityId;
                          values.ethnicityName = selectedOption.ethnicityName;
                        } else {
                          values.ethnicityId = null;
                          values.ethnicityName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.ethnicityName}
                      name="ethnicityName"
                    >
                      {ethnicityOptions?.map((opt) => (
                        <MenuItem
                          value={opt.ethnicityName}
                          key={opt.ethnicityId}
                        >
                          {opt.ethnicityName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* student Status*/}
                  <FormControl>
                    <InputLabel>Student Status</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = studentStatusOpt.find(
                          (option) =>
                            option.studentStatusName === e.target.value
                        );
                        if (selectedOption) {
                          values.studentStatusId =
                            selectedOption.studentStatusId;
                          values.studentStatusName =
                            selectedOption.studentStatusName;
                        } else {
                          values.studentStatusId = null;
                          values.studentStatusName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.studentStatusName}
                      name="studentStatusName"
                    >
                      {studentStatusOpt?.map((opt) => (
                        <MenuItem
                          value={opt.studentStatusName}
                          key={opt.studentStatusId}
                        >
                          {opt.studentStatusName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                      md: "repeat(3, minmax(0, 1fr))",
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
                {/*
            <Stack
              width={"100%"}
              gap={5}
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                alignItems: "center",
              }}
            >
              <Typography variant="h4" component={"h2"}>
                Date Details:
              </Typography> */}
                {/* <CustomDatePicker
                value={values.dateOfBirth}
                handleChange={handleChange}
                labelText="Date Of Birth"
              /> */}
                {/* </Stack> */}
                <FormInfoHeading>Birth Details:</FormInfoHeading>

                <Box
                  display="grid"
                  gap="30px"
                  sx={{
                    gridTemplateColumns: {
                      xs: "repeat(1, minmax(0, 1fr))",
                      sm: "repeat(2, minmax(0, 1fr))",
                      md: "repeat(3, minmax(0, 1fr))",
                    },
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DemoItem>
                        <DatePicker
                          value={values.dateOfBirth}
                          onChange={handleChange("dateOfBirth")}
                          label="Date of Birth"
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>

                <FormInfoHeading>Address Details:</FormInfoHeading>
                <Box
                  display="grid"
                  gap="30px"
                  sx={{
                    gridTemplateColumns: {
                      xs: "repeat(1, minmax(0, 1fr))",
                      sm: "repeat(2, minmax(0, 1fr))",
                      md: "repeat(3, minmax(0, 1fr))",
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
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = countryOptions.find(
                          (option) => option.countryName === e.target.value
                        );
                        if (selectedOption) {
                          values.countryId = selectedOption.countryId;
                          values.countryName = selectedOption.countryName;
                        } else {
                          values.countryId = null;
                          values.countryName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.countryName}
                      name="countryName"
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
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = stateOptions.find(
                          (option) => option.stateName === e.target.value
                        );
                        if (selectedOption) {
                          values.stateId = selectedOption.stateId;
                          values.stateName = selectedOption.stateName;
                        } else {
                          values.stateId = null;
                          values.stateName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.stateName}
                      name="stateName"
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
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = cityOptions.find(
                          (option) => option.cityName === e.target.value
                        );
                        if (selectedOption) {
                          values.cityId = selectedOption.cityId;
                          values.cityName = selectedOption.cityName;
                        } else {
                          values.cityId = null;
                          values.cityName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.cityName}
                      name="cityName"
                    >
                      {cityOptions?.map((opt) => (
                        <MenuItem value={opt.cityName} key={opt.cityId}>
                          {opt.cityName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/*  residence Type*/}
                  <FormControl>
                    <InputLabel>Residence Type</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = residenceOptions.find(
                          (option) =>
                            option.residenceTypeName === e.target.value
                        );
                        if (selectedOption) {
                          values.residenceTypeId =
                            selectedOption.residenceTypeId;
                          values.residenceName =
                            selectedOption.residenceTypeName;
                        } else {
                          values.residenceTypeId = null;
                          values.residenceName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.residenceName}
                      name="residenceName"
                    >
                      {residenceOptions?.map((opt) => (
                        <MenuItem
                          value={opt.residenceTypeName}
                          key={opt.residenceTypeId}
                        >
                          {opt.residenceTypeName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                {/*company details  */}
                <FormInfoHeading>Company Details:</FormInfoHeading>
                <Box
                  display="grid"
                  gap="30px"
                  sx={{
                    gridTemplateColumns: {
                      xs: "repeat(1, minmax(0, 1fr))",
                      sm: "repeat(2, minmax(0, 1fr))",
                      md: "repeat(3, minmax(0, 1fr))",
                    },
                  }}
                >
                  {/*  company Type*/}
                  <FormControl>
                    <InputLabel>Company</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = companyOptions.find(
                          (option) => option.companyName === e.target.value
                        );
                        if (selectedOption) {
                          values.companyId = selectedOption.companyId;
                          values.companyName = selectedOption.companyName;
                        } else {
                          values.companyId = null;
                          values.companyName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.companyName}
                      name="companyName"
                    >
                      {companyOptions?.map((opt) => (
                        <MenuItem value={opt.companyName} key={opt.companyId}>
                          {opt.companyName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* branch type */}
                  <FormControl>
                    <InputLabel>Branch</InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChange(e);
                        const selectedOption = branchOptions.find(
                          (option) =>
                            option.branchDetail.branchName === e.target.value
                        );
                        if (selectedOption) {
                          values.branchId = selectedOption.branchId;
                          values.branchName =
                            selectedOption.branchDetail.branchName;
                        } else {
                          values.branchId = null;
                          values.branchName = null;
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.branchName}
                      name="branchName"
                    >
                      {branchOptions?.map((opt) => (
                        <MenuItem
                          value={opt.branchDetail.branchName}
                          key={opt.branchId}
                        >
                          {opt.branchDetail.branchName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                      md: "repeat(3, minmax(0, 1fr))",
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
          );
        }}
      </Formik>
    </Box>
  );
};

export default EditPatient;
