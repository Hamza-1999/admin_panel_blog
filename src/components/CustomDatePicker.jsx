import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import "./Custom-styling/CustomDatePicker.css"


const CustomDatePicker = ({
  dateValue,
  handleDateChange,
  handleDateBlur,
  dateLabel,
}) => {
  return (
    
    <div>
      <label style={{ color: "#216FED", fontSize: "17px", fontWeight: 'bold' }} htmlFor="">{dateLabel}</label>
    <LocalizationProvider   dateAdapter={AdapterDayjs} locale="en">
      
      <DatePicker 
        sx={{ width: "100%" }}
        // label={dateLabel}
        value={dateValue}
        onChange={handleDateChange}
        onBlur={handleDateBlur}
        renderInput={(params) => <TextField  {...params} />}
        inputFormat="MM/DD/YYYY"
      />
    </LocalizationProvider>
    </div>


// {/* <div>
//   <label style={{ color: "#216FED", fontSize: "17px", fontWeight: 'bold' }} htmlFor="">{label}</label>

//   <div style={{ position: 'relative' }}>
//     <input
//       className="customSearchField"
//       type={type}
//       value={fieldVal || ""}
//       name={name}
//       onChange={handleChange}
//       onBlur={handleBlur}
//       style={{
//         width: '100%',
//         padding: '10px',
//         fontSize: '14px',
//         border: '1px solid #ced4da',
//         borderRadius: '4px',
//         boxSizing: 'border-box',
//         cursor: 'default',
//         marginTop:'5px'
//       }}
//     />

//     <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
//       <IconButton onClick={handleModalOpen}>
//         <Search style={{color:'black'}} />
//       </IconButton>
//     </div>
//   </div>
// </div>    */}
   
    
  );
};

export default CustomDatePicker;
