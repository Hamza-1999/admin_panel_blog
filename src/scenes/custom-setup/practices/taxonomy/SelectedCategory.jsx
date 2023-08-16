import { Box } from "@mui/material";
import React from "react";

const SelectedCategory = ({ selectedCategory, selectedCode }) => {
  return (
    <Box
      sx={{
        background: "lightgrey",
        margin: "20px  0",
        fontSize: "1.2rem",
        padding: "8px",
      }}
    >
      {selectedCode} &nbsp; &nbsp; {selectedCategory}
    </Box>
  );
};

export default SelectedCategory;
