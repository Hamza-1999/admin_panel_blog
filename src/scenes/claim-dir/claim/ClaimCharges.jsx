import { Box, Paper } from "@mui/material";
import React from "react";
import CustomSearchField from "../../../components/CustomSearchField";
import CustomField from "../../../components/CustomField";

const ClaimCharges = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        display="grid"
        gap="30px"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr))",
          },
        }}
      >
        <CustomField type="text" label="ICD A" isNumeric={false} />
      </Box>
      <Box
        display="grid"
        gap="30px"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr))",
          },
        }}
      >
        <CustomSearchField type="text" label="ICD E" />
        <CustomSearchField type="text" label="ICD F" />
        <CustomSearchField type="text" label="ICD G" />
        <CustomSearchField type="text" label="ICD H" />
      </Box>
      <Box
        display="grid"
        gap="30px"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr))",
          },
        }}
      >
        <CustomSearchField type="text" label="ICD I" />
        <CustomSearchField type="text" label="ICD J" />
        <CustomSearchField type="text" label="ICD K" />
        <CustomSearchField type="text" label="ICD L" />
      </Box>
    </Paper>
  );
};

export default ClaimCharges;
