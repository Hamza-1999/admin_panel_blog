import { Box, Button, TextField, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
// import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
// import { useState } from "react";
import CustomSelectBox from "../../components/CustomSelectBox";
import FormInfoHeading from "../../components/FormInfoHeading";
import { useDispatch } from "react-redux";
import { newPatientAction } from "../../features/actions/createPatientAction";
// import { createPatientSchema } from "../../schemas";

const CreatePatient = () => {
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();

  // initial formik values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
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

    // dropdowns
    genderIdentityName: "",
    maritalStatusName: "",
    raceStatusName: "",
    accountType: "",
    cityName: "",
    stateName: "",
    countryName: "",
    residenceTypeName: "",
    emergencyContactCity: "",
    emergencyContactState: "",
  };

  const handleFormSubmit = (values, action) => {
    dispatch(newPatientAction(values));
    console.log(values, "checking submit values of createPatient");
    // action.resetForm();
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
        // validationSchema={createPatientSchema}
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
                  value={values.genderIdentityName}
                  handleChange={handleChange}
                  selectLabel="Gender"
                  selectOptions={genderOptions}
                  name="genderIdentityName"
                />
                <CustomSelectBox
                  value={values.maritalStatusName}
                  handleChange={handleChange}
                  selectLabel="Marital Status"
                  selectOptions={maritalOptions}
                  name="maritalStatusName"
                />
                <CustomSelectBox
                  value={values.raceStatusName}
                  handleChange={handleChange}
                  selectLabel="Race Status"
                  selectOptions={raceOptions}
                  name="raceStatusName"
                />
                <CustomSelectBox
                  value={values.accountType}
                  handleChange={handleChange}
                  selectLabel="Account Type"
                  selectOptions={raceOptions}
                  name="accountType"
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
                  value={values.cellPhone}
                  id="cellPhone"
                  name="cellPhone"
                  error={!!touched.cellPhone && !!errors.cellPhone}
                  helperText={touched.cellPhone && errors.cellPhone}
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

              {/* <Stack
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
              </Stack> */}

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
                  value={values.cityName}
                  handleChange={handleChange}
                  selectLabel={"City"}
                  selectOptions={cityOptions}
                  name="cityName"
                />
                <CustomSelectBox
                  value={values.stateName}
                  handleChange={handleChange}
                  selectLabel={"State"}
                  selectOptions={stateOptions}
                  name="stateName"
                />
                <CustomSelectBox
                  value={values.countryName}
                  handleChange={handleChange}
                  selectLabel={"Country"}
                  selectOptions={countryOption}
                  name="countryName"
                />
                <CustomSelectBox
                  value={values.residenceTypeName}
                  handleChange={handleChange}
                  selectLabel={"Residence Type"}
                  selectOptions={residenceOptions}
                  name="residenceTypeName"
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
                  value={values.emergencyContactCity}
                  handleChange={handleChange}
                  selectLabel={"City"}
                  selectOptions={cityOptions}
                  name="emergencyContactCity"
                />
                <CustomSelectBox
                  value={values.emergencyContactState}
                  handleChange={handleChange}
                  selectLabel={"State"}
                  selectOptions={stateOptions}
                  name="emergencyContactState"
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
                  value={values.emergencyContactZipCode}
                  id="emergencyContactZipCode"
                  name="emergencyContactZipCode"
                  error={
                    !!touched.emergencyContactZipCode &&
                    !!errors.emergencyContactZipCode
                  }
                  helperText={
                    touched.emergencyContactZipCode &&
                    errors.emergencyContactZipCode
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

export default CreatePatient;
