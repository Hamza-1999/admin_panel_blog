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
    <div>
      <label className="customLabel" htmlFor="">
        {dateLabel}
      </label>
      <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
        <DatePicker
          className="customDatePicker"
          sx={{
            width: "100%",
            background: "white",
            "& .MuiInputBase-input": {
              fontSize: "1.3rem",
              height: "1.2rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.5rem",
            },
          }}
          value={dateValue}
          onChange={handleDateChange}
          onBlur={handleDateBlur}
          renderInput={(params) => (
            <TextField
              {...params}
              value={dateValue}
              onChange={(e) => handleDateChange(e.target.value)}
              onBlur={handleDateBlur}
              children={String(params.children)}
            />
          )}
          inputFormat="MM/DD/YYYY"
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
