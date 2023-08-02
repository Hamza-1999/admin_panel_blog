import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@emotion/react";

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
      {!value && <InputLabel>{label}</InputLabel>}
      <Select
        value={value}
        name={name}
        label={label}
        onChange={handleChange}
        onBlur={handleBlur}
        native
        defaultValue=""
      >
        <option aria-label="None" value="" />
        {dropdownOptions.map((opt) => (
          <option key={opt.id} value={opt.value}>
            {opt.value}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelectBox;
