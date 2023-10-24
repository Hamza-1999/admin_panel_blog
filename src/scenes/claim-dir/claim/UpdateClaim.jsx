import { Box, Button, Stack, Tab, Tabs } from "@mui/material";
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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import path from "../../../config/apiUrl";
import {
  icdInitialCodes,
  icdInitialId,
  icdInitDescription,
  modInitCodes,
} from "./claimInitFunc";
import { MenuItem } from "react-pro-sidebar";
import { Expand, ExpandMore } from "@mui/icons-material";
import { Dropdown } from "react-bootstrap";
import { pdf } from "@react-pdf/renderer";
import CmsForm15 from "../../../components/pdfs/CmsForm15";
import AdditionInfo from "./AdditionInfo";
import AmbulanceInfo from "./AmbulanceInfo";
const UpdateClaim = () => {
  const { claimNumber } = useParams();
  const navigate = useNavigate();
  const [diagnosisData, setDiagnosisData] = useState([]);
  //   get claims
  const { getClaims, loading } = useSelector((state) => state.claim);
  const findClaim = getClaims.result?.find(
    (el) => el.claimNumber === Number(claimNumber)
  );

  console.log(
    findClaim?.claimChargesDto[0].modifierDetailDtos,
    "get modifier array"
  );

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
    facilityId: findClaim?.facilityId || null,
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
      `${findClaim?.renderingProviderFirstName} ${findClaim?.renderingProviderLastName} (${findClaim?.renderingProviderSequence})` ||
      "",
    billingProviderName:
      `${findClaim?.billingProviderFirstName} ${findClaim?.billingProviderLastName} (${findClaim?.billingProviderSequence})` ||
      "",
    supervisingProviderName: "",
    practiceAddress: findClaim?.practiceAddress || "",
    practiceSequenceNo: findClaim?.practiceSequenceNo || null,
    primaryPayerInsuranceName:
      `${findClaim?.primaryPayerInsuranceName} (${findClaim?.payerSequenceNo})` ||
      "",
    primaryPayerMemberId: findClaim?.primaryPayerMemberId || null,
    primaryPayerGroupId: findClaim?.primaryPayerGroupId || null,
    primaryPayerPolicyType: findClaim?.primaryPayerPolicyType || "",
    primaryPayerCopayDue: findClaim?.primaryPayerCopayDue || null,
    payerSequenceNo: findClaim?.payerSequenceNo || null,
    claimFrequency: findClaim?.claimFrequency || "",
    referenceNumber: findClaim?.referenceNumber,
    facilityName:
      `${findClaim?.facilityName} (${findClaim?.facilitySequence})` || "",
    // calling icd initial ids function here
    ...icdInitialId("icD_", findClaim?.icD_DiagnosisDetailDto),
    // calling icd initial code function here
    ...icdInitialCodes("icD_Code_", findClaim?.icD_DiagnosisDetailDto),
    // calling icd initial description function here
    ...icdInitDescription(
      "icd_Description_",
      findClaim?.icD_DiagnosisDetailDto
    ),
    claimType: "Professional",
    // calling mod code function here
  };

  const formik = useFormik({
    initialValues: updateClaimInitVals,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values, "claimvals999");
      const updateValues = {
        ...values,
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
        claimChargesUpdatedDto: claimChargesDto,
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
      action.resetForm();
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

  // handle cancel
  const handleCancel = () => {
    const conform = window.confirm("Are you sure you want to cancel?");
    if (conform) {
      formik.resetForm();
      navigate("/claims");
    }
  };

  console.log(findClaim, "allClaimsVal");

  // pdf preview handle
  const handlePreviewClick = async () => {
    const pdfBlob = await pdf(<CmsForm15 pdfData={findClaim} />).toBlob();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };
  return (
    <Box margin="20px" paddingBottom="10px">
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
          sx={
            {
              // order: { xs: 2, sm: 2, md: 1 },
            }
          }
        >
          <Tab label="Claim" value={0} />
          <Tab label="Charges" value={1} />
          <Tab label="Additional Info" value={2} />
          <Tab label="Ambulance Info" value={3} />
        </Tabs>

        {/* <Box sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
          <Button
            type="reset"
            color="error"
            variant="outlined"
            form="claimForm"
            sx={{
              marginRight: "15px",
            }}
            // onSubmit={formik.handleSubmit}
            onClick={handleCancel}
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
        </Box> */}
        <Box>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Print
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* <Dropdown.Item >Save and Print Claim</Dropdown.Item> */}
              <Dropdown.Item onClick={() => navigate("/pdf-view")}>
                Show Preview
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Box>
      </Stack>

      <form id="claimForm" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            padding: "15px",
            border: "1px solid lightgrey",
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
              findClaim={findClaim}
            />
          )}
          {tabValue === 2 && (
            <AdditionInfo
              formik={formik}
              // setClaimChargesDto={setClaimChargesDto}
              // claimChargesDto={claimChargesDto}
            />
          )}
          {tabValue === 3 && (
            <AmbulanceInfo
              formik={formik}
              // setClaimChargesDto={setClaimChargesDto}
              // claimChargesDto={claimChargesDto}
            />
          )}
        </Box>
      </form>

      <Box
        sx={{
          // order: { xs: 1, sm: 1, md: 2 }
          margin: "15px",
        }}
      >
        <Button
          type="reset"
          color="error"
          variant="outlined"
          form="claimForm"
          sx={{
            marginRight: "15px",
          }}
          // onSubmit={formik.handleSubmit}
          onClick={handleCancel}
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
    </Box>
  );
};

export default UpdateClaim;
