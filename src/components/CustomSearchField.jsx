import { Search } from "@mui/icons-material";
import './Custom-styling/CustomSearchField.css';

import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";

const CustomSearchField = ({
  type,
  label,
  handleModalOpen,
  fieldVal,
  handleChange,
  name,
  handleBlur,
}) => {
  return (
    <div className="customSearchField">
       <label style={{color:"#216FED"}} htmlFor="">{label}</label>
      <TextField
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

export default CustomSearchField;





