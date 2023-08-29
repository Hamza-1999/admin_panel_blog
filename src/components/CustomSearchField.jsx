import { Search } from "@mui/icons-material";
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
    <div>
      <TextField
        size="small"
        fullWidth
        variant="filled"
        type={type}
        label={label}
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
                <Search />
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
