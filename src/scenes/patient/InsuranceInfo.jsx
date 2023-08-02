import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useEffect, useState } from "react";
import path from "../../config/apiUrl";
import { useDispatch } from "react-redux";
import { getData } from "../../config/axiosFunctions";
import CustomSelectBox from "../../components/CustomSelectBox";
import { ExpandMore } from "@mui/icons-material";

const InsuranceInfo = ({ formik, formData, setFormData }) => {
  const [genderOptions, setGenderOptions] = useState([]);
  const [employeementOptions, setEmployeementOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [patienRelationOpt, setPatientRelationOpt] = useState([]);

  console.log(employeementOptions, "employe");
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
    genderTypes: `${path}/ct-genderIdentity`,
    employmentStatus: `${path}/ct-employmentStatus`,
    relationToPatient: `${path}/ct-relationToPatient`,
    cities: `${path}/city`,
    countries: `${path}/country`,
    states: `${path}/state`,
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
    fetchDataOptions(dataFetchUrls.cities, setCityOptions);
    fetchDataOptions(dataFetchUrls.countries, setCountryOptions);
    fetchDataOptions(dataFetchUrls.employmentStatus, setEmployeementOptions);
    fetchDataOptions(dataFetchUrls.genderTypes, setGenderOptions);
    fetchDataOptions(dataFetchUrls.relationToPatient, setPatientRelationOpt);
    fetchDataOptions(dataFetchUrls.states, setStateOptions);
  }, [dispatch]);
  return (
    <Box display="flex" flexDirection="column">
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography
            variant="h5"
            component={"h2"}
            fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.4rem" }}
          >
            Insurance Information:
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h5" component={"h4"} marginBottom="8px">
              General :
            </Typography>
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
                value={formData.insuredFirstName}
                name="insuredFirstName"
                id="insuredFirstName"
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
                value={formData.insuredLastName}
                name="insuredLastName"
                id="insuredLastName"
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
                value={formData.insuredEmail}
                name="insuredEmail"
                id="insuredEmail"
                // error={!!touched.email && !!errors.email}
                // helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 1" }}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                <DatePicker
                  label="Date of Birth"
                  value={formData.insuredDateOfBirth}
                  onChange={(value) =>
                    formik.setFieldValue("insuredDateOfBirth", value)
                  }
                  onBlur={() =>
                    formik.setFieldTouched("insuredDateOfBirth", true)
                  }
                  renderInput={(params) => <TextField {...params} />}
                  inputFormat="MM/DD/YYYY"
                  clearable
                />
              </LocalizationProvider>

              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Patient Name"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.patientName}
                name="patientName"
                id="patientName"
                // error={!!touched.lastName && !!errors.lastName}
                // helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 1" }}
              />

              <CustomSelectBox
                name="insuredGenderIdentityName"
                value={formData.insuredGenderIdentityName}
                dropdownOptions={genderOptions?.map((opt) => ({
                  value: opt.genderIdentityName,
                  id: opt.genderIdentityId,
                }))}
                label="Gender"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* relation to patient */}
              <CustomSelectBox
                value={formData.insuredRelationShipToPatientName}
                name="insuredRelationShipToPatientName"
                dropdownOptions={patienRelationOpt?.map((opt) => ({
                  value: opt.relationShipToPatientName,
                  id: opt.relationShipToPatientId,
                }))}
                label="Relation to Patient"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.insuredCellPhone}
                id="insuredCellPhone"
                name="insuredCellPhone"
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
                value={formData.insuredHomePhone}
                id="insuredHomePhone"
                name="insuredHomePhone"
                // error={!!touched.cellPhone && !!errors.cellPhone}
                // helperText={touched.cellPhone && errors.cellPhone}
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
                value={formData.insuredWorkPhone}
                id="insuredWorkPhone"
                name="insuredWorkPhone"
                // error={!!touched.cellPhone && !!errors.cellPhone}
                // helperText={touched.cellPhone && errors.cellPhone}
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
                value={formData.insuredExt}
                id="insuredExt"
                name="insuredExt"
                // error={!!touched.cellPhone && !!errors.cellPhone}
                // helperText={touched.cellPhone && errors.cellPhone}
                sx={{ gridColumn: "span 1" }}
              />

              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="SSN"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.insuredSSN}
                id="insuredSSN"
                name="insuredSSN"
                // error={!!touched.cellPhone && !!errors.cellPhone}
                // helperText={touched.cellPhone && errors.cellPhone}
                sx={{ gridColumn: "span 1" }}
              />

              {/* country types */}

              <CustomSelectBox
                value={formData.insuredCountryName}
                name="insuredCountryName"
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
                value={formData.insuredStateName}
                name="insuredStateName"
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
                value={formData.insuredCityName}
                name="insuredCityName"
                dropdownOptions={cityOptions?.map((opt) => ({
                  value: opt.cityName,
                  id: opt.cityId,
                }))}
                label="City"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />
              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Zipcode"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.insuredZipCode}
                id="insuredZipCode"
                name="insuredZipCode"
                // error={!!touched.zipCode && !!errors.zipCode}
                // helperText={touched.zipCode && errors.zipCode}
                sx={{ gridColumn: "span 1" }}
              />
            </Box>
          </div>

          {/* employement  */}
          <div style={{ marginTop: "35px" }}>
            <Typography variant="h5" component={"h4"} marginBottom="8px">
              Employee Details :
            </Typography>
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
                label="Employee Name"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.employeeName}
                name="employeeName"
                id="employeeName"
                // error={!!touched.firstName && !!errors.firstName}
                // helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 1" }}
              />

              {/* employeement status */}
              <CustomSelectBox
                value={formData.empEmploymentStatusName}
                name="empEmploymentStatusName"
                dropdownOptions={employeementOptions?.map((opt) => ({
                  value: opt.employmentStatusName,
                  id: opt.employmentStatusId,
                }))}
                label="Employement Status"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              <TextField
                size="small"
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={formik.handleBlur}
                onChange={handleChange}
                value={formData.empAddress}
                name="empAddress"
                id="empAddress"
                // error={!!touched.firstName && !!errors.firstName}
                // helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 1" }}
              />

              {/* city types */}
              <CustomSelectBox
                value={formData.empCityName}
                name="empCityName"
                dropdownOptions={cityOptions?.map((opt) => ({
                  value: opt.cityName,
                  id: opt.cityId,
                }))}
                label="City"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* state options */}
              <CustomSelectBox
                value={formData.empStateName}
                name="empStateName"
                dropdownOptions={stateOptions?.map((opt) => ({
                  value: opt.stateName,
                  id: opt.stateId,
                }))}
                label="State"
                handleChange={handleChange}
                handleBlur={formik.handleBlur}
              />
            </Box>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography
            variant="h5"
            component={"h2"}
            fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.4rem" }}
          >
            Payer Information:
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          molestias eveniet, impedit, tempore illum ipsa animi facilis error,
          repudiandae quos illo inventore necessitatibus reiciendis expedita
          enim autem fuga. Optio, minus?
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default InsuranceInfo;
