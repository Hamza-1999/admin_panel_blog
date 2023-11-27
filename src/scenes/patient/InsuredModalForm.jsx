import { Box, Stack, Tab, Tabs } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import InsuranceInfo from "./InsuranceInfo";
import PayerInfo from "./PayerInfo";
import { patientSchema } from "../../schemas/patientSchema";
import { useFormik } from "formik";
import { useState } from "react";

const InsuredModalForm = ({
  handleClose,
  formik,
  handleAddInsurance,
  selectedPriorityType,
}) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const initialValues = {
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
    insuredCityId: null,
    insuredStateName: "",
    insuredStateId: null,
    insuredCountryName: "",
    insuredCountryId: null,
    insuredRelationShipToPatientName: "",
    insuredGenderIdentityId: null,
    insuredGenderIdentityName: "",
    insuredPriorityType: "",
    insuredPriorityTypeId: selectedPriorityType,
    employeeName: "",
    empAddress: "",
    empCityId: null,
    empCityName: "",
    empStateId: null,
    empStateName: "",
    insuredPartyName: "",
    empZipCode: "",
    empEmploymentStatusName: "",
    // payer info
    payerInfoMemberId: null,
    payerInfoGroupId: null,
    payerInfoCopayAmount: 0,
    payerInfoCoInsurancePercent: 0,
    payerInfoDeductibleAmount: 0,
    payerInfoOutOfPocketMax: 0,
    payerInfoEffectiveDate: null,
    payerInfoTerminationDate: null,
    payerInfoPriorityName: "",
    payerInfoPolicyId: null,
    payerInfoPolicyType: "",
    payerInfoPayerName: "",
    payerInfoSequenceNumber: null,
  };

  const newFormik = useFormik({
    initialValues: initialValues,
    validationSchema: patientSchema,
    onSubmit: (values) => {
      console.log(values, "check inner form values");
      handleAddInsurance(values);
    },
  });
  console.log(initialValues.insuredPriorityType, "checkpType");
  // add data
  // const handleAddInsurance = () => {
  //   // setShowInsuranceData(true);
  //   formik.values.showInsuranceData = true;
  //   handleClose();
  // };
  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              marginBottom: "10px",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <Tab
              label="Insurance Info"
              style={{ fontSize: "18px", fontWeight: "bold" }}
              className="tabsdesigning"
              value={0}
            />
            <Tab
              label="Payer Info"
              style={{ fontSize: "18px", fontWeight: "bold" }}
              className="tabsdesigning"
              value={1}
            />
          </Tabs>

          <CustomButton
            type="submit"
            isBlue={true}
            padding="5px 15px"
            // handleClick={handleAddInsurance}
            formId="insuranceForm"
          >
            Add
          </CustomButton>
        </Stack>

        <form
          onSubmit={newFormik.handleSubmit}
          id="insuranceForm"
          className="formContent"
        >
          {tabValue === 0 && (
            <InsuranceInfo newFormik={newFormik} formik={formik} />
          )}
          {tabValue === 1 && (
            <PayerInfo newFormik={newFormik} formik={formik} />
          )}
        </form>
      </Box>
    </>
  );
};

export default InsuredModalForm;
