import React, { useEffect, useState } from "react";
import PatientInfo from "./PatientInfo";
import { useFormik } from "formik";
import { Box, Button, Stack, Tab, Tabs } from "@mui/material";
import Header from "../../components/Header";
import InsuranceInfo from "./InsuranceInfo";
import { useDispatch, useSelector } from "react-redux";
import { newPatientAction } from "../../features/actions/createPatientAction";

import "./createpatient.css";
import path from "../../config/apiUrl";
import PayerInfo from "./PayerInfo";
import { patientInitValues } from "../../utils/formikInitValues";
// import { getInsuranceAction } from "../../features/actions/patientInsuranceAction";

const CreatePatient = () => {
  const [tabValue, setTabValue] = useState(0);
  // const insuranctAccNo = useSelector((state) => state.patient);
  // console.log(insuranctAccNo, "insurance account number");
  const [isFormVisible, setIsFormVisible] = useState(true);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.patient);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    accountNo: null,
    email: "",
    drivingLicense: "",
    dateOfBirth: null,
    dateOfDeath: null,
    cellPhone: null,
    homePhone: null,
    workPhone: null,
    ext: null,
    address: "",
    zipCode: "",
    emergencyContactFirstName: "",
    emergencyContactLastName: "",
    emergencyContactAddress: "",
    emergencyContactZipCode: "",
    emergencyContactState: "",
    emergencyContactCity: "",
    // dateOfDeath: null,
    // dropdowns
    genderIdentityName: "",
    maritalStatusName: "",
    raceStatusName: "",
    sexualOrientationName: "",
    employmentStatusName: "",
    referralSourceName: "",
    relationShipToPatientName: "",
    ethnicityName: "",
    studentStatusName: "",
    accountType: "",
    cityName: "",
    countryName: "",
    stateName: "",
    residenceTypeName: "",

    // Insured Information Data
    insuredFirstName: "",
    insuredLastName: "",
    insuredDateOfBirth: null,
    insuredAddress: "",
    insuredSSN: "",
    insuredZipCode: "",
    insuredHomePhone: null,
    insuredCellPhone: null,
    insuredWorkPhone: null,
    insuredExt: null,
    insuredEmail: "",
    insuredCityName: "",
    insuredStateName: "",
    insuredCountryName: "",
    insuredRelationShipToPatientName: "",
    insuredGenderIdentityName: "",
    // employeeName: "",
    empAddress: "",
    empCityName: "",
    empStateName: "",
    insuredPartyName: "",
    empZipCode: "",
    empEmploymentStatusName: "",

    // patientName: "",

    // payer info data
    payerInfoMemberId: null,
    payerInfoGroupId: null,
    payerInfoCopayAmount: null,
    payerInfoCoInsurancePercent: null,
    payerInfoDeductibleAmount: null,
    payerInfoOutOfPocketMax: null,
    payerInfoEffectiveDate: null,
    payerInfoTerminationDate: null,
    payerInfoPriorityName: "",
    payerInfoPolicyType: "",
    payerInfoPayerName: "",
  });
  const handleTabChange = (event, newValue) => {
    setIsFormVisible(false);
    setTimeout(() => {
      setTabValue(newValue);
      setIsFormVisible(true);
    }, 400);
  };

  const handleFormSubmit = (formValues) => {
    const requiredFields = ["firstName", "lastName"];
    const emptyFields = requiredFields.filter(
      (fieldName) => !formValues[fieldName]
    );
    if (emptyFields.length > 0) {
      alert("Please fill the required fields first");
      return;
    }
    try {
      dispatch(newPatientAction(formValues));
    } catch (error) {
      console.error("Error creating patient:", error);
    }
  };

  const formik = useFormik({
    initialValues: patientInitValues,
    onSubmit: (values, action) => {
      try {
        handleFormSubmit(values);
        console.log(values, "checking submit values of createPatient");
      } catch (error) {
        console.error("Error creating patient:", error);
      }
      action.resetForm();
    },
  });

  return (
    <Box margin="20px" paddingBottom={"25px"}>
      <Header title="CREATE PATIENT" subtitle="Create a New Patient Profile" />
      <Box>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{ marginBottom: "10px" }}
          >
            <Tab label="Patient Info" value={0} />
            <Tab label="Insurance Info" value={1} />
            <Tab label="Payer Info" value={2} />
          </Tabs>

          <Box>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              form="patientForm"
              disabled={loading}
              sx={{
                marginRight: "30px",
              }}
              // onSubmit={formik.handleSubmit}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </Box>
        </Stack>
        <form
          id="patientForm"
          onSubmit={formik.handleSubmit}
          className={`formContainer ${!isFormVisible ? "hidden" : ""}`}
        >
          {/* <div > */}
          <Box className="formContent">
            {tabValue === 0 && <PatientInfo formik={formik} />}
            {tabValue === 1 && (
              <InsuranceInfo
                formik={formik}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {tabValue === 2 && (
              <PayerInfo
                formik={formik}
                formData={formData}
                setFormData={setFormData}
              />
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePatient;
