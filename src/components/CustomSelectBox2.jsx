import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomModal from "./CustomModal";
import { ArrowDropDownIcon } from "@mui/icons-material/ArrowDropDown";
import "./Custom-styling/CustomSelectBox.css";

const CustomSelectBox2 = ({
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
        <label style={{ color: "#216FED" }} htmlFor="">
          {label}
        </label>
        {/* <InputLabel shrink={true}> {label}</InputLabel> */}
        <Select
          className="customSelectBox"
          value={value}
          name={name}
          type="text"
          // label={label}
          onChange={handleChange}
          onBlur={handleBlur}
          native
          id="dropdowns"
          defaultValue=""
        >
          <option value="" style={{ color: "lightgray !important" }}>
            Select
          </option>
          {dropdownOptions.map((opt) => (
            <>
              <option key={opt.id} value={opt.id}>
                {opt.value}
              </option>
            </>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelectBox2;
