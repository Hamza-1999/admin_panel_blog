import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  handleClick,
  variant,
  margin,
  width,
  color,
}) => {
  const buttonStyle = {
    color: "fff",
    width: { width },
    margin: margin,
    backgroundColor: "#6870fa",
    fontSize: ".8rem",
    fontWeight: "500",
    letterSpacing: "1.24px",
    wordSpacing: "3px",
    "&:hover": {
      backgroundColor: "#6770fa",
    },
  };
  return (
    <Button
      variant={variant}
      onClick={handleClick}
      size="small"
      sx={buttonStyle}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
