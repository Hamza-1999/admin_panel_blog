import { Search } from "@mui/icons-material";
import './Custom-styling/ClaimSearchField.css';

import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";

const ClaimSearchField = ({
  type,
  label,
  handleModalOpen,
  fieldVal,
  handleChange,
  name,
  handleBlur,
}) => {
  return (
   
   
    <div>
      <label style={{ color: "#216FED",fontSize:"17px",fontWeight:'bold' }} htmlFor="">{label}</label>
      <TextField className="claimSearchField"
        size="small"
        fullWidth
        type={type}
        // label={label}
        value={fieldVal || ""}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{
          cursor: "default",
          // width: "400px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={handleModalOpen}>
                < Search/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ shrink: false }}
      />
    </div>
   


   
  );
};

export default ClaimSearchField;





