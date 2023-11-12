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
  formik,
}) => {
  return (
    <div>
      <FormControl fullWidth>
        <label style={{ color: '#216FED',

fontFamily: 'Poppins',
fontSize: '19px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: 'normal'}} htmlFor="">
          {label}
        </label>
        <Select
          className="customSelectBox"
          value={value}
          name={name}
          type="number"
          // label={label}
          onChange={(e) => formik.setFieldValue(name, Number(e.target.value))}
          onBlur={handleBlur}
          native
          id="dropdowns"
          defaultValue=""
        >
          <option style={{ color: "lightgray !important" }}>Select</option>
          {dropdownOptions.map((opt) => {
            return (
              <>
                <option itemType="number" key={opt.id} value={opt.id}>
                  {opt.value}
                </option>
              </>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelectBox2;
