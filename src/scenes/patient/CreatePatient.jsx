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
import BillingInfo from "./BillingInfo";
import ClaimDefaults from "./ClaimDefaults";
import MainInsurance from "./MainInsurance";
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
    // console.log(formValues, "checkFormVals");
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
        console.log(formValues, "gettinFormVals");
      } catch (error) {
        console.error("Error creating patient:", error);
      }
    }
  };

  const formik = useFormik({
    initialValues: patientInitValues,
    onSubmit: (values, action) => {
      console.log(values, "getValsFormData");
      try {
        handleFormSubmit(values);
        console.log(values, "checking submit values of createPatient");
      } catch (error) {
        console.error("Error creating patient:", error);
      }
      // action.resetForm();
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
      <Box margin="20px" paddingBottom={"25px"}>
        <Header
          title="CREATE PATIENT"
          subtitle="Create a New Patient Profile"
        />
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
                borderRadius: "10px 10px 0 0",
              }}
            >
              <Tab
                style={{ fontSize: "18px", fontWeight: "bold" }}
                className="tabsdesigning"
                label="Patient Info"
                value={0}
              />
              <Tab
                style={{ fontSize: "18px", fontWeight: "bold" }}
                className="tabsdesigning"
                label="Insurance Information"
                value={1}
              />
              {/* <Tab
                style={{ fontSize: "18px", fontWeight: "bold" }}
                className="tabsdesigning"
                label="Insurance Info"
                value={1}
              />
              <Tab
                style={{ fontSize: "18px", fontWeight: "bold" }}
                className="tabsdesigning"
                label="Payer Info"
                value={2}
              /> */}
              <Tab
                style={{ fontSize: "18px", fontWeight: "bold" }}
                className="tabsdesigning"
                label="Billing Info"
                value={2}
              />
              <Tab
                style={{ fontSize: "18px", fontWeight: "bold" }}
                className="tabsdesigning"
                label="Claim Defaults"
                value={3}
              />
            </Tabs>

            <Box sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
              <CustomButton
                type="reset"
                color="error"
                padding={"7px"}
                isBlue={false}
                sx={{
                  marginRight: "15px",
                }}
                onClick={handleCancel}
              >
                Cancel
              </CustomButton>
              <CustomButton
                type="submit"
                isBlue={true}
                padding={"7px"}
                formId="patientForm"
                disabled={loading}
                sx={{
                  marginRight: "30px",
                }}
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
            <Box className="formContent">
              {tabValue === 0 && <PatientInfo formik={formik} />}
              {tabValue === 1 && <MainInsurance formik={formik} />}
              {/* {tabValue === 1 && <InsuranceInfo formik={formik} />}
              {tabValue === 2 && <PayerInfo formik={formik} />} */}
              {tabValue === 2 && <BillingInfo formik={formik} />}
              {tabValue === 3 && <ClaimDefaults formik={formik} />}
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatePatient;
