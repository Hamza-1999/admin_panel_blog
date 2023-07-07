import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const CustomSelectBox = ({
  value,
  onChange,
  selectLabel,
  selectOptions,
  key,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{selectLabel}</InputLabel>
      <Select value={value} label={selectLabel} onChange={handleChange}>
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
