import React, { useEffect, useState } from "react";
import PatientInfo from "./PatientInfo";
import { useFormik } from "formik";
import { Box, Button, Tab, Tabs } from "@mui/material";
import Header from "../../components/Header";
import InsuranceInfo from "./InsuranceInfo";
import { useDispatch, useSelector } from "react-redux";
import { newPatientAction } from "../../features/actions/createPatientAction";

import "./createpatient.css";
import path from "../../config/apiUrl";
import PayerInfo from "./PayerInfo";
const CreatePatient = () => {
  const [tabValue, setTabValue] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.patient);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    drivingLicense: "",
    dateOfBirth: null,
    dateOfDeath: null,
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
    insuredHomePhone: "",
    insuredCellPhone: "",
    insuredWorkPhone: "",
    insuredExt: "",
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
    accountNo: "",
    patientName: "",

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
    payerInfoPayerType: "",
  });
  const handleTabChange = (event, newValue) => {
    setIsFormVisible(false);
    setTimeout(() => {
      setTabValue(newValue);
      setIsFormVisible(true);
    }, 400);
  };

  const handleFormSubmit = async (formValues) => {
    try {
      let endpoint;

      switch (tabValue) {
        case 0:
          endpoint = `${path}/test-patient`;

          break;
        case 1:
          endpoint = `${path}/insuredParty`;

          break;
        case 2:
          // eslint-disable-next-line no-unused-vars
          endpoint = `${path}/payerInfo`;

          break;
        default:
          break;
      }
      if (endpoint) {
        // Dispatch the action with the dynamic endpoint and form data

        await dispatch(newPatientAction({ endpoint, data: formValues }));
        formik.resetForm();
        console.log(formValues, "checking submit values of createPatient");
      } else {
        console.error("Invalid tabValue:", tabValue);
      }
    } catch (error) {
      console.error("Error creating patient:", error);
    }
  };

  const formik = useFormik({
    initialValues: formData,
    onSubmit: async (values) => {
      try {
        await handleFormSubmit(values);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          drivingLicense: "",
          dateOfBirth: null,
          dateOfDeath: null,
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
          insuredDateOfBirth: "",
          insuredAddress: "",
          insuredSSN: "",
          insuredZipCode: "",
          insuredHomePhone: "",
          insuredCellPhone: "",
          insuredWorkPhone: "",
          insuredExt: "",
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
          accountNo: "",
          patientName: "",

          // payer info data
          payerInfoMemberId: "",
          payerInfoGroupId: "",
          payerInfoCopayAmount: "",
          payerInfoCoInsurancePercent: "",
          payerInfoDeductibleAmount: "",
          payerInfoOutOfPocketMax: "",
          payerInfoEffectiveDate: "",
          payerInfoTerminationDate: "",
          payerInfoPriorityName: "",
          payerInfoPolicyType: "",
          payerInfoPayerType: "",
        });
        console.log(values, "checking submit values of createPatient");
      } catch (error) {
        console.error("Error creating patient:", error);
      }
    },
  });

  return (
    <Box margin="20px" paddingBottom={"25px"}>
      <Header title="CREATE PATIENT" subtitle="Create a New Patient Profile" />

      <Box>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{ marginBottom: "10px" }}
        >
          <Tab label="Patient Info" value={0} />
          <Tab label="Insurance Info" value={1} />
          <Tab label="Payer Info" value={2} />
        </Tabs>
        <form
          onSubmit={formik.handleSubmit}
          className={`formContainer ${!isFormVisible ? "hidden" : ""}`}
        >
          {/* <div > */}
          <Box className="formContent">
            {tabValue === 0 && (
              <PatientInfo
                formik={formik}
                formData={formData}
                setFormData={setFormData}
              />
            )}
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
          {/* </div> */}

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
              sx={{
                marginRight: "30px",
              }}
            >
              {tabValue === 0
                ? loading
                  ? "Creating"
                  : "Create"
                : loading
                ? "Adding"
                : "Add"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePatient;
