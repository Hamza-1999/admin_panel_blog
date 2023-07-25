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
import { newPatientAction } from "../../features/actions/createPatientAction";
import { getData } from "../../config/axiosFunctions";
import { useEffect, useState } from "react";
import path from "../../config/apiUrl";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { createPatientSchema } from "../../schemas";

const CreatePatient = () => {
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
  // const [genderOptions, setGenderOptions] = useState();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.patient);
  // initial formik values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    drivingLicense: "",
    cellPhone: "",
    homePhone: "",
    workPhone: "",
    ext: "",
    address: "",
    zipCode: "",
    emergencyContactFirstName: "",
    emergencyContactLastName: "",
    emergencyContactAddress: "",
    emergencyContactZipCode: "",
    emergencyContactState: "",
    emergencyContactCity: "",
    // dateOfDeath: null,
    dateOfBirth: dayjs("2022-04-17"),
    // dropdowns
    genderName: "",
    maritalStatusName: "",
    raceName: "",
    sexualOrientationName: "",
    employmentStatusName: "",
    referralSourceName: "",
    relationShipToPatientName: "",
    ethnicityName: "",
    studentStatusName: "",
    accountTypeName: "",
    cityName: "",
    countryName: "",
    stateName: "",
    residenceName: "",
    companyName: "",
    branchName: "",
  };
  const handleFormSubmit = (values, actions) => {
    try {
      dispatch(newPatientAction(values));
      console.log(values, "checking submit values of createPatient");
      actions.resetForm();
    } catch (error) {
      console.error("Error creating patient:", error);
    }
  };

  const fetchGenderTypes = async () => {
    try {
      const getGenderTypes = await getData(`${path}/ct-genderIdentity`);
      setGenderOptions(getGenderTypes.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchMaritalStatus = async () => {
    try {
      const getMaritalTypes = await getData(`${path}/ct-maritalStatus`);
      setMaritalOptions(getMaritalTypes.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchRaceStatus = async () => {
    try {
      const getRaceTypes = await getData(`${path}/ct-raceStatus`);
      setRaceOptions(getRaceTypes.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAccountTypeOptions = async () => {
    try {
      const getAccTypes = await getData(`${path}/ct-accountType`);
      setAccountTypeOptions(getAccTypes);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchSexualOrientation = async () => {
    try {
      const getSexOrientation = await getData(
        `${path}/ct-sexualorientatioStatus`
      );
      setSexOrientationOptions(getSexOrientation.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchEmployeementStatus = async () => {
    try {
      const getEmployeeStatus = await getData(`${path}/ct-employmentStatus`);
      setEmployeementOptions(getEmployeeStatus);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchRefferalSource = async () => {
    try {
      const getRefrence = await getData(
        `http://192.168.3.73:3000/ct-referralSource`
      );
      setReferenceOptions(getRefrence.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchRelationToPatient = async () => {
    try {
      const getRelation = await getData(`${path}/ct-relationToPatient`);
      setPatientRelationOpt(getRelation.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchEthnicityStatus = async () => {
    try {
      const getEthnicity = await getData(
        `http://192.168.3.73:3000/ct-ethnicityStatus`
      );
      setEthnicityOptions(getEthnicity.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchStudentStatus = async () => {
    try {
      const getStudentStatus = await getData(`${path}/ct-studentStatus`);
      setStudentStatusOpt(getStudentStatus.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCities = async () => {
    try {
      const getCity = await getData(`${path}/city`);
      setCityOptions(getCity.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCountries = async () => {
    try {
      const getCountry = await getData(`${path}/country`);
      setCountryOptions(getCountry.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchState = async () => {
    try {
      const getState = await getData(`${path}/state`);
      setStateOptions(getState.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchResidenceTypes = async () => {
    try {
      const getResidence = await getData(`${path}/ct-residenceType`);
      setResidenceOptions(getResidence.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCompany = async () => {
    try {
      const getCompany = await getData(`${path}/company`);
      setCompanyOptions(getCompany.result);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchBranch = async () => {
    try {
      const fetchBranch = await getData(`${path}/branch`);
      setBranchOptions(fetchBranch.result);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleGetGenderNameValue = (value) => {
  //   //get name
  //   const selectedOption = genderOptions.find(
  //     (option) => option.genderIdentityName === value
  //   );
  // };

  useEffect(() => {
    fetchAccountTypeOptions();
    fetchGenderTypes();
    fetchMaritalStatus();
    fetchRaceStatus();
    fetchSexualOrientation();
    fetchEmployeementStatus();
    fetchRefferalSource();
    fetchRelationToPatient();
    fetchEthnicityStatus();
    fetchStudentStatus();
    fetchCities();
    fetchCountries();
    fetchState();
    fetchResidenceTypes();
    fetchCompany();
    fetchBranch();
  }, []);

  // const accountTypesOptions = ["Insurance"];

  // const companyNameOpt = ["Aku's Hospital"];

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
      <Header title="CREATE PATIENT" subtitle="Create a New Patient Profile" />
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

                <FormControl>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    onChange={(e) => {
                      console.log("eeeeee", e);
                      handleChange(e);
                      const selectedOption = genderOptions.find(
                        (option) => option.genderIdentityName === e.target.value
                      );
                      if (selectedOption) {
                        values.genderIdentityId =
                          selectedOption.genderIdentityId;
                        values.genderName = selectedOption.genderIdentityName;
                      } else {
                        values.genderIdentityId = null;
                        values.genderName = null;
                      }
                    }}
                    onBlur={handleBlur}
                    value={values.genderName}
                    name="genderName"
                    // id="genderName"
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
                  >
                    {genderOptions?.map((opt) => {
                      console.log(opt, "dd options");
                      return (
                        <MenuItem
                          value={opt.genderIdentityName}
                          key={opt.genderIdentityId}
                        >
                          {opt.genderIdentityName}
                        </MenuItem>
                      );
                    })}
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
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                        (option) => option.maritalStatusName === e.target.value
                      );
                      if (selectedOption) {
                        values.maritalStatusId = selectedOption.maritalStatusId;
                        values.maritalStatusName =
                          selectedOption.maritalStatusName;
                      } else {
                        values.maritalStatusId = null;
                        values.maritalStatusName = null;
                      }
                    }}
                    onBlur={handleBlur}
                    value={values.maritalStatusName}
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
                  >
                    {accountTypeOptions?.map((opt) => (
                      <MenuItem value={opt.accountType} key={opt.accountTypeId}>
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
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                        (option) => option.referralSourceName === e.target.value
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
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
                  >
                    {ethnicityOptions?.map((opt) => (
                      <MenuItem value={opt.ethnicityName} key={opt.ethnicityId}>
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
                        (option) => option.studentStatusName === e.target.value
                      );
                      if (selectedOption) {
                        values.studentStatusId = selectedOption.studentStatusId;
                        values.studentStatusName =
                          selectedOption.studentStatusName;
                      } else {
                        values.studentStatusId = null;
                        values.studentStatusName = null;
                      }
                    }}
                    onBlur={handleBlur}
                    value={values.studentStatusName}
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DemoItem>
                      <DatePicker
                        value={values.dateOfBirth}
                        onChange={handleChange}
                        label="DOB"
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
                <FormControl>
                  <InputLabel>Residence Type</InputLabel>
                  <Select
                    onChange={(e) => {
                      handleChange(e);
                      const selectedOption = residenceOptions.find(
                        (option) => option.residenceTypeName === e.target.value
                      );
                      if (selectedOption) {
                        values.residenceTypeId = selectedOption.residenceTypeId;
                        values.residenceName = selectedOption.residenceTypeName;
                      } else {
                        values.residenceTypeId = null;
                        values.residenceName = null;
                      }
                    }}
                    onBlur={handleBlur}
                    value={values.residenceName}
                    name="residenceName"
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                    md: "repeat(4, minmax(0, 1fr))",
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
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                    {...customSelectMenuStyling("100px", {
                      xs: "right",
                      sm: "left",
                      md: "left",
                    })}
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
                {loading ? "Creating..." : "Create Patient"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreatePatient;
