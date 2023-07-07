import { Box, Typography } from "@mui/material";
import React from "react";

const FormInfoHeading = ({ children }) => {
  return (
    <Box>
      <Typography variant="h4" component={"h2"}>
        {children}
      </Typography>
    </Box>
  );
};

export default FormInfoHeading;
