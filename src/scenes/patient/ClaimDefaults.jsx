import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomSearchField from "./../../components/CustomSearchField";
import CustomSelectBox2 from "../../components/CustomSelectBox2";
import CustomField from "../../components/CustomField";
import path from "../../config/apiUrl";
import { getData } from "../../config/axiosFunctions";
import { useEffect } from "react";
import { useState } from "react";
import CustomDatePicker from "../../components/CustomDatePicker";

const ClaimDefaults = ({ formik }) => {
  const [assignmentBenefits, setAssignmentBenefits] = useState([]);
  const [providerAssignment, setProviderAssignment] = useState([]);
  // Define data fetching URLs
  const dataFetchUrls = {
    assignmentBenefits: `${path}/ct-claimDefaultBenefit`,
    providerAssignment: `${path}/ct-claimDefaultAcceptance`,
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
    fetchDataOptions(dataFetchUrls.assignmentBenefits, setAssignmentBenefits);
    fetchDataOptions(dataFetchUrls.providerAssignment, setProviderAssignment);
  }, []);
  return (
    <Box display="flex" flexDirection="column" gap="20px">
      <Stack gap="20px">
        <FormControl>
          <CustomSearchField
            label="Default Provider"
            fieldVal={formik.values.defaultProviderId}
            name="defaultProviderId"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
        </FormControl>

        <FormControl>
          <CustomField
            label="Office Location"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.defaultOfficeLocation}
            name="defaultOfficeLocation"
          />
        </FormControl>

        <FormControl>
          <CustomSearchField
            label="Default Ordering Provider"
            fieldVal={formik.values.defaultOrderingProviderId}
            name="defaultOrderingProviderId"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
        </FormControl>

        <FormControl>
          <CustomSearchField
            label="Default Facility"
            fieldVal={formik.values.defaultFacilityId}
            name="defaultFacilityId"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
        </FormControl>

        <FormControl>
          <CustomSearchField
            label="Default Referring Provider"
            fieldVal={formik.values.defaultRenderingProviderId}
            name="defaultRenderingProviderId"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
        </FormControl>
      </Stack>

      <Accordion>
        <AccordionSummary>
          Assignment
          <Typography variant="h2" fontWeight="600">
            Assignment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column" gap="20px">
            <FormControl>
              <CustomSelectBox2
                label="Assignment of benefits"
                value={formik.values.assignmentOfBenefitId}
                name="assignmentOfBenefitId"
                formik={formik}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                dropdownOptions={assignmentBenefits?.map((opt) => ({
                  value: opt.claimDefaultBenefitType,
                  id: opt.claimDefaultBenefitId,
                }))}
              />
            </FormControl>
            <FormControl>
              <CustomSelectBox2
                label="Provider Accept Assignment"
                value={formik.values.providerAcceptanceId}
                name="providerAcceptanceId"
                formik={formik}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                dropdownOptions={providerAssignment?.map((opt) => ({
                  value: opt.claimDefaultAcceptanceType,
                  id: opt.claimDefaultAcceptanceId,
                }))}
              />
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* default codes */}
      <Accordion>
        <AccordionSummary>
          <Typography variant="h2" fontWeight="600">
            Default Codes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="grid"
            gap="20px"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
            }}
          >
            <CustomSearchField
              label="ICDA"
              fieldVal={formik.values.icD_A}
              name="icD_A"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDB"
              fieldVal={formik.values.icD_B}
              name="icD_B"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDC"
              fieldVal={formik.values.icD_C}
              name="icD_C"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDD"
              fieldVal={formik.values.icD_D}
              name="icD_D"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDE"
              fieldVal={formik.values.icD_E}
              name="icD_E"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDF"
              fieldVal={formik.values.icD_F}
              name="icD_F"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDG"
              fieldVal={formik.values.icD_G}
              name="icD_G"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDH"
              fieldVal={formik.values.icD_H}
              name="icD_H"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDI"
              fieldVal={formik.values.icD_I}
              name="icD_I"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDJ"
              fieldVal={formik.values.icD_J}
              name="icD_J"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDK"
              fieldVal={formik.values.icD_K}
              name="icD_K"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="ICDL"
              fieldVal={formik.values.icD_L}
              name="icD_L"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
          </Box>
          {/* cpts */}
          <Box
            display="grid"
            gap="20px"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
            }}
            marginTop="70px"
          >
            <CustomSearchField
              label="CPT #1"
              fieldVal={formik.values.cpT_1}
              name="cpT_1"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="CPT #2"
              fieldVal={formik.values.cpT_2}
              name="cpT_2"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="CPT #3"
              fieldVal={formik.values.cpT_3}
              name="cpT_3"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="CPT #4"
              fieldVal={formik.values.cpT_4}
              name="cpT_4"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="CPT #5"
              fieldVal={formik.values.cpT_5}
              name="cpT_5"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomSearchField
              label="CPT #6"
              fieldVal={formik.values.cpT_6}
              name="cpT_6"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* illness & accident information */}
      <Accordion>
        <AccordionSummary>
          <Typography variant="h2" fontWeight="600">
            Illness & Accident Information
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Stack gap="20px">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="International Address"
              />
            </FormGroup>

            <Stack gap="20px" flexDirection={{ xs: "column", sm: "row" }}>
              <CustomDatePicker
                dateLabel="Illnes/Accident Date"
                dateValue={formik.values.accidentDate}
                handleDateChange={(value) =>
                  formik.setFieldValue("accidentDate", value)
                }
                handleDateBlur={() =>
                  formik.setFieldTouched("accidentDate", true)
                }
              />
              <FormControl sx={{ marginLeft: "20px" }}>
                <CustomField
                  label="Accident State"
                  value={formik.values.accidentState}
                  name="accidentState"
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </FormControl>
            </Stack>

            <FormControl>
              <CustomSelectBox2
                label="Accident Type"
                formik={formik}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                dropdownOptions={[]}
                name="accidentTypeId"
                value={formik.values.accidentTypeId}
              />
            </FormControl>
          </Stack>
        </AccordionDetails>
      </Accordion>
      {/* other */}
      <Accordion>
        <AccordionSummary>
          <Typography variant="h2" fontWeight="600">
            Other
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap="20px">
            <CustomField
              type="number"
              label="Box 11b"
              value={formik.values.otherClaimId}
              name="otherClaimId"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomField
              type="number"
              label="Box 19"
              value={formik.values.additionalClaimInfo}
              name="additionalClaimInfo"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />

            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 1fr))",
                },
              }}
            >
              <CustomDatePicker
                dateLabel="Admission Date"
                dateValue={formik.values.admissionDate}
                handleDateChange={(value) =>
                  formik.setFieldValue("admissionDate", value)
                }
                handleDateBlur={() =>
                  formik.setFieldTouched("admissionDate", true)
                }
              />

              <CustomSelectBox2
                dropdownOptions={[]}
                label="Admission Hour"
                name="admissionHourId"
                value={formik.values.admissionHourId}
                handleBlur={formik.handleBlur}
                formik={formik}
                handleChange={formik.handleChange}
              />

              <CustomDatePicker
                dateLabel="Last Menstrual Date"
                dateValue={formik.values.lastMenstrualDate}
                handleDateChange={(value) =>
                  formik.setFieldValue("lastMenstrualDate", value)
                }
                handleDateBlur={() =>
                  formik.setFieldTouched("lastMenstrualDate", true)
                }
              />

              <CustomDatePicker
                dateLabel="Initial Treatment Date"
                dateValue={formik.values.initialTreatmentDate}
                handleDateChange={(value) =>
                  formik.setFieldValue("initialTreatmentDate", value)
                }
                handleDateBlur={() =>
                  formik.setFieldTouched("initialTreatmentDate", true)
                }
              />
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ClaimDefaults;
