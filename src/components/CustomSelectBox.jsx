import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const CustomSelectBox = ({
  value,
  handleChange,
  selectLabel,
  selectOptions,
  name,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{selectLabel}</InputLabel>
      <Select
        value={value}
        name={name}
        label={selectLabel}
        onChange={handleChange}
      >
        {selectOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelectBox;
