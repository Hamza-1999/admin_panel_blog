import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomModal from "./CustomModal";

import './Custom-styling/CustomSelectBox.css';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Input } from "@mui/material";
const CustomSelectBox = ({
  value,
  handleChange,
  handleBlur,
  label,
  dropdownOptions,
  name,
}) => {
  return (
    <div>
    <FormControl fullWidth>
      <label className="customLabel" htmlFor="">{label}</label>
      <Select className="customSelectBox"
      
        value={value}
        name={name}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        native
        id="dropdowns"
        defaultValue=""
        
      >
        <option value="0" style={{ color: "lightgray !important"}}>
          Select
        </option>
        {dropdownOptions.map((opt) => (
          <>
            <option key={opt.id} value={opt.value}>
              {opt.value}
            </option>
          </>
        ))}
      </Select>
    </FormControl>
    </div>
  );
};
export default CustomSelectBox;
