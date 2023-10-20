import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomField from "../../../components/CustomField";
import { getData } from "../../../config/axiosFunctions";
import path from "../../../config/apiUrl";
import CustomSelectBox from "../../../components/CustomSelectBox";

const AmbulanceInfo = ({ formik }) => {
  const [transportReason, setTransportReason] = useState([]);

  // Define data fetching URLs
  const dataFetchUrls = {
    transportReason: `${path}/ct-transportReason`,
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
    fetchDataOptions(dataFetchUrls.transportReason, setTransportReason);
  }, []);
  return (
    <Box margin="20px">
      <Stack direction="row" alignItems="center" marginTop="30px">
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{ width: "150px" }}
        >
          Ambulamce Claim
        </FormLabel>
        <RadioGroup
          sx={{
            marginLeft: "20px",
          }}
          row
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="Yes"
            control={
              <Radio
                checked={formik.values.ambulanceClaimType === "true"}
                onChange={() =>
                  formik.setFieldValue("ambulanceClaimType", "true")
                }
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="No"
            control={
              <Radio
                checked={formik.values.ambulanceClaimType === "false"}
                onChange={() =>
                  formik.setFieldValue("ambulanceClaimType", "false")
                }
              />
            }
            label="No"
          />
        </RadioGroup>
      </Stack>

      <Box
        display="grid"
        gap="20px"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(1, minmax(0, 1fr))",
            md: "repeat(1, minmax(0, 620px))",
          },
        }}
      >
        <CustomSelectBox
          name="transportReasonType"
          value={formik.values.transportReasonType}
          dropdownOptions={transportReason?.map((opt) => ({
            value: opt.transportReasonType,
            id: opt.transportReasonId,
          }))}
          label="Transport Reason"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <CustomField
          type="text"
          value={formik.values.roundTripReason}
          name="roundTripReason"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label="Round Trip Reason"
        />
        <CustomField
          label="Stretcher Reason"
          type="text"
          value={formik.values.stretcherReason}
          name="stretcherReason"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
      </Box>
      <Box
        display="grid"
        gap="20px"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(1, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 300px))",
          },
        }}
        marginTop="20px"
      >
        <CustomField
          label="Transport Miles"
          type="number"
          value={formik.values.transportMiles}
          name="transportMiles"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <CustomField
          label="Patient Weight"
          type="number"
          value={formik.values.ambPatientWeight}
          name="ambPatientWeight"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
      </Box>

      {/* pickup address */}
      <Accordion sx={{ marginTop: "20px" }}>
        <AccordionSummary>
          <Typography variant="h4">Pickup Address</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Box
            display="grid"
            gap="20px"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(1, minmax(0, 1fr))",
                md: "repeat(1, minmax(0, 620px))",
              },
            }}
          >
            <TextareaAutosize
              placeholder="Address"
              value={formik.values.pickupAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="pickupAddress"
              minRows={"4"}
            />
          </Box>
          <Box
            display="grid"
            gap="20px"
            marginTop="20px"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(1, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 200px))",
              },
            }}
          >
            <CustomField
              label="City"
              type="text"
              value={formik.values.pickupCity}
              name="pickupCity"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomField
              label="State"
              type="text"
              value={formik.values.pickupState}
              name="pickupState"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomField
              label="Zip Code"
              type="text"
              value={formik.values.pickupZipCode}
              name="pickupZipCode"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
          </Box>

          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="International" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      {/* dropoff address */}
      <Accordion>
        <AccordionSummary>
          <Typography variant="h4">Dropoff Address</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Box
            display="grid"
            gap="20px"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(1, minmax(0, 1fr))",
                md: "repeat(1, minmax(0, 620px))",
              },
            }}
          >
            <CustomField
              label="Name"
              type="text"
              value={formik.values.dropOffName}
              name="dropOffName"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <TextareaAutosize
              placeholder="Address"
              value={formik.values.dropOffAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="dropOffAddress"
              minRows={"4"}
            />
          </Box>
          <Box
            display="grid"
            gap="20px"
            marginTop="20px"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(1, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 200px))",
              },
            }}
          >
            <CustomField
              label="City"
              type="text"
              value={formik.values.dropOffCity}
              name="dropOffCity"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomField
              label="State"
              type="text"
              value={formik.values.dropOffState}
              name="dropOffState"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <CustomField
              label="Zip Code"
              type="text"
              value={formik.values.dropOffZipCode}
              name="dropOffZipCode"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* certification fields */}
      <Accordion>
        <AccordionSummary>
          <Typography variant="h4">Certification Fields</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Select up to 5</Typography>
          <Box
            display="grid"
            gap="10px"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(1, minmax(0, 1fr))",
                md: "repeat(2, minmax(0, 300px))",
              },
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Patient was admitted to a hospital"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Patient was moved by stretcher"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Patient was unconcious or in shock"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Patient was transported in an emergency situation"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Patient had to be physically restrained"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Patient had visible hemorrhaging"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Ambulance service was medically necessary"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Patient was confined to a bed or chair"
              />
            </FormGroup>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AmbulanceInfo;
