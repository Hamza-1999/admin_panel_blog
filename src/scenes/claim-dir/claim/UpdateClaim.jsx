import { Box, Button, Paper, Stack, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../../components/Header";
import { useState } from "react";
import ClaimInfo from "./ClaimInfo";
import ClaimCharges from "./ClaimCharges";
import { useFormik } from "formik";
import { claimInitVal } from "../../../utils/formikInitValues";
import { useDispatch, useSelector } from "react-redux";
import {
  getClaimAction,
  newClaimAction,
  updateClaimAction,
} from "../../../features/actions/claimAction";
import { useParams } from "react-router-dom";
import axios from "axios";
import path from "../../../config/apiUrl";

const UpdateClaim = () => {
  const { claimNumber } = useParams();
  const [diagnosisData, setDiagnosisData] = useState([]);
  //   get claims
  const { getClaims, loading } = useSelector((state) => state.claim);
  const findClaim = getClaims.result?.find(
    (el) => el.claimNumber === Number(claimNumber)
  );
  console.log(findClaim, "findedClaimUpdate");
  const [tabValue, setTabValue] = useState(0);
  const [claimIds, setClaimIds] = useState({
    patientAccountNo: findClaim?.patientAccountNo || null,
    patientId: findClaim?.patientId || null,
    practiceId: findClaim?.practiceId || null,
    billingProviderId: findClaim?.billingProviderId || null,
    insuredPartyId: findClaim?.insuredPartyId || null,
    payerInfoId: findClaim?.payerInfoId || null,
    renderingProviderId: findClaim?.renderingProviderId || null,
    supervisingProviderId: findClaim?.supervisingProviderId || null,
    providerId: findClaim?.providerId || null,
  });
  const [facilityId, setFacilityId] = useState(null);
  const [claimChargesDto, setClaimChargesDto] = useState(
    findClaim?.claimChargesDto || []
  );
  console.log(claimChargesDto, "claimDto");

  //   fetch diagnosis
  const fetchAllDiagnosis = async () => {
    try {
      const response = await axios.get(`${path}/ct-diagnosisCode`);
      console.log(response, "response");
      if (response.status === 200) {
        const data = response.data;
        setDiagnosisData(data.result);
      } else {
        setDiagnosisData([]);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  //   const codeType = diagnosisData.map((el) => el);
  //   console.log(codeType, "codeTypes");

  const dispatch = useDispatch();
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const updateClaimInitVals = {
    patientName:
      `${findClaim?.patientFirstName} ${findClaim?.patientLastName} (${findClaim?.patientAccountNo})` ||
      "",
    patientAccountNo: findClaim?.patientAccountNo || null,
    renderingProviderName:
      `${findClaim?.renderingProviderFirstName} ${findClaim?.renderingProviderLastName} ` ||
      "",
    billingProviderName:
      `${findClaim?.billingProviderFirstName} ${findClaim?.billingProviderLastName} ` ||
      "",
    supervisingProviderName: "",
    practiceAddress: findClaim?.practiceAddress || "",
    practiceSequenceNo: findClaim?.practiceSequenceNo || null,
    primaryPayerInsuranceName: findClaim?.primaryPayerInsuranceName || "",
    primaryPayerMemberId: findClaim?.primaryPayerMemberId || null,
    primaryPayerGroupId: findClaim?.primaryPayerGroupId || null,
    primaryPayerPolicyType: findClaim?.primaryPayerPolicyType || "",
    primaryPayerCopayDue: findClaim?.primaryPayerCopayDue || null,
    payerSequenceNo: findClaim?.payerSequenceNo || null,
    claimFrequency: findClaim?.claimFrequency || "",
    referenceNumber: findClaim?.referenceNumber,
    facilityName: findClaim?.facilityName || "",

    // claim charges
    icD_A: findClaim?.icD_A || null,
    icD_B: findClaim?.icD_B || null,
    icD_C: findClaim?.icD_C || null,
    icD_D: findClaim?.icD_D || null,
    icD_E: findClaim?.icD_E || null,
    icD_F: findClaim?.icD_F || null,
    icD_G: findClaim?.icD_G || null,
    icD_H: findClaim?.icD_H || null,
    icD_I: findClaim?.icD_I || null,
    icD_J: findClaim?.icD_J || null,
    icD_K: findClaim?.icD_K || null,
    icD_L: findClaim?.icD_L || null,

    // description
    icd_A_Description: "",
    icd_B_Description: "",
    icd_C_Description: "",
    icd_D_Description: "",
    icd_E_Description: "",
    icd_F_Description: "",
    icd_G_Description: "",
    icd_H_Description: "",
    icd_I_Description: "",
    icd_J_Description: "",
    icd_K_Description: "",
    icd_L_Description: "",

    // charges dtos for multiple procedure
    // claimChargesDto: [
    //   {
    //     fromDate: null,
    //     toDate: null,
    //     procedureCode: "",
    //     posCode: "",
    //     tosCode: "",
    //     modCode_1: "",
    //     modCode_2: "",
    //     modCode_3: "",
    //     modCode_4: "",
    //     icD_pointers: "",
    //     unitPrice: null,
    //     units: null,
    //     amount: null,
    //     claimStatus: "",
    //   },
    // ],
  };

  const formik = useFormik({
    initialValues: updateClaimInitVals,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values, "claimvals999");
      const updateValues = {
        ...values,
        claimChargesDto: claimChargesDto,
        patientAccountNo: claimIds.patientAccountNo,
        patientId: claimIds.patientId,
        practiceId: claimIds.practiceId,
        billingProviderId: claimIds.billingProviderId,
        insuredPartyId: claimIds.insuredPartyId,
        payerInfoId: claimIds.payerInfoId,
        renderingProviderId: claimIds.renderingProviderId,
        supervisingProviderId: claimIds.supervisingProviderId,
        providerId: claimIds.providerId,
        facilityId: facilityId,
      };
      console.log(updateValues, "claim update");
      try {
        dispatch(
          updateClaimAction({
            claimNumber: findClaim?.claimNumber,
            ...updateValues,
          })
        );
      } catch (error) {
        throw new Error(error);
      }
      //   action.resetForm();
    },
  });

  useEffect(() => {
    try {
      dispatch(getClaimAction());
    } catch (error) {
      throw error;
    }
  }, [dispatch]);

  useEffect(() => {
    fetchAllDiagnosis();
  }, []);
  return (
    <Box margin="20px">
      <Header title="Update Claim" />
      <Stack
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        alignItems={{ xs: "flex-start", sm: "flex-start", md: "center" }}
        justifyContent="space-between"
        gap={"15px"}
        sx={{
          width: { xs: "95%", sm: "75%", md: "50%" },
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            order: { xs: 2, sm: 2, md: 1 },
          }}
        >
          <Tab label="Claim" value={0} />
          <Tab label="Charges" value={1} />
        </Tabs>

        <Box sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
          <Button
            type="reset"
            color="error"
            variant="outlined"
            form="claimForm"
            sx={{
              marginRight: "15px",
            }}
            // onSubmit={formik.handleSubmit}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            form="claimForm"
            // sx={{
            //   marginRight: "15px",
            // }}
            // onSubmit={formik.handleSubmit}
            sx={{ bgcolor: "#6870fa", color: "#fff" }}
          >
            Save
          </Button>
        </Box>
      </Stack>

      <form id="claimForm" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            padding: "15px",
          }}
        >
          {tabValue === 0 &&
            (loading ? (
              <div>loading...</div>
            ) : (
              findClaim && (
                <ClaimInfo
                  formik={formik}
                  setClaimIds={setClaimIds}
                  setFacilityId={setFacilityId}
                />
              )
            ))}
          {tabValue === 1 && (
            <ClaimCharges
              formik={formik}
              setClaimChargesDto={setClaimChargesDto}
              claimChargesDto={claimChargesDto}
            />
          )}
        </Box>
      </form>
    </Box>
  );
};

export default UpdateClaim;
