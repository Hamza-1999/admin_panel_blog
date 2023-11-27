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
  error,
  touched,
  isRequired,
  isDecimal,
}) => {
  const formattedValue = isDecimal ? parseFloat(value).toFixed(2) : value;
  return (
    <div>
      <label className="customLabel">{label}</label>
      <input
        className="customField"
        type={type}
        value={formattedValue}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        // label={label}
        spellCheck={false}
        min={0}
        // InputLabelProps={{ shrink: true }}
      />
      {isRequired && error[name] && touched[name] ? (
        <div
          style={{
            color: "red",
            border: "1px solid red",
            fontSize: "1.3rem",
            marginTop: "8px",
          }}
        >
          {error[name]}
        </div>
      ) : null}
    </div>
  );
};

export default CustomField;
