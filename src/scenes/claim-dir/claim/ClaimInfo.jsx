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

const ClaimInfo = ({ formik, setClaimIds }) => {
  console.log(formik.values, "vall90");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [openPatientModal, setOpenPatientModal] = useState(false);
  const [frequencyOpt, setFrequencyOpt] = useState([]);
  const dispatch = useDispatch();

  // formik.setValues(updatedValues);
  const handleAccordionChange = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  // Define data fetching URLs
  const dataFetchUrls = {
    frequencyType: `${path}/ct-claimFrequency`,
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
  }, [dispatch]);
  return (
    <>
      <CustomModal
        open={openPatientModal}
        handleClose={() => setOpenPatientModal(false)}
      >
        <ClaimModData
          setClaimIds={setClaimIds}
          handleClose={() => setOpenPatientModal(false)}
        />
      </CustomModal>
      <Box display="flex" flexDirection="column" gap={"20px"}>
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
            value={formik.values.referenceNumber}
            handleChange={formik.handleChange}
            name="referenceNumber"
            handleBlur={formik.handleBlur}
            isNumeric={true}
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
            handlePatientOpen={() => setOpenPatientModal(true)}
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
          <CustomSearchField label="Biling Provider" type="text" />
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
          <CustomSearchField label="Rendering Provider" type="text" />
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
          <CustomSearchField label="Facility" type="text" />
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
          <CustomSearchField label="Facility" type="text" />
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
          <CustomField label="Office Location" type="text" isNumeric={false} />
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
          <CustomSearchField label="Primary Insurance" type="text" />
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
              <CustomField type="text" label="Member ID" isNumeric={false} />
              <CustomField type="text" label="Policy Type" isNumeric={false} />
              <CustomField type="number" label="Copay Due" isNumeric={true} />
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
              <CustomField type="text" label="Group Number" isNumeric={false} />
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
