import { Box, Button, Paper, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import { useState } from "react";
import ClaimInfo from "./ClaimInfo";
import ClaimCharges from "./ClaimCharges";
import { useFormik } from "formik";
import { claimInitVal } from "../../../utils/formikInitValues";
import { useDispatch } from "react-redux";
import { newClaimAction } from "../../../features/actions/claimAction";

const NewClaim = () => {
  const [tabValue, setTabValue] = useState(0);
  const [claimIds, setClaimIds] = useState({
    patientId: null,
    practiceId: null,
    billingProviderId: null,
    insuredPartyId: null,
    payerInfoId: null,
    renderingProviderId: null,
    supervisingProviderId: null,
    providerId: null,
  });

  console.log(claimIds, "claimsids444");
  const dispatch = useDispatch();
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const formik = useFormik({
    initialValues: claimInitVal,
    onSubmit: (values) => {
      console.log(
        {
          ...values,
          patientId: claimIds.patientId,
          practiceId: claimIds.practiceId,
          billingProviderId: claimIds.billingProviderId,
          insuredPartyId: claimIds.insuredPartyId,
          payerInfoId: claimIds.payerInfoId,
          renderingProviderId: claimIds.renderingProviderId,
          supervisingProviderId: claimIds.supervisingProviderId,
        },
        "claim values"
      );
      const postValues = {
        ...values,
        patientId: claimIds.patientId,
        practiceId: claimIds.practiceId,
        billingProviderId: claimIds.billingProviderId,
        insuredPartyId: claimIds.insuredPartyId,
        payerInfoId: claimIds.payerInfoId,
        renderingProviderId: claimIds.renderingProviderId,
        supervisingProviderId: claimIds.supervisingProviderId,
        providerId: claimIds.providerId,
      };
      try {
        dispatch(newClaimAction(postValues));
      } catch (error) {
        throw error;
      }
    },
  });

  console.log(formik.values, "vals");
  return (
    <Box margin="20px">
      <Header title="Claim" subtitle="Create a New Claim" />

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
            color="secondary"
            variant="contained"
            form="claimForm"
            // sx={{
            //   marginRight: "15px",
            // }}
            // onSubmit={formik.handleSubmit}
          >
            Save
          </Button>
        </Box>
      </Stack>

      <form id="claimForm" onSubmit={formik.handleSubmit}>
        <Paper
          sx={{
            width: { xs: "95%", sm: "75%", md: "50%" },
            padding: "15px",
          }}
        >
          {tabValue === 0 && (
            <ClaimInfo formik={formik} setClaimIds={setClaimIds} />
          )}
          {tabValue === 1 && <ClaimCharges />}
        </Paper>
      </form>
    </Box>
  );
};

export default NewClaim;
