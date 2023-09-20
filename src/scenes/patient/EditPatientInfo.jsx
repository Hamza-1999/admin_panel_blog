import { Box, Button, Stack, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  getPatientAction,
  updatePatientAction,
} from "../../features/actions/createPatientAction";
import { useNavigate, useParams } from "react-router-dom";
import EditPatient from "./EditPatient";
import EditPayerInfo from "./EditPayerInfo";
import EditPatInsurance from "./EditPatInsurance";
import dayjs from "dayjs";

const EditPatientInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const { accountNo } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getAllPatients, loading } = useSelector((state) => state.patient);
  console.log(getAllPatients, "gettin777");

  useEffect(() => {
    if (!getAllPatients?.result?.length) {
      dispatch(getPatientAction()).then(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  const findEditValues = getAllPatients.result?.find(
    (el) => el.accountNo === Number(accountNo)
  );

  console.log(findEditValues?.payerInfoEffectiveDate, "effectiveDate");
  const editPatientInitVal = {
    firstName: findEditValues?.firstName || "",
    lastName: findEditValues?.lastName || "",
    email: findEditValues?.email || "",
    drivingLicense: findEditValues?.drivingLicense || "",
    dateOfBirth: findEditValues?.dateOfBirth
      ? dayjs(findEditValues.dateOfBirth)
      : null,
    dateOfDeath: findEditValues?.dateOfDeath
      ? dayjs(findEditValues.dateOfDeath)
      : null,
    cellPhone: findEditValues?.cellPhone || null,
    homePhone: findEditValues?.homePhone || null,
    workPhone: findEditValues?.workPhone || null,
    ext: findEditValues?.ext || null,
    address: findEditValues?.address || "",
    zipCode: findEditValues?.zipCode || "",
    emergencyContactFirstName: findEditValues?.emergencyContactFirstName || "",
    emergencyContactLastName: findEditValues?.emergencyContactLastName || "",
    emergencyContactAddress: findEditValues?.emergencyContactAddress || "",
    emergencyContactZipCode: findEditValues?.emergencyContactZipCode || "",
    emergencyContactState: findEditValues?.emergencyContactState || "",
    emergencyContactCity: findEditValues?.emergencyContactCity || "",
    // dateOfDeath: null,
    // dropdowns
    genderIdentityName: findEditValues?.genderIdentityName || "",
    maritalStatusName: findEditValues?.maritalStatusName || "",
    raceStatusName: findEditValues?.raceStatusName || "",
    sexualOrientationName: findEditValues?.sexualOrientationName || "",
    employmentStatusName: findEditValues?.employmentStatusName || "",
    referralSourceName: findEditValues?.referralSourceName || "",
    relationShipToPatientName: findEditValues?.relationShipToPatientName || "",
    ethnicityName: findEditValues?.ethnicityName || "",
    studentStatusName: findEditValues?.studentStatusName || "",
    accountType: findEditValues?.accountType || "",
    cityName: findEditValues?.cityName || "",
    countryName: findEditValues?.countryName || "",
    stateName: findEditValues?.stateName || "",
    residenceTypeName: findEditValues?.residenceTypeName || "",

    // Insured Information Data
    insuredFirstName: findEditValues?.insuredFirstName || "",
    insuredLastName: findEditValues?.insuredLastName || "",
    insuredDateOfBirth: findEditValues?.insuredDateOfBirth
      ? dayjs(findEditValues.insuredDateOfBirth)
      : null,
    insuredAddress: findEditValues?.insuredAddress || "",
    insuredSSN: findEditValues?.insuredSSN || "",
    insuredZipCode: findEditValues?.insuredZipCode || "",
    insuredHomePhone: findEditValues?.insuredHomePhone || null,
    insuredCellPhone: findEditValues?.insuredCellPhone || null,
    insuredWorkPhone: findEditValues?.insuredWorkPhone || null,
    insuredExt: findEditValues?.insuredExt || null,
    insuredEmail: findEditValues?.insuredEmail || "",
    insuredCityName: findEditValues?.insuredCityName || "",
    insuredStateName: findEditValues?.insuredStateName || "",
    insuredCountryName: findEditValues?.insuredCountryName || "",
    insuredPriorityType: findEditValues?.insuredPriorityType || "",
    insuredRelationShipToPatientName:
      findEditValues?.insuredRelationShipToPatientName || "",
    insuredGenderIdentityName: findEditValues?.insuredGenderIdentityName || "",
    employeeName: findEditValues?.employeeName || "",
    empAddress: findEditValues?.empAddress || "",
    empCityName: findEditValues?.empCityName || "",
    empStateName: findEditValues?.empStateName || "",
    insuredPartyName: findEditValues?.insuredPartyName || "",
    empZipCode: findEditValues?.empZipCode || "",
    empEmploymentStatusName: findEditValues?.empEmploymentStatusName || "",

    // patientName: findEditValues?.firstName || "",

    // payer info data
    payerInfoMemberId: findEditValues?.payerInfoMemberId || null,
    payerInfoGroupId: findEditValues?.payerInfoGroupId || null,
    payerInfoCopayAmount: findEditValues?.payerInfoCopayAmount || null,
    payerInfoCoInsurancePercent:
      findEditValues?.payerInfoCoInsurancePercent || null,
    payerInfoDeductibleAmount:
      findEditValues?.payerInfoDeductibleAmount || null,
    payerInfoOutOfPocketMax: findEditValues?.payerInfoOutOfPocketMax || null,
    payerInfoEffectiveDate: findEditValues?.payerInfoEffectiveDate
      ? dayjs(findEditValues.payerInfoEffectiveDate)
      : null,
    payerInfoTerminationDate: findEditValues?.payerInfoTerminationDate
      ? dayjs(findEditValues.payerInfoTerminationDate)
      : null,
    payerInfoPriorityName: findEditValues?.payerInfoPriorityName || "",
    payerInfoPolicyType: findEditValues?.payerInfoPolicyType || "",
    payerInfoPayerName: findEditValues?.payerInfoPayerName || "",
  };

  const [editFormData, setEditFormData] = useState({
    firstName: findEditValues?.firstName || "",
    lastName: findEditValues?.lastName || "",
    email: findEditValues?.email || "",
    drivingLicense: findEditValues?.drivingLicense || "",
    dateOfBirth: findEditValues?.dateOfBirth
      ? dayjs(findEditValues.dateOfBirth)
      : null,
    dateOfDeath: findEditValues?.dateOfDeath
      ? dayjs(findEditValues.dateOfDeath)
      : null,
    cellPhone: findEditValues?.cellPhone || null,
    homePhone: findEditValues?.homePhone || null,
    workPhone: findEditValues?.workPhone || null,
    ext: findEditValues?.ext || null,
    address: findEditValues?.address || "",
    zipCode: findEditValues?.zipCode || "",
    emergencyContactFirstName: findEditValues?.emergencyContactFirstName || "",
    emergencyContactLastName: findEditValues?.emergencyContactLastName || "",
    emergencyContactAddress: findEditValues?.emergencyContactAddress || "",
    emergencyContactZipCode: findEditValues?.emergencyContactZipCode || "",
    emergencyContactState: findEditValues?.emergencyContactState || "",
    emergencyContactCity: findEditValues?.emergencyContactCity || "",
    // dateOfDeath: null,
    // dropdowns
    genderIdentityName: findEditValues?.genderIdentityName || "",
    maritalStatusName: findEditValues?.maritalStatusName || "",
    raceStatusName: findEditValues?.raceStatusName || "",
    sexualOrientationName: findEditValues?.sexualOrientationName || "",
    employmentStatusName: findEditValues?.employmentStatusName || "",
    referralSourceName: findEditValues?.referralSourceName || "",
    relationShipToPatientName: findEditValues?.relationShipToPatientName || "",
    ethnicityName: findEditValues?.ethnicityName || "",
    studentStatusName: findEditValues?.studentStatusName || "",
    accountType: findEditValues?.accountType || "",
    cityName: findEditValues?.cityName || "",
    countryName: findEditValues?.countryName || "",
    stateName: findEditValues?.stateName || "",
    residenceTypeName: findEditValues?.residenceTypeName || "",

    // Insured Information Data
    insuredFirstName: findEditValues?.insuredFirstName || "",
    insuredLastName: findEditValues?.insuredLastName || "",
    insuredDateOfBirth: null,
    insuredAddress: findEditValues?.insuredAddress || "",
    insuredSSN: findEditValues?.insuredSSN || "",
    insuredZipCode: findEditValues?.insuredZipCode || "",
    insuredHomePhone: findEditValues?.insuredHomePhone || null,
    insuredCellPhone: findEditValues?.insuredCellPhone || null,
    insuredWorkPhone: findEditValues?.insuredWorkPhone || null,
    insuredExt: findEditValues?.insuredExt || null,
    insuredEmail: findEditValues?.insuredEmail || "",
    insuredCityName: findEditValues?.insuredCityName || "",
    insuredStateName: findEditValues?.insuredStateName || "",
    insuredCountryName: findEditValues?.insuredCountryName || "",
    insuredPriorityType: findEditValues?.insuredPriorityType || "",
    insuredRelationShipToPatientName:
      findEditValues?.insuredRelationShipToPatientName || "",
    insuredGenderIdentityName: findEditValues?.insuredGenderIdentityName || "",
    // employeeName: findEditValues?.firstName || "",
    empAddress: findEditValues?.empAddress || "",
    empCityName: findEditValues?.empCityName || "",
    empStateName: findEditValues?.empStateName || "",
    insuredPartyName: findEditValues?.insuredPartyName || "",
    empZipCode: findEditValues?.empZipCode || "",
    empEmploymentStatusName: findEditValues?.empEmploymentStatusName || "",

    // patientName: findEditValues?.firstName || "",

    // payer info data
    payerInfoMemberId: findEditValues?.payerInfoMemberId || null,
    payerInfoGroupId: findEditValues?.payerInfoGroupId || null,
    payerInfoCopayAmount: findEditValues?.payerInfoCopayAmount || null,
    payerInfoCoInsurancePercent:
      findEditValues?.payerInfoCoInsurancePercent || null,
    payerInfoDeductibleAmount:
      findEditValues?.payerInfoDeductibleAmount || null,
    payerInfoOutOfPocketMax: findEditValues?.payerInfoOutOfPocketMax || null,
    payerInfoEffectiveDate: null,
    payerInfoTerminationDate: null,
    payerInfoPriorityName: findEditValues?.payerInfoPriorityName || "",
    payerInfoPolicyType: findEditValues?.payerInfoPolicyType || "",
    payerInfoPayerName: findEditValues?.payerInfoPayerName || "",
  });

  const handleTabChange = (event, newValue) => {
    setIsFormVisible(false);
    setTimeout(() => {
      setTabValue(newValue);
      setIsFormVisible(true);
    }, 400);
  };

  const formik = useFormik({
    initialValues: editPatientInitVal,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values, "editedvalues567");
      try {
        dispatch(
          updatePatientAction({
            accountNo: findEditValues?.accountNo,
            ...values,
          })
        );
        // setEditFormData({ ...editFormData, ...values });

        // Reset the form values after successful submission
        formik.resetForm();

        navigate(`/showpatient/${findEditValues?.accountNo}`);
      } catch (error) {
        console.error("Error updating patient:", error);
      }
    },
  });

  return (
    <>
      <Box margin="20px" paddingBottom={"25px"}>
        <Header title="Edit PATIENT" subtitle="Update a Patient Profile" />
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
                {loading ? "Updating..." : "Update"}
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
              {tabValue === 0 && (
                <EditPatient
                  formik={formik}
                  editFormData={editFormData}
                  setEditFormData={setEditFormData}
                />
              )}
              {tabValue === 1 && (
                <EditPatInsurance
                  formik={formik}
                  editFormData={editFormData}
                  setEditFormData={setEditFormData}
                />
              )}
              {tabValue === 2 && (
                <EditPayerInfo
                  formik={formik}
                  editFormData={editFormData}
                  setEditFormData={setEditFormData}
                />
              )}
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default EditPatientInfo;
