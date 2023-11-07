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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomButton from "../../components/CustomButton";
// import { getInsuranceAction } from "../../features/actions/patientInsuranceAction";

const CreatePatient = () => {
  const navigate = useNavigate();
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
    // const requiredFields = ["firstName", "lastName"];
    // const emptyFields = requiredFields.filter(
    //   (fieldName) => !formValues[fieldName]
    // );

    // if (emptyFields.length > 0) {
    //   alert("Please fill the required fields first");
    //   return;
    // }
    if (
      formik.values.firstName.length === 0 &&
      formik.values.lastName.length === 0
    ) {
      toast.error("Patient First & Last Name is required");
    } else if (
      formik.values.genderIdentityName.length === 0 ||
      formik.values.genderIdentityName === null ||
      !formik.values.genderIdentityName
    ) {
      toast.error("Gender field is required");
    } else if (
      formik.values.dateOfBirth.length === 0 ||
      formik.values.dateOfBirth === null
    ) {
      toast.error("Date of birth field is required");
    } else {
      try {
        dispatch(newPatientAction(formValues));
      } catch (error) {
        console.error("Error creating patient:", error);
      }
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

  // handle cancel
  const handleCancel = () => {
    const conform = window.confirm("Are you sure you want to cancel?");
    if (conform) {
      formik.resetForm();
      navigate("/managepatient");
    }
  };

  
  return (
  
    <Box className="backgroundpatient ">
    <Box  margin="20px" paddingBottom={"25px"}>
      <Header title="CREATE PATIENT" subtitle="Create a New Patient Profile" />
      <Box>
        <Stack
          sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
          // alignItems="center"
          justifyContent="space-between"
        >
          

<Tabs
  value={tabValue}
  onChange={handleTabChange}

  sx={{
    order: { xs: 2, sm: 2, md: 1 },
    marginBottom: "10px",
    borderRadius: "10px 10px 0 0"
    
  }} 
>
  <Tab style={{fontSize:"18px",fontWeight:"bold"}} className="tabsdesigning"  label="Patient Info" value={0} />
  <Tab  style={{fontSize:"18px",fontWeight:"bold"}} className="tabsdesigning"  label="Insurance Info" value={1} />
  <Tab  style={{fontSize:"18px",fontWeight:"bold"}}className="tabsdesigning"  label="Payer Info" value={2} />
</Tabs>



 {/* import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tabs">
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
          className={`tabsdesigning ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Patient Info
        </div>
       
      </div>
    </div>
  );
};

export default TabComponent;  */}




          <Box sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
            <CustomButton
              type="reset"
              color="error"
              form="claimForm"
              sx={{
                marginRight: "15px",
              }}
              onClick={handleCancel}
            >
              Cancel
            </CustomButton>
            <CustomButton
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
            </CustomButton>
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
    </Box>
  
  );
};

export default CreatePatient;
