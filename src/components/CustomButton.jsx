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
    color: "#FFF",
    width:'100px',
    margin: margin,
    backgroundColor: "#2F78EE",
    fontSize: ".8rem",
    fontWeight: "500",
    letterSpacing: "1.24px",
    wordSpacing: "3px",
    margin:"10px",
    textTransform:"inherit",
    "&:hover": {
      backgroundColor: "#2F78EE",
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
