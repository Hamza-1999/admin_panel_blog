import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputBase,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { Formik } from "formik";
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
import CustomSelectBox from "../../components/CustomSelectBox";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { ExpandMore } from "@mui/icons-material";

const EditPatient = ({ formik, editFormData, setEditFormData }) => {
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

  const dispatch = useDispatch();

  const handleChange = (event) => {
    formik.handleChange(event);
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };
  // const { loading, getAllPatients } = useSelector((state) => state.patient);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!getAllPatients?.result?.length) {
  //     dispatch(getPatientAction()).then(() => setIsLoading(false));
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [dispatch]);

  // initial formik values
  // const initialValues = {
  //   firstName: findPatient?.firstName || "",
  //   lastName: findPatient?.lastName || "",
  //   email: findPatient?.email || "",
  //   drivingLicense: findPatient?.drivingLicense || "",
  //   dateOfBirth: findPatient?.dateOfBirth
  //     ? dayjs(findPatient.dateOfBirth)
  //     : null,
  //   dateOfDeath: findPatient?.dateOfDeath
  //     ? dayjs(findPatient.dateOfDeath)
  //     : null,
  //   cellPhone: findPatient?.cellPhone || "",
  //   homePhone: findPatient?.homePhone || "",
  //   workPhone: findPatient?.workPhone || "",
  //   ext: findPatient?.ext || "",
  //   address: findPatient?.address || "",
  //   zipCode: findPatient?.zipCode || "",
  //   emergencyContactFirstName: findPatient?.emergencyContactFirstName || "",
  //   emergencyContactLastName: findPatient?.emergencyContactLastName || "",
  //   emergencyContactAddress: findPatient?.emergencyContactAddress || "",
  //   emergencyContactZipCode: findPatient?.emergencyContactZipCode || "",
  //   emergencyContactState: findPatient?.emergencyContactState || "",
  //   emergencyContactCity: findPatient?.emergencyContactCity || "",
  //   // dateOfDeath: null,
  //   // dropdowns
  //   genderIdentityName: findPatient?.genderIdentityName || "",
  //   maritalStatusName: findPatient?.maritalStatusName || "",
  //   raceStatusName: findPatient?.raceStatusName || "",
  //   sexualOrientationName: findPatient?.sexualOrientationName || "",
  //   employmentStatusName: findPatient?.employmentStatusName || "",
  //   referralSourceName: findPatient?.referralSourceName || "",
  //   relationShipToPatientName: findPatient?.relationShipToPatientName || "",
  //   ethnicityName: findPatient?.ethnicityName || "",
  //   studentStatusName: findPatient?.studentStatusName || "",
  //   accountType: findPatient?.accountType || "",
  //   cityName: findPatient?.cityName || "",
  //   countryName: findPatient?.countryName || "",
  //   stateName: findPatient?.stateName || "",
  //   residenceTypeName: findPatient?.residenceTypeName || "",
  // };
  // const handleFormSubmit = (values, actions) => {
  //   try {
  //     dispatch(
  //       updatePatientAction({
  //         accountNo: findPatient?.accountNo,
  //         ...values,
  //       })
  //     );
  //     console.log(values, "checking submit values of update patient");
  //     actions.setSubmitting(false);
  //     handleClose();
  //     // navigate("/managepatient");
  //   } catch (error) {
  //     console.error("Error updating patient:", error);
  //     actions.setSubmitting(false);
  //   }
  // };

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

  // const customSelectMenuStyling = (maxHeight, horizontalAlign) => {
  //   return {
  //     MenuProps: {
  //       getContentAnchorEl: null, // Aligns the menu to the top of the select field
  //       anchorOrigin: {
  //         vertical: "bottom",
  //         horizontal: horizontalAlign || "left",
  //       },
  //       transformOrigin: {
  //         vertical: "top",
  //         horizontal: horizontalAlign || "left",
  //       },
  //       PaperProps: {
  //         style: {
  //           maxHeight: maxHeight || "100px", // Set the maximum height of the menu
  //         },
  //       },
  //     },
  //   };
  // };

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
                value={editFormData.firstName}
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
                value={editFormData.lastName}
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
                value={editFormData.email}
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
                value={editFormData.drivingLicense}
                name="drivingLicense"
                id="drivingLicense"
                // error={!!touched.drivingLicense && !!errors.drivingLicense}
                // helperText={touched.drivingLicense && errors.drivingLicense}
                sx={{ gridColumn: "span 1" }}
              />

              <CustomSelectBox
                name="genderIdentityName"
                value={editFormData.genderIdentityName}
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
                value={editFormData.sexualOrientationName}
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
                value={editFormData.maritalStatusName}
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
                value={editFormData.raceStatusName}
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
                value={editFormData.accountType}
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
                value={editFormData.employmentStatusName}
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
                value={editFormData.referralSourceName}
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
                value={editFormData.relationShipToPatientName}
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
                value={editFormData.ethnicityName}
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
                value={editFormData.studentStatusName}
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
                type="number"
                label="Phone Number"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={editFormData.cellPhone}
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
                type="number"
                label="Home Number"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={editFormData.homePhone}
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
                type="number"
                label="Work Phone"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={editFormData.workPhone}
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
                type="number"
                label="Ext"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={editFormData.ext}
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
                  value={editFormData.dateOfBirth}
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
                  value={editFormData.dateOfDeath}
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
                value={editFormData.address}
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
                value={editFormData.zipCode}
                id="zipCode"
                name="zipCode"
                // error={!!touched.zipCode && !!errors.zipCode}
                // helperText={touched.zipCode && errors.zipCode}
                sx={{ gridColumn: "span 1" }}
              />

              {/* country types */}
              <CustomSelectBox
                value={editFormData.countryName}
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
                value={editFormData.stateName}
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
                value={editFormData.cityName}
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
                value={editFormData.residenceTypeName}
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
                value={editFormData.emergencyContactFirstName}
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
                value={editFormData.emergencyContactLastName}
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
                value={editFormData.emergencyContactAddress}
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
                value={editFormData.emergencyContactCity}
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
                value={editFormData.emergencyContactState}
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
                value={editFormData.emergencyContactZipCode}
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

export default EditPatient;
