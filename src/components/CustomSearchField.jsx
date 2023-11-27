import { Search } from "@mui/icons-material";
import "./Custom-styling/CustomSearchField.css";

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
  isRequired,
  error,
  touched,
}) => {
  return (
    
    <>
      <div>
        <label className="customLabel" htmlFor="">
          {label}
        </label>

        <div style={{ position: "relative" }}>
          <input
            className="customSearchField"
            type={type}
            autoComplete="off"
            value={fieldVal || ""}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            spellCheck={false}
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
            }}
          >
            <IconButton onClick={handleModalOpen}>
              <Search style={{ color: "black", fontSize: "2rem" }} />
            </IconButton>
          </div>
        </div>
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
    </>
  );
};

export default CustomSearchField;
