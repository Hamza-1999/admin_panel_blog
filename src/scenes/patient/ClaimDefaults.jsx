import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomSearchField from "./../../components/CustomSearchField";
import CustomSelectBox2 from "../../components/CustomSelectBox2";
import CustomField from "../../components/CustomField";
import { ExpandMore } from "@mui/icons-material";


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
        <AccordionSummary className="accordianSummary"
         aria-controls="panel1a-content"
         id="panel1a-header"
         expandIcon={<ExpandMore  sx={{fontSize:"25px", color:"#216FED", border:"1px solid #216FED", borderRadius:"50px"}}/>}>
          <Typography variant='h3' fontWeight='600'>
          Assignment
            </Typography></AccordionSummary>
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
        <AccordionSummary className="accordianSummary"
         aria-controls="panel1a-content"
         id="panel1a-header"
         expandIcon={<ExpandMore  sx={{fontSize:"25px", color:"#216FED", border:"1px solid #216FED", borderRadius:"50px"}}/>}>
        <Typography variant='h3' fontWeight='600'>
         Default Codes
            </Typography>
            </AccordionSummary>
        <AccordionDetails>
        <Typography variant='h4' fontWeight='500'>
        Work later
            </Typography></AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ClaimDefaults;
