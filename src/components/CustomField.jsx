import { TextField } from "@mui/material";
import React from "react";

const CustomField = ({
  type,
  label,
  value,
  handleChange,
  handleBlur,
  name,
  isOutlined,
}) => {
  return (
    <div>
      <TextField
        size="small"
        fullWidth
        type={type}
        variant={isOutlined ? "outlined" : "filled"}
        value={value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        label={label}
        spellCheck={false}
        InputLabelProps={{ shrink: true }}
      />
    </div>
  );
};

export default CustomField;
