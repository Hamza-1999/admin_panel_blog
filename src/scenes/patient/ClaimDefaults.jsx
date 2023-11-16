import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  Stack,
} from "@mui/material";
import React from "react";
import CustomSearchField from "./../../components/CustomSearchField";
import CustomSelectBox2 from "../../components/CustomSelectBox2";
import CustomField from "../../components/CustomField";

const ClaimDefaults = ({ formik }) => {
  return (
    <Box display="flex" flexDirection="column" gap="20px">
      <Stack gap="20px">
        <FormControl>
          <CustomSearchField label="Default Provider" />
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
          <CustomSearchField label="Default Ordering Provider" />
        </FormControl>

        <FormControl>
          <CustomSearchField label="Default Facility" />
        </FormControl>

        <FormControl>
          <CustomSearchField label="Default Referring Provider" />
        </FormControl>
      </Stack>

      <Accordion>
        <AccordionSummary>Assignment</AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column" gap="20px">
            <FormControl>
              <CustomSearchField label="Assignment of benefits" />
            </FormControl>
            <FormControl>
              <CustomSearchField label="Provider Accept Assignment" />
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* default codes */}
      <Accordion>
        <AccordionSummary>Default Codes</AccordionSummary>
        <AccordionDetails>Work later</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ClaimDefaults;