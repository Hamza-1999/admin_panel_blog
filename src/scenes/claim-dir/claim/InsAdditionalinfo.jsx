import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomDatePicker from "../../../components/CustomDatePicker";
import CustomField from "../../../components/CustomField";
import CustomSelectBox from "../../../components/CustomSelectBox";
import CustomSelectBox2 from "../../../components/CustomSelectBox2";

const InsAdditionalinfo = ({ formik }) => {
  const types = [
    {
      id: 1,
      type: "One",
    },
    {
      id: 2,
      type: "Two",
    },
    {
      id: 3,
      type: "Three",
    },
  ];
  return (
    <>
      <Box margin="20px">
        <div>
          <Typography variant="h5" component={"p"}>
            Show Additional Information about each field
          </Typography>
          <FormControl
            sx={{
              margin: "20px 0",
            }}
          >
            <RadioGroup row name="row-radio-buttons-group">
              <FormControlLabel
                value={1}
                control={
                  <Radio
                    checked={formik.values.formType === "1"}
                    onChange={() => formik.setFieldValue("formType", "1")}
                  />
                }
                label="None"
              />
              <FormControlLabel
                value={2}
                control={
                  <Radio
                    checked={formik.values.formType === "2"}
                    onChange={() => formik.setFieldValue("formType", "2")}
                  />
                }
                label="ANSI Location (For Electronic Claims)"
              />
              <FormControlLabel
                value={3}
                control={
                  <Radio
                    checked={formik.values.formType === "3"}
                    onChange={() => formik.setFieldValue("formType", "3")}
                  />
                }
                label="CMS 1500 (02-12) Box Numbers (For Printed Claims)"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {/* Claim Information */}
        <Accordion>
          <AccordionSummary>
            <Typography>Claim Information</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 450px))",
                },
              }}
            >
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomDatePicker
                    dateLabel="Statement Covers From Date"
                    dateValue={formik.values.statementCoversFromDate}
                    handleDateChange={(value) =>
                      formik.setFieldValue("statementCoversFromDate", value)
                    }
                    handleDateBlur={() =>
                      formik.setFieldTouched("statementCoversFromDate", true)
                    }
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 DTP~435"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomDatePicker
                    dateLabel="Statement Covers To Date"
                    dateValue={formik.values.statementCoversToDate}
                    handleDateChange={(value) =>
                      formik.setFieldValue("statementCoversToDate", value)
                    }
                    handleDateBlur={() =>
                      formik.setFieldTouched("statementCoversToDate", true)
                    }
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 DTP~435"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>

              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
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
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 DTP~435"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>

              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox2
                    name="admissionHourId"
                    value={formik.values.admissionHourId}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Admission Hour"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>

              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox2
                    name="admissionTypeId"
                    value={formik.values.admissionTypeId}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Admission Type"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
            </Box>

            {/* Admission Source */}
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(1, minmax(0, 920px))",
                },
              }}
            >
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox
                    name="admissionSourceId"
                    value={formik.values.admissionSourceId}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Admission Source"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
            </Box>

            {/* Discharge Hour */}
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 450px))",
                },
              }}
            >
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox
                    name="dischargeHourId"
                    value={formik.values.dischargeHourId}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Discharge Hour"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
            </Box>

            {/* patient status */}
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(1, minmax(0, 920))",
                },
              }}
            >
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox
                    name="patientStatusId"
                    value={formik.values.patientStatusId}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Patient Status"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  display={formik.values.formType === "1" && "none"}
                >
                  {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null}
                </Typography>
              </Stack>
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox
                    name="delayReasonCodeId"
                    value={formik.values.delayReasonCodeId}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Delay Reason Code"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
            </Box>

            {/* pps */}
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 450px))",
                },
              }}
            >
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomField
                    type="text"
                    label="PPS (Diagnosis Related Group)"
                    value={formik.values.pps}
                    name="pps"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>

                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "N/A*"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomField
                    type="text"
                    label="Patient Estimated Amount Due"
                    // value={formik.values.patientWeight}
                    name="patientWeight"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                  />
                </FormControl>

                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "N/A*"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
            </Box>

            {/* remarks */}
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(1, minmax(0, 920px))",
                },
              }}
            >
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomField
                    type="text"
                    // label="PPS (Diagnosis Related Group)"
                    // value={formik.values.patientWeight}
                    name="patientWeight"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                  />
                </FormControl>

                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "N/A*"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomField
                    type="text"
                    // label="PPS (Diagnosis Related Group)"
                    // value={formik.values.patientWeight}
                    name="patientWeight"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                  />
                </FormControl>

                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "N/A*"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomField
                    type="text"
                    // label="PPS (Diagnosis Related Group)"
                    // value={formik.values.patientWeight}
                    name="patientWeight"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                  />
                </FormControl>

                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "N/A*"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomField
                    type="text"
                    // label="PPS (Diagnosis Related Group)"
                    // value={formik.values.patientWeight}
                    name="patientWeight"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                  />
                </FormControl>

                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "N/A*"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* patient condition */}
        <Accordion>
          <AccordionSummary>
            <Typography>Patient Condition</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>Is Patient Condition Related to:</Typography>
            <Stack direction="row" alignItems="center" marginTop="30px">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ width: "100px" }}
              >
                Employement
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
                    //   checked={formik.values.isEmployment}
                    //   onChange={() =>
                    //     formik.setFieldValue("isEmployment", true)
                    //   }
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                    //   checked={!formik.values.isEmployment}
                    //   onChange={() =>
                    //     formik.setFieldValue("isEmployment", false)
                    //   }
                    />
                  }
                  label="No"
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-11-1 (EM)"
                    : formik.values.formType === "3"
                    ? "BOX 10a"
                    : ""} */}
                </Typography>
              </RadioGroup>
            </Stack>
            <Stack direction="row" alignItems="center" marginTop="15px">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ width: "100px" }}
              >
                Auto Accident
              </FormLabel>
              <RadioGroup
                sx={{
                  marginLeft: "20px",
                  // width: "150px",
                }}
                row
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                    //   checked={formik.values.isAutoAccident}
                    //   onChange={() =>
                    //     formik.setFieldValue("isAutoAccident", true)
                    //   }
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                    //   checked={!formik.values.isAutoAccident}
                    //   onChange={() =>
                    //     formik.setFieldValue("isAutoAccident", false)
                    //   }
                    />
                  }
                  label="No"
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-11-1 (AA)"
                    : formik.values.formType === "3"
                    ? "BOX 10b"
                    : ""} */}
                </Typography>
              </RadioGroup>
            </Stack>
            <Stack direction="row" alignItems="center" marginTop="15px">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ width: "100px" }}
              >
                Other Accident
              </FormLabel>
              <RadioGroup
                sx={{
                  marginLeft: "20px",
                  // width: "150px",
                }}
                row
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                    //   checked={formik.values.isOtherAccident}
                    //   onChange={() =>
                    //     formik.setFieldValue("isOtherAccident", true)
                    //   }
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                    //   checked={!formik.values.isOtherAccident}
                    //   onChange={() =>
                    //     formik.setFieldValue("isOtherAccident", false)
                    //   }
                    />
                  }
                  label="No"
                />
                <Typography
                  variant="h5"
                  component="p"
                  padding="10px"
                  textAlign="center"
                  bgcolor="lightgray"
                  height="100%"
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-11-1 (OA)"
                    : formik.values.formType === "3"
                    ? "BOX 10c"
                    : ""} */}
                </Typography>
              </RadioGroup>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Assignment of benefits */}
        <Accordion>
          <AccordionSummary>Assignment of Benefits</AccordionSummary>

          <AccordionDetails>
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 450px))",
                },
              }}
            >
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox
                    name="reasonDelayCode"
                    // value={formik.values.reasonDelayCode}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Release Of Info"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox
                    name="reasonDelayCode"
                    // value={formik.values.reasonDelayCode}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Assignment of Benefits"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>

              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox
                    name="reasonDelayCode"
                    // value={formik.values.reasonDelayCode}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Provider Accept Assignment"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* EPSDT Certifications */}
        <Accordion>
          <AccordionSummary>
            <Typography>EPSDT Certifications</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>Select up to 3 if applicable</Typography>
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
                  label="No referral given"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Patient refused referral"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Patient is currently under treatment"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Patient is reffered to another provider"
                />
              </FormGroup>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* other reference information */}
        <Accordion>
          <AccordionSummary>
            <Typography>Other Reference Information</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box
              display="grid"
              gap="20px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 450px))",
                },
              }}
            >
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox
                    name="documentationMethod"
                    // value={formik.values.documentationMethod}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Documentation Method"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 PWK-2"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>

              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomSelectBox
                    name="documentationType"
                    // value={formik.values.documentationType}
                    dropdownOptions={types?.map((opt) => ({
                      value: opt.type,
                      id: opt.id,
                    }))}
                    label="Documentation Type"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 PWK-1"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
            </Box>

            <Box
              display="grid"
              gap="20px"
              sx={{
                marginTop: "20px",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(1, minmax(0, 920px))",
                },
              }}
            >
              <Stack
                className="infoCodeContainer"
                sx={{
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <FormControl fullWidth>
                  <CustomField
                    type="text"
                    label="Demonstration Project"
                    // value={formik.values.demonstrationProject}
                    name="demonstrationProject"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                  />
                </FormControl>
                <Typography
                  variant="h6"
                  component="span"
                  className="ft_content"
                  width={{ xs: "100%", sm: "30%", md: "38%" }}
                  //   display={formik.values.formType === "1" && "none"}
                >
                  {/* {formik.values.formType === "2"
                    ? "2300 REF~P4"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
                </Typography>
              </Stack>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default InsAdditionalinfo;
