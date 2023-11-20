// import { TextField } from "@mui/material";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import React from "react";
// import "./Custom-styling/CustomDatePicker.css"
// import { styled } from '@mui/system';


// const CustomDatePicker = ({
//   dateValue,
//   handleDateChange,
//   handleDateBlur,
//   dateLabel,
// }) => {
//   return (
    
//     <div>
//       <label className="customLabel" htmlFor="">{dateLabel}</label>
//     <LocalizationProvider   dateAdapter={AdapterDayjs} locale="en">
      
//       <DatePicker 
//         sx={{ width: "100%",background:'white' }}
//         // label={dateLabel}
//         value={dateValue}
//         onChange={handleDateChange}
//         onBlur={handleDateBlur}
//         renderInput={(params) => <TextField  {...params} />}
//         inputFormat="MM/DD/YYYY"
//         PopperProps={{
//           style: { fontSize: '1.5rem' },
//         }}
//       />
//     </LocalizationProvider>
//     </div>






// chnage input text

// import { TextField } from "@mui/material";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import React from "react";
// import "./Custom-styling/CustomDatePicker.css";
// import { styled } from '@mui/system';

// const CustomDatePicker = ({
//   dateValue,
//   handleDateChange,
//   handleDateBlur,
//   dateLabel,
// }) => {
//   return (
//     <div>
//       <label className="customLabel" htmlFor="">{dateLabel}</label>
//       <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
//         <DatePicker 
//           sx={{ 
//             width: "100%",
//             background: 'white',
//             '& .MuiInputBase-input': {
//               fontSize: '1.5rem', // Change the font size of the input
//               fontFamily: 'YourCustomFont, sans-serif', // Change the font family
//             },
//             '& .MuiInputLabel-root': {
//               fontSize: '1.5rem', // Change the font size of the label
//               fontFamily: 'YourCustomFont, sans-serif', // Change the font family
//             },
//           }}
//           value={dateValue}
//           onChange={handleDateChange}
//           onBlur={handleDateBlur}
//           renderInput={(params) => <TextField {...params} />}
//           inputFormat="MM/DD/YYYY"
//           PopperProps={{
//             style: { fontSize: '1.5rem' },
//           }}
//         />
//       </LocalizationProvider>
//     </div>










import { IconButton, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import "./Custom-styling/CustomDatePicker.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled } from "@mui/system";


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
       
        <DatePicker className="customDatePicker"
          sx={{
            width: "100%",
            background: "white",
            
            "& .MuiInputBase-input": {
              fontSize: "1.3rem", 
              height:'1.2rem',
             
             
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.5rem", 
            },
          
          
           
          }}
          value={dateValue}
          onChange={handleDateChange}
          onBlur={handleDateBlur}
          renderInput={(params) => <TextField {...params} />}
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






