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

  const [isFormVisible, setIsFormVisible] = useState(true);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.patient);

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
            {tabValue === 1 && <InsuranceInfo formik={formik} />}
            {tabValue === 2 && <PayerInfo formik={formik} />}
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePatient;
