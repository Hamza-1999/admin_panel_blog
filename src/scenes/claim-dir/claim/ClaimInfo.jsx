import { ExpandMore, Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
  fabClasses,
} from "@mui/material";
import React from "react";
import CustomSelectBox from "../../../components/CustomSelectBox";
import CustomSearchField from "../../../components/CustomSearchField";
import CustomField from "../../../components/CustomField";
import { useState } from "react";
import CustomModal from "../../../components/CustomModal";
import ClaimModData from "./ClaimModData";
import path from "../../../config/apiUrl";
import { getData } from "../../../config/axiosFunctions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Facility from "../../custom-setup/facility/Facility";
import BillingProvider from "../../custom-setup/billing-provider/BillingProvider";
import RenderingProvider from "../../custom-setup/rendering-provider/RenderingProvider";
import InsuredParty from "../../custom-setup/insured-party/InsuredParty";

const ClaimInfo = ({ formik, setClaimIds, setFacilityId }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [openPatientModal, setOpenPatientModal] = useState(false);
  const [openFacilityModal, setOpenFacilityModal] = useState(false);
  const [openInsuredParty, setOpenInsuredParty] = useState(false);
  const [openBillingProviderMod, setOpenBillingProviderMod] = useState(false);
  const [openRenderingProviderMod, setOpenRenderingProviderMod] =
    useState(false);
  const [frequencyOpt, setFrequencyOpt] = useState([]);
  const [policyTypeOpt, setPolicyTypeOpt] = useState([]);
  const dispatch = useDispatch();

  const handleAccordionChange = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  // Define data fetching URLs
  const dataFetchUrls = {
    frequencyType: `${path}/ct-claimFrequency`,
    policyType: `${path}/ct-policyType`,
  };

  // Define a reusable function to fetch data for a given URL
  const fetchDataOptions = async (url, setter) => {
    try {
      const response = await getData(url);
      setter(response.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataOptions(dataFetchUrls.frequencyType, setFrequencyOpt);
    fetchDataOptions(dataFetchUrls.policyType, setPolicyTypeOpt);
  }, [dispatch]);
  return (
    <>
      {/* patient modal */}
      <CustomModal
        open={openPatientModal}
        handleClose={() => setOpenPatientModal(false)}
      >
        <ClaimModData
          setClaimIds={setClaimIds}
          handleClose={() => setOpenPatientModal(false)}
          setValues={formik.setValues}
          setFieldValue={formik.setFieldValue}
          formik={formik}
        />
      </CustomModal>
      {/* facility modal */}
      <CustomModal
        open={openFacilityModal}
        handleClose={() => setOpenFacilityModal(false)}
      >
        <Facility
          handleClose={() => setOpenFacilityModal(false)}
          setFacilityId={setFacilityId}
          setFieldValue={formik.setFieldValue}
        />
      </CustomModal>
      {/* billing provider */}
      <CustomModal
        open={openBillingProviderMod}
        handleClose={() => setOpenBillingProviderMod(false)}
      >
        <BillingProvider
          setClaimIds={setClaimIds}
          handleClose={() => setOpenBillingProviderMod(false)}
          setValues={formik.setValues}
        />
      </CustomModal>
      {/* rendering provider */}
      <CustomModal
        open={openRenderingProviderMod}
        handleClose={() => setOpenRenderingProviderMod(false)}
      >
        <RenderingProvider
          setClaimIds={setClaimIds}
          handleClose={() => setOpenRenderingProviderMod(false)}
          setValues={formik.setValues}
        />
      </CustomModal>
      {/* Insurance modal */}
      <CustomModal
        open={openInsuredParty}
        handleClose={() => setOpenInsuredParty(false)}
      >
        <InsuredParty
          setClaimIds={setClaimIds}
          handleClose={() => setOpenInsuredParty(false)}
          setValues={formik.setValues}
        />
      </CustomModal>
      <Box
        display="flex"
        sx={{ width: { xs: "95%", sm: "75%", md: "50%" } }}
        flexDirection="column"
        gap={"20px"}
      >
        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
            alignItems: "flex-end",
          }}
        >
          <FormControl>
            <label>Claim#</label>
            <TextField
              size="small"
              type="text"
              fullWidth
              variant="filled"
              disabled
              label="#New"
            />
          </FormControl>

          <CustomField
            type="number"
            value={formik.values.referenceNumber || ""}
            handleChange={formik.handleChange}
            name="referenceNumber"
            handleBlur={formik.handleBlur}
            label="Reference #"
          />

          <CustomSelectBox
            value={formik.values.claimFrequency}
            name="claimFrequency"
            dropdownOptions={frequencyOpt?.map((opt) => ({
              value: opt.claimFrequencyName,
              id: opt.claimFrequencyId,
            }))}
            label="Frequncy Type"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
        </Box>

        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(1, minmax(0, 1fr))",
            },
          }}
        >
          <CustomSearchField
            label="Patient"
            type="text"
            handleModalOpen={() => setOpenPatientModal(true)}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            fieldVal={formik.values.patientName}
            name="patientName"
          />
        </Box>
        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(1, minmax(0, 1fr))",
            },
          }}
        >
          <CustomSearchField
            label="Biling Provider"
            type="text"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            fieldVal={formik.values.billingProviderName}
            name="billingProviderName"
            handleModalOpen={() => setOpenBillingProviderMod(true)}
          />
        </Box>
        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(1, minmax(0, 1fr))",
            },
          }}
        >
          <CustomSearchField
            label="Rendering Provider"
            type="text"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            fieldVal={formik.values.renderingProviderName}
            name="renderingProviderName"
            handleModalOpen={() => setOpenRenderingProviderMod(true)}
          />
        </Box>
        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(1, minmax(0, 1fr))",
            },
          }}
        >
          <CustomSearchField
            label="Facility"
            type="text"
            handleModalOpen={() => setOpenFacilityModal(true)}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            fieldVal={formik.values.facilityName}
            name="facilityName"
          />
        </Box>
        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(1, minmax(0, 1fr))",
            },
          }}
        >
          <CustomField
            label="Office Location"
            type="text"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.practiceAddress}
            name="practiceAddress"
          />
        </Box>

        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(1, minmax(0, 1fr))",
            },
          }}
        >
          <CustomSearchField
            label="Primary Insurance"
            type="text"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            fieldVal={formik.values.primaryPayerInsuranceName}
            name="primaryPayerInsuranceName"
            handleModalOpen={() => setOpenInsuredParty(true)}
          />
        </Box>

        <Accordion defaultExpanded={false} onChange={handleAccordionChange}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>
              {!isAccordionOpen
                ? "Show Primary Policy Details"
                : "Hide Primary Policy Details"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="number"
                label="Member ID"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.primaryPayerMemberId}
                name="primaryPayerMemberId"
              />

              <CustomSelectBox
                value={formik.values.primaryPayerPolicyType}
                name="primaryPayerPolicyType"
                dropdownOptions={policyTypeOpt?.map((opt) => ({
                  value: opt.policyType,
                  id: opt.policyTypeId,
                }))}
                label="Policy Type"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <CustomField
                type="number"
                label="Copay Due"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.primaryPayerCopayDue}
                name="primaryPayerCopayDue"
              />
            </Box>
            <Box
              display="grid"
              marginTop={"30px"}
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="number"
                label="Group Number"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.primaryPayerGroupId}
                name="primaryPayerGroupId"
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(1, minmax(0, 1fr))",
            },
          }}
        >
          <CustomSearchField type="text" label="Secondary Insurance" />
        </Box>
        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(1, minmax(0, 1fr))",
            },
          }}
        >
          <CustomSearchField type="text" label="Tertiary Insurance" />
        </Box>
      </Box>
    </>
  );
};

export default ClaimInfo;
