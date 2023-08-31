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
    patientAccountNo: null,
    practiceId: null,
    billingProviderId: null,
    insuredPartyId: null,
    payerInfoId: null,
    renderingProviderId: null,
    supervisingProviderId: null,
    providerId: null,
  });
  const [facilityId, setFacilityId] = useState(null);
  const dispatch = useDispatch();
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const formik = useFormik({
    initialValues: claimInitVal,
    onSubmit: (values, action) => {
      const postValues = {
        ...values,
        patientAccountNo: claimIds.patientAccountNo,
        practiceId: claimIds.practiceId,
        billingProviderId: claimIds.billingProviderId,
        insuredPartyId: claimIds.insuredPartyId,
        payerInfoId: claimIds.payerInfoId,
        renderingProviderId: claimIds.renderingProviderId,
        supervisingProviderId: claimIds.supervisingProviderId,
        providerId: claimIds.providerId,
        facilityId: facilityId,
      };
      // console.log(postValues, "calim postValues");
      // try {
      //   dispatch(newClaimAction(postValues));
      // } catch (error) {
      //   throw error;
      // }
      // action.resetForm();
    },
  });

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
          {tabValue === 0 && (
            <ClaimInfo
              formik={formik}
              setClaimIds={setClaimIds}
              setFacilityId={setFacilityId}
            />
          )}
          {tabValue === 1 && <ClaimCharges formik={formik} />}
        </Box>
      </form>
    </Box>
  );
};

export default NewClaim;