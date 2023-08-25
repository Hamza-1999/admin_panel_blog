import { Search } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";

const CustomSearchField = ({ type, label, handlePatientOpen }) => {
  return (
    <FormControl fullWidth>
      <TextField
        size="small"
        fullWidth
        variant="filled"
        type={type}
        label={label}
        sx={{
          cursor: "default",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={handlePatientOpen}>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default CustomSearchField;
