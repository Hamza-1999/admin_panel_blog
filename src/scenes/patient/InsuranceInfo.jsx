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
import CustomField from "../../components/CustomField";
// import "./createpatient.css";
import "./insuranceInfo.css";


const InsuranceInfo = ({ formik }) => {
  console.log(formik.values, "allformikvalsinsurance");
  const [genderOptions, setGenderOptions] = useState([]);
  const [employeementOptions, setEmployeementOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [patienRelationOpt, setPatientRelationOpt] = useState([]);
  const [priorityOptions, setPriorityOptions] = useState([]);

  const dispatch = useDispatch();

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
        fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.8rem" }}
        fontWeight={'bold'}
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
        <CustomField
          type="text"
          value={formik.values.insuredFirstName}
          name="insuredFirstName"
          label="First Name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />

        <CustomField
          type="text"
          value={formik.values.insuredLastName}
          name="insuredLastName"
          label="Last Name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />

        {/* priority type */}
        <CustomSelectBox
          value={formik.values.insuredPriorityType}
          name="insuredPriorityType"
          dropdownOptions={priorityOptions?.map((opt) => ({
            value: opt.priorityType,
            id: opt.priorityTypeId,
          }))}
          label="Priority Type"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <CustomField
          type="text"
          value={formik.values.insuredEmail}
          name="insuredEmail"
          label="Email"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />

        {/* <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
          <DatePicker
            label="Date of Birth"
            value={formik.values.insuredDateOfBirth}
            onChange={(value) =>
              formik.setFieldValue("insuredDateOfBirth", value)
            }
            onBlur={() => formik.setFieldTouched("insuredDateOfBirth", true)}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="MM/DD/YYYY"
            clearable
          />
        </LocalizationProvider> */}


<div>
  <label style={{ color: "#216FED",fontSize:"17px",fontWeight:'bold' }}>Date of Birth</label>
  <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
    <DatePicker className="insuranceDatePicker"
      value={formik.values.dateOfDeath}
      onChange={(value) =>
        formik.setFieldValue("dateOfBirth", value)
      }
      onBlur={() => formik.setFieldTouched("dateOfBirth", true)}
      renderInput={(params) => <TextField {...params} />}
      inputFormat="MM/DD/YYYY"
    />
  </LocalizationProvider>
</div>

        {/* gender identity */}
        <CustomSelectBox
          name="insuredGenderIdentityName"
          value={formik.values.insuredGenderIdentityName}
          dropdownOptions={genderOptions?.map((opt) => ({
            value: opt.genderIdentityName,
            id: opt.genderIdentityId,
          }))}
          label="Gender"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />

        {/* relation to patient */}
        <CustomSelectBox
          value={formik.values.insuredRelationShipToPatientName}
          name="insuredRelationShipToPatientName"
          dropdownOptions={patienRelationOpt?.map((opt) => ({
            value: opt.relationShipToPatientName,
            id: opt.relationShipToPatientId,
          }))}
          label="Relation to Patient"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />

        <CustomField
          type="number"
          value={formik.values.insuredCellPhone}
          name="insuredCellPhone"
          label="Cell Phone"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <CustomField
          type="number"
          value={formik.values.insuredHomePhone}
          name="insuredHomePhone"
          label="Home Phone"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <CustomField
          type="number"
          value={formik.values.insuredWorkPhone}
          name="insuredWorkPhone"
          label="Work Phone"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <CustomField
          type="number"
          value={formik.values.insuredExt}
          name="insuredExt"
          label="Ext"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <CustomField
          type="text"
          value={formik.values.insuredSSN}
          name="insuredSSN"
          label="SSN"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />

        {/* country types */}

        <CustomSelectBox
          value={formik.values.insuredCountryName}
          name="insuredCountryName"
          dropdownOptions={countryOptions?.map((opt) => ({
            value: opt.countryName,
            id: opt.countryId,
          }))}
          label="Country"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        {/* state options */}
        <CustomSelectBox
          value={formik.values.insuredStateName}
          name="insuredStateName"
          dropdownOptions={stateOptions?.map((opt) => ({
            value: opt.stateName,
            id: opt.stateId,
          }))}
          label="State"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        {/* city types */}
        <CustomSelectBox
          value={formik.values.insuredCityName}
          name="insuredCityName"
          dropdownOptions={cityOptions?.map((opt) => ({
            value: opt.cityName,
            id: opt.cityId,
          }))}
          label="City"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <CustomField
          type="text"
          value={formik.values.insuredZipCode}
          name="insuredZipCode"
          label="Zipcode"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
      </Box>
      {/*Employee details  */}
      <div>
        <Typography variant="h3" component={"h4"} marginBottom="8px"  color="#414141">
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
          <CustomField
            type="text"
            value={formik.values.employeeName}
            name="employeeName"
            label="Employee Name"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />

          {/* employeement status */}
          <CustomSelectBox
            value={formik.values.empEmploymentStatusName}
            name="empEmploymentStatusName"
            dropdownOptions={employeementOptions?.map((opt) => ({
              value: opt.employmentStatusName,
              id: opt.employmentStatusId,
            }))}
            label="Employement Status"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />

          <CustomField
            type="text"
            value={formik.values.empAddress}
            name="empAddress"
            label="Address"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />

          {/* city types */}
          <CustomSelectBox
            value={formik.values.empCityName}
            name="empCityName"
            dropdownOptions={cityOptions?.map((opt) => ({
              value: opt.cityName,
              id: opt.cityId,
            }))}
            label="City"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />

          {/* state options */}
          <CustomSelectBox
            value={formik.values.empStateName}
            name="empStateName"
            dropdownOptions={stateOptions?.map((opt) => ({
              value: opt.stateName,
              id: opt.stateId,
            }))}
            label="State"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />

          {/*  */}
          <CustomField
            type="text"
            value={formik.values.empZipCode}
            name="empZipCode"
            label="Zipcode"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
        </Box>
      </div>
    </Box>












  );
};

export default InsuranceInfo;
