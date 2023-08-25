import { FormControl, TextField } from "@mui/material";
import React from "react";

const CustomField = ({
  type,
  label,
  isNumeric,
  value,
  handleChange,
  handleBlur,
  name,
}) => {
  return (
    <FormControl>
      <TextField
        size="small"
        fullWidth
        type={type}
        variant="filled"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        label={label}
        inputMode={isNumeric && "numeric"}
        spellCheck={false}
      />
    </FormControl>
  );
};

export default CustomField;
