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
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomSelectBox2 from "../../components/CustomSelectBox2";

const InsuranceInfo = ({ formik, newFormik }) => {
  const [genderOptions, setGenderOptions] = useState([]);
  const [employeementOptions, setEmployeementOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [patienRelationOpt, setPatientRelationOpt] = useState([]);
  // const [priorityOptions, setPriorityOptions] = useState([]);

  const dispatch = useDispatch();

  // Define data fetching URLs
  const dataFetchUrls = {
    genderTypes: `${path}/ct-genderIdentity`,
    employmentStatus: `${path}/ct-employmentStatus`,
    relationToPatient: `${path}/ct-relationToPatient`,
    // priorityType: `${path}/ct-priorityType`,
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
    // fetchDataOptions(dataFetchUrls.priorityType, setPriorityOptions);

    fetchDataOptions(dataFetchUrls.states, setStateOptions);
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Typography component="h2" fontWeight="600">
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
          value={newFormik.values.insuredFirstName}
          name="insuredFirstName"
          label="First Name"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
          error={newFormik.errors}
          touched={newFormik.touched}
          isRequired={true}
        />

        <CustomField
          type="text"
          value={newFormik.values.insuredLastName}
          name="insuredLastName"
          label="Last Name"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
          error={newFormik.errors}
          touched={newFormik.touched}
          isRequired={true}
        />

        {/* priority type */}
        {/* <CustomSelectBox
          value={newFormik.values.insuredPriorityType}
          name="insuredPriorityType"
          dropdownOptions={priorityOptions?.map((opt) => ({
            value: opt.priorityType,
            id: opt.priorityTypeId,
          }))}
          label="Priority Type"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
        /> */}
        <CustomField
          type="text"
          value={newFormik.values.insuredEmail}
          name="insuredEmail"
          label="Email"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
        />

        {/* <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
          <DatePicker
            label="Date of Birth"
            value={newFormik.values.insuredDateOfBirth}
            onChange={(value) =>
              newFormik.setFieldValue("insuredDateOfBirth", value)
            }
            onBlur={() => newFormik.setFieldTouched("insuredDateOfBirth", true)}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="MM/DD/YYYY"
            clearable
          />
        </LocalizationProvider> */}

        {/* <div> */}
        <CustomDatePicker
          dateLabel="Date Of Birth"
          dateValue={newFormik.values.insuredDateOfBirth}
          handleDateChange={(value) =>
            newFormik.setFieldValue("insuredDateOfBirth", value)
          }
          handleDateBlur={() =>
            newFormik.setFieldTouched("insuredDateOfBirth", true)
          }
        />
        {/* </div> */}

        {/* gender identity */}
        <CustomSelectBox2
          name="insuredGenderIdentityId"
          value={newFormik.values.insuredGenderIdentityId}
          dropdownOptions={genderOptions?.map((opt) => ({
            value: opt.genderIdentityName,
            id: opt.genderIdentityId,
          }))}
          label="Gender"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
          error={newFormik.errors}
          touched={newFormik.touched}
          isRequired={true}
          formik={newFormik}
        />

        {/* relation to patient */}
        <CustomSelectBox2
          value={newFormik.values.insuredRelationShipToPatientId}
          name="insuredRelationShipToPatientId"
          dropdownOptions={patienRelationOpt?.map((opt) => ({
            value: opt.relationShipToPatientName,
            id: opt.relationShipToPatientId,
          }))}
          label="Relation to Patient"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
          formik={newFormik}
        />

        <CustomField
          type="number"
          value={newFormik.values.insuredCellPhone}
          name="insuredCellPhone"
          label="Cell Phone"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
          error={newFormik.errors}
          touched={newFormik.touched}
          isRequired={true}
        />
        <CustomField
          type="number"
          value={newFormik.values.insuredHomePhone}
          name="insuredHomePhone"
          label="Home Phone"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
        />
        <CustomField
          type="number"
          value={newFormik.values.insuredWorkPhone}
          name="insuredWorkPhone"
          label="Work Phone"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
        />
        <CustomField
          type="number"
          value={newFormik.values.insuredExt}
          name="insuredExt"
          label="Ext"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
        />
        <CustomField
          type="text"
          value={newFormik.values.insuredSSN}
          name="insuredSSN"
          label="SSN"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
        />

        {/* country types */}

        <CustomSelectBox2
          formik={newFormik}
          value={newFormik.values.insuredCountryId}
          name="insuredCountryId"
          dropdownOptions={countryOptions?.map((opt) => ({
            value: opt.countryName,
            id: opt.countryId,
          }))}
          label="Country"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
        />
        {/* state options */}
        <CustomSelectBox2
          formik={newFormik}
          value={newFormik.values.insuredStateId}
          name="insuredStateId"
          dropdownOptions={stateOptions?.map((opt) => ({
            value: opt.stateName,
            id: opt.stateId,
          }))}
          label="State"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
          error={newFormik.errors}
          touched={newFormik.touched}
          isRequired={true}
        />
        {/* city types */}
        <CustomSelectBox2
          formik={newFormik}
          value={newFormik.values.insuredCityId}
          name="insuredCityId"
          dropdownOptions={cityOptions?.map((opt) => ({
            value: opt.cityName,
            id: opt.cityId,
          }))}
          label="City"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
          error={newFormik.errors}
          touched={newFormik.touched}
          isRequired={true}
        />
        <CustomField
          type="text"
          value={newFormik.values.insuredZipCode}
          name="insuredZipCode"
          label="Zipcode"
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
          error={newFormik.errors}
          touched={newFormik.touched}
          isRequired={true}
        />
      </Box>
      <Box
        display="grid"
        gap="30px"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(1, minmax(0, 1fr))",
            md: "repeat(1, minmax(0, 1fr))",
          },
        }}
      >
        <CustomField
          label="Address"
          value={newFormik.values.insuredAddress}
          handleChange={newFormik.handleChange}
          handleBlur={newFormik.handleBlur}
          name="insuredAddress"
          error={newFormik.errors}
          touched={newFormik.touched}
          isRequired={true}
        />
      </Box>
      {/*Employee details  */}
      <div>
        <Typography
          component="h4"
          fontWeight={"bold"}
          marginBottom="8px"
          color="#414141"
        >
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
            value={newFormik.values.employeeName}
            name="employeeName"
            label="Employee Name"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
          />

          {/* employeement status */}
          <CustomSelectBox2
            formik={newFormik}
            value={newFormik.values.empEmploymentStatusId}
            name="empEmploymentStatusId"
            dropdownOptions={employeementOptions?.map((opt) => ({
              value: opt.employmentStatusName,
              id: opt.employmentStatusId,
            }))}
            label="Employement Status"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
          />

          <CustomField
            type="text"
            value={newFormik.values.empAddress}
            name="empAddress"
            label="Address"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
          />

          {/* city types */}
          <CustomSelectBox2
            formik={newFormik}
            value={newFormik.values.empCityId}
            name="empCityId"
            dropdownOptions={cityOptions?.map((opt) => ({
              value: opt.cityName,
              id: opt.cityId,
            }))}
            label="City"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
          />

          {/* state options */}
          <CustomSelectBox2
            formik={newFormik}
            value={newFormik.values.empStateId}
            name="empStateId"
            dropdownOptions={stateOptions?.map((opt) => ({
              value: opt.stateName,
              id: opt.stateId,
            }))}
            label="State"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
          />

          {/*  */}
          <CustomField
            type="text"
            value={newFormik.values.empZipCode}
            name="empZipCode"
            label="Zipcode"
            handleChange={newFormik.handleChange}
            handleBlur={newFormik.handleBlur}
          />
        </Box>
      </div>
    </Box>
  );
};

export default InsuranceInfo;
