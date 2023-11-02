import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomModal from "./CustomModal";

import './Custom-styling/CustomSelectBox.css';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";



const CustomSelectBox = ({
  value,
  handleChange,
  handleBlur,
  label,
  dropdownOptions,
  name,
}) => {
  return (
    <div >
    <FormControl fullWidth>
      <label style={{color:"#216FED"}} htmlFor="">{label}</label>
      {/* <InputLabel shrink={true}> {label}</InputLabel> */}
      <Select className="customSelectBox"
        value={value}
        name={name}
        type="text"
        // label={label}
        onChange={handleChange}
        onBlur={handleBlur}
       
        native
        id="dropdowns"
        defaultValue=""
        // InputProps={{
        //   endAdornment: (
        //     <ArrowDropDownIcon style={{ color: "#216FED" }} />
        //   ),
        // }}
      >
        <option value="0" style={{ color: "lightgray !important" }}>
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
