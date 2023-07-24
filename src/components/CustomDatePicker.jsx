import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function CustomDatePicker({ labelText, value, handleChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker value={value} label={labelText} onChange={handleChange} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
