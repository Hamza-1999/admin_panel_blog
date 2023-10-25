import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import CustomSelectBox from "../../../components/CustomSelectBox";

const InsClaimCharges = () => {
  //  description from type
  const descriptionFrom = [
    {
      id: 1,
      type: "REVCODE",
    },
    {
      id: 2,
      type: "HCPCS",
    },
  ];

  return (
    <Box>
      <Typography>Charge Options</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Update patient Procedure Codr defaults"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Create a new charge panel from procedures(s)"
        />
      </FormGroup>

      <Box
        display="grid"
        gap="30px"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 1fr))",
          },
        }}
      >
        <CustomSelectBox
          // value={formik.values.studentStatusName}
          name="descriptionFrom"
          dropdownOptions={descriptionFrom?.map((opt) => ({
            value: opt.studentStatusName,
            id: opt.studentStatusId,
          }))}
          label="Use Description From"
          // handleChange={formik.handleChange}
          // handleBlur={formik.handleBlur}
        />
      </Box>
    </Box>
  );
};

export default InsClaimCharges;
