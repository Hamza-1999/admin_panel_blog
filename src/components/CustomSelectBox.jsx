import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const CustomSelectBox = ({
  values,
  handleChange,
  selectLabel,
  selectOptions,
  name,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{selectLabel}</InputLabel>
      <Select
        value={values}
        name={name}
        label={selectLabel}
        onChange={handleChange}
      >
        {selectOptions.map((el) => (
          <MenuItem key={el} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelectBox;
