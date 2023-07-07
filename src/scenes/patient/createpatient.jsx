import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomSelectBox from "../../components/CustomSelectBox";
import FormInfoHeading from "../../components/FormInfoHeading";

const CreatePatient = () => {
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selectGender, setSelectGender] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [selectState, setSelectState] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [raceStatus, setRaceStatus] = useState("");
  const [residenceType, setResidenceType] = useState("");
  const [emergencyContactCity, setEmergencyContactCity] = useState("");
  const [emergencyContactState, setEmergencyContactState] = useState("");

  const handleGenderChange = (value) => {
    setSelectGender(value);
  };
  const handleCityChange = (value) => {
    setSelectCity(value);
  };
  const handleStateChange = (value) => {
    setSelectState(value);
  };
  const handleCountryChange = (value) => {
    setSelectCountry(value);
  };
  const handleMaritalChange = (value) => {
    setMaritalStatus(value);
  };
  const handleRaceChange = (value) => {
    setRaceStatus(value);
  };
  const handleResidenceType = (value) => {
    setResidenceType(value);
  };
  const handleEmergencyCity = (value) => {
    setEmergencyContactCity(value);
  };
  const handleEmergencyState = (value) => {
    setEmergencyContactState(value);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  // gender options array
  const genderOptions = ["Male", "Female", "Other"];
  const cityOptions = [
    "Hyderabad",
    "Karachi",
    "Islamabad",
    "Lahore",
    "Faislabad",
    "Multan",
    "Quetta",
  ];
  const stateOptions = ["Sindh", "Punjab", "KPK", "Balochistan"];
  const countryOption = ["Pakistan", "USA", "Dubai", "UK"];
  const raceOptions = [
    " American Indian or Eskimo or Aleut",
    "Asian or Native Hawaiian or Pacific Islander",
    "Black or African American",
    "White",
    "Other Race",
    "Undetermined",
  ];
  const maritalOptions = [
    "Unknown",
    "Married",
    "Single",
    "Divorced",
    "Widowed",
    "Legally Separated",
  ];
  const residenceOptions = [
    "Private Home",
    "Nursing Home",
    " Residential Treatment Patient",
    "Skilled Nursing Home",
    "   Homeless",
    " Prefer not to answer",
    "Unkown",
  ];
  return (
    <Box m="20px">
      <Header title="CREATE PATIENT" subtitle="Create a New Patient Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
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
                  // "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
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
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
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
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
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
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 1" }}
                />
                <CustomSelectBox
                  value={selectGender}
                  onChange={handleGenderChange}
                  selectLabel="Gender"
                  selectOptions={genderOptions}
                />
                <CustomSelectBox
                  value={maritalStatus}
                  onChange={handleMaritalChange}
                  selectLabel="Marital Status"
                  selectOptions={maritalOptions}
                />
                <CustomSelectBox
                  value={raceStatus}
                  onChange={handleRaceChange}
                  selectLabel="Race Status"
                  selectOptions={raceOptions}
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
                  type="number"
                  label="Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  id="phoneNumber"
                  name="phoneNumber"
                  error={!!touched.phoneNumber && !!errors.phoneNumber}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  sx={{ gridColumn: "span 1" }}
                />
                <TextField
                  size="small"
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Home Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.homePhone}
                  name="homePhone"
                  id="homePhone"
                  error={!!touched.homePhone && !!errors.homePhone}
                  helperText={touched.homePhone && errors.homePhone}
                  sx={{ gridColumn: "span 1" }}
                />
                <TextField
                  size="small"
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Work Phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.workPhone}
                  name="workPhone"
                  id="workPhone"
                  error={!!touched.workPhone && !!errors.workPhone}
                  helperText={touched.workPhone && errors.workPhone}
                  sx={{ gridColumn: "span 1" }}
                />
                <TextField
                  size="small"
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Ext"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ext}
                  name="ext"
                  id="ext"
                  error={!!touched.ext && !!errors.ext}
                  helperText={touched.ext && errors.ext}
                  sx={{ gridColumn: "span 1" }}
                />
              </Box>

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
                </Typography>
                <CustomDatePicker labelText="Date Of Birth" />
                <CustomDatePicker labelText="Date Of Death" />
              </Stack>

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
                  error={!!touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                  sx={{ gridColumn: "span 1" }}
                />
                <CustomSelectBox
                  value={selectCity}
                  onChange={handleCityChange}
                  selectLabel={"City"}
                  selectOptions={cityOptions}
                />
                <CustomSelectBox
                  value={selectState}
                  onChange={handleStateChange}
                  selectLabel={"State"}
                  selectOptions={stateOptions}
                />
                <CustomSelectBox
                  value={selectCountry}
                  onChange={handleCountryChange}
                  selectLabel={"Country"}
                  selectOptions={countryOption}
                />
                <CustomSelectBox
                  value={residenceType}
                  onChange={handleResidenceType}
                  selectLabel={"Residence Type"}
                  selectOptions={residenceOptions}
                />

                <TextField
                  size="small"
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Zipcode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.zipCode}
                  id="zipCode"
                  name="zipCode"
                  error={!!touched.zipCode && !!errors.zipCode}
                  helperText={touched.zipCode && errors.zipCode}
                  sx={{ gridColumn: "span 1" }}
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
                  error={
                    !!touched.emergencyContactFirstName &&
                    !!errors.emergencyContactFirstName
                  }
                  helperText={
                    touched.emergencyContactFirstName &&
                    errors.emergencyContactFirstName
                  }
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
                  error={
                    !!touched.emergencyContactLastName &&
                    !!errors.emergencyContactLastName
                  }
                  helperText={
                    touched.emergencyContactLastName &&
                    errors.emergencyContactLastName
                  }
                  sx={{ gridColumn: "span 1" }}
                />

                <CustomSelectBox
                  value={emergencyContactCity}
                  onChange={handleEmergencyCity}
                  selectLabel={"City"}
                  selectOptions={cityOptions}
                />
                <CustomSelectBox
                  value={emergencyContactState}
                  onChange={handleEmergencyState}
                  selectLabel={"State"}
                  selectOptions={stateOptions}
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
                  error={
                    !!touched.emergencyContactAddress &&
                    !!errors.emergencyContactAddress
                  }
                  helperText={
                    touched.emergencyContactAddress &&
                    errors.emergencyContactAddress
                  }
                  sx={{ gridColumn: "span 1" }}
                />

                <TextField
                  size="small"
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Zipcode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emegencyContactZipCode}
                  id="emegencyContactZipCode"
                  name="emegencyContactZipCode"
                  error={
                    !!touched.emegencyContactZipCode &&
                    !!errors.emegencyContactZipCode
                  }
                  helperText={
                    touched.emegencyContactZipCode &&
                    errors.emegencyContactZipCode
                  }
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
              <Button type="submit" color="secondary" variant="contained">
                Create Patient
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default CreatePatient;
