import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  handleClick,
  variant,
  margin,
  width,
  color,
  padding,
  isBlue,
  type
}) => {
  const buttonStyle = {
    color: isBlue ? "#fff" : "#000",
    margin: margin,
    backgroundColor: isBlue ? "#2F78EE " :  "#D3D3D3",
    fontSize: "1.1rem",
    fontWeight: "500",
    letterSpacing: "1.24px",
    wordSpacing: "3px",
    margin:"10px",
    textTransform:"inherit",
    padding: padding,
    "&:hover": {
      backgroundColor: "#2f7bee",
    },  
  };
  return (
    <Button
    type={type}
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
