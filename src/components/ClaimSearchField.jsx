import { Search } from "@mui/icons-material";
import './Custom-styling/CustomSearchField.css';

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
      <TextField className="customSearchField"
        size="small"
        fullWidth
        variant="outlined"
        type={type}
        // label={label}
        value={fieldVal || ""}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{
          cursor: "default",
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
        InputLabelProps={{ shrink: true }}
      />
    </div>
   


   
  );
};

export default ClaimSearchField;





