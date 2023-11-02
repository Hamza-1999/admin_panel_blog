import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import "./Custom-styling/CustomDatePicker.css";


const CustomDatePicker = ({
  dateValue,
  handleDateChange,
  handleDateBlur,
  dateLabel,
}) => {
  return (
    
    
    <LocalizationProvider   dateAdapter={AdapterDayjs} locale="en">
      <DatePicker 
        sx={{ width: "100%" }}
        label={dateLabel}
        value={dateValue}
        onChange={handleDateChange}
        onBlur={handleDateBlur}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="MM/DD/YYYY"
        
      />
    </LocalizationProvider>
  
    
  );
};

export default CustomDatePicker;
