import { TextField } from "@mui/material";
import React from "react";
import "./Custom-styling/CustomField.css";
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
      <label className="customLabel">{label}</label>
      <input
        className="customField"
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        // label={label}
        spellCheck={false}
        min={0}
        // InputLabelProps={{ shrink: true }}
      />
    </div>
  );
};

export default CustomField;
