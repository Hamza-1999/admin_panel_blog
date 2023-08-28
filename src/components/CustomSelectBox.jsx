import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomSelectBox = ({
  value,
  handleChange,
  handleBlur,
  label,
  dropdownOptions,
  name,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel shrink={true}> {label}</InputLabel>
      <Select
        value={value}
        name={name}
        type="text"
        label={label}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        native
        id="dropdowns"
        defaultValue=""
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
  );
};

export default CustomSelectBox;
