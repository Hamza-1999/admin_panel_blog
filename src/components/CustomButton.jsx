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
      backgroundColor: isBlue ? "#2fa8ee": '#b8b4b4'
      
    },



    
   
    // import React, { useState } from 'react';

    // const YourComponent = () => {
    //   const [isHovered, setIsHovered] = useState(false);
    //   const isBlue = /* your condition for blue button */;
    //   const isCancel = /* your condition for cancel button */;
    //   const margin = /* your margin value */;
    //   const padding = /* your padding value */;
    
    //   const buttonStyle = {
    //     color: isBlue ? '#fff' : '#000',
    //     margin: margin,
    //     backgroundColor: isBlue ? '#2F78EE' : (isCancel ? '#FF0000' : '#D3D3D3'), // Red for cancel
    //     fontSize: '1.1rem',
    //     fontWeight: '500',
    //     letterSpacing: '1.24px',
    //     wordSpacing: '3px',
    //     margin: '10px',
    //     textTransform: 'inherit',
    //     padding: padding,
    //     ...(isHovered && {
    //       backgroundColor: isBlue ? '#2fa8ee' : (isCancel ? '#FF5555' : '#a9a9a9'), // Light red for cancel on hover
    //     }),
    //   };
    
    //   return (
    //     <button
    //       style={buttonStyle}
    //       onMouseEnter={() => setIsHovered(true)}
    //       onMouseLeave={() => setIsHovered(false)}
    //     >
    //       Your Button
    //     </button>
    //   );
    // };
    
    // export default YourComponent;

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
