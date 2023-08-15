import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import CustomSelectBox from "../../components/CustomSelectBox";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import path from "../../config/apiUrl";
import { getData } from "../../config/axiosFunctions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const EditPatInsurance = ({ formik, editFormData, setEditFormData }) => {
  const [genderOptions, setGenderOptions] = useState([]);
  const [employeementOptions, setEmployeementOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [patienRelationOpt, setPatientRelationOpt] = useState([]);
  const [priorityOptions, setPriorityOptions] = useState([]);

  // dispatch initialization
  const dispatch = useDispatch();

  const handleChange = (event) => {
    formik.handleChange(event);
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  // Define data fetching URLs
  const dataFetchUrls = {
    genderTypes: `${path}/ct-genderIdentity`,
    employmentStatus: `${path}/ct-employmentStatus`,
    relationToPatient: `${path}/ct-relationToPatient`,
    priorityType: `${path}/ct-priorityType`,
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
    fetchDataOptions(dataFetchUrls.priorityType, setPriorityOptions);

    fetchDataOptions(dataFetchUrls.states, setStateOptions);
  }, [dispatch]);
  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Typography
        variant="h5"
        component={"h2"}
        fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.4rem" }}
      >
        Primary Insurance:
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
          value={editFormData?.insuredFirstName}
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
          value={editFormData?.insuredLastName}
          name="insuredLastName"
          id="insuredLastName"
          // error={!!touched.lastName && !!errors.lastName}
          // helperText={touched.lastName && errors.lastName}
          sx={{ gridColumn: "span 1" }}
        />

        {/* priority type */}
        <CustomSelectBox
          value={editFormData?.insuredPriorityType}
          name="insuredPriorityType"
          dropdownOptions={priorityOptions?.map((opt) => ({
            value: opt.priorityType,
            id: opt.priorityTypeId,
          }))}
          label="Priority Type"
          handleChange={handleChange}
          handleBlur={formik.handleBlur}
        />
        <TextField
          size="small"
          fullWidth
          variant="filled"
          type="text"
          label="Email"
          onBlur={formik.handleBlur}
          onChange={handleChange}
          value={editFormData.insuredEmail}
          name="insuredEmail"
          id="insuredEmail"
          // error={!!touched.email && !!errors.email}
          // helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 1" }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
          <DatePicker
            label="Date of Birth"
            value={editFormData.insuredDateOfBirth}
            onChange={(value) =>
              formik.setFieldValue("insuredDateOfBirth", value)
            }
            onBlur={() => formik.setFieldTouched("insuredDateOfBirth", true)}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="MM/DD/YYYY"
            clearable
          />
        </LocalizationProvider>

        <CustomSelectBox
          name="insuredGenderIdentityName"
          value={editFormData.insuredGenderIdentityName}
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
          value={editFormData.insuredRelationShipToPatientName}
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
          type="number"
          label="Phone Number"
          onBlur={formik.handleBlur}
          onChange={handleChange}
          value={editFormData.insuredCellPhone}
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
          type="number"
          label="Home Number"
          onBlur={formik.handleBlur}
          onChange={handleChange}
          value={editFormData.insuredHomePhone}
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
          type="number"
          label="Work Phone"
          onBlur={formik.handleBlur}
          onChange={handleChange}
          value={editFormData.insuredWorkPhone}
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
          type="number"
          label="Ext"
          onBlur={formik.handleBlur}
          onChange={handleChange}
          value={editFormData.insuredExt}
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
          value={editFormData.insuredSSN}
          id="insuredSSN"
          name="insuredSSN"
          // error={!!touched.cellPhone && !!errors.cellPhone}
          // helperText={touched.cellPhone && errors.cellPhone}
          sx={{ gridColumn: "span 1" }}
        />

        {/* country types */}

        <CustomSelectBox
          value={editFormData.insuredCountryName}
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
          value={editFormData.insuredStateName}
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
          value={editFormData.insuredCityName}
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
          value={editFormData.insuredZipCode}
          id="insuredZipCode"
          name="insuredZipCode"
          // error={!!touched.zipCode && !!errors.zipCode}
          // helperText={touched.zipCode && errors.zipCode}
          sx={{ gridColumn: "span 1" }}
        />
      </Box>
      {/*Employee details  */}
      <div>
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
            value={editFormData.employeeName}
            name="employeeName"
            id="employeeName"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: "span 1" }}
          />

          {/* employeement status */}
          <CustomSelectBox
            value={editFormData.empEmploymentStatusName}
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
            value={editFormData.empAddress}
            name="empAddress"
            id="empAddress"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: "span 1" }}
          />

          {/* city types */}
          <CustomSelectBox
            value={editFormData.empCityName}
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
            value={editFormData.empStateName}
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
    </Box>
  );
};

export default EditPatInsurance;
