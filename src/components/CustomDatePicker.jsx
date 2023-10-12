import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

const CustomDatePicker = ({
  dateValue,
  handleDateChange,
  handleDateBlur,
  dateLabel,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
      <DatePicker
        label={dateLabel}
        value={dateValue}
        onChange={handleDateChange}
        onBlur={handleDateBlur}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="MM/DD/YYYY"
        // clearable
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
