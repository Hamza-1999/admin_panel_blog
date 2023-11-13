import { Search } from "@mui/icons-material";
import './Custom-styling/CustomSearchField.css';

import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";

const CustomSearchField = ({
  type,
  label,
  handleModalOpen,
  fieldVal,
  handleChange,
  name,
  handleBlur,
}) => {
  return (
   
   
    <div>
      <label style={{ color: "#216FED",fontSize:"17px",fontWeight:'bold' }} htmlFor="">{label}</label>
      <TextField className="customSearchField"
        size="small"
        fullWidth
        variant="outlined"
        type={type}
        // label={label}
        value={fieldVal || ""}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{
          cursor: "default",
          // height: "70px"
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={handleModalOpen}>
                < Search/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ shrink: true }}
      />
    </div>




    // <div>
    //   <label style={{ color: "#216FED", fontSize: "17px", fontWeight: 'bold' }} htmlFor="">{label}</label>
    //   <TextField
    //     className="customSearchField"
    //     size="small"
    //     fullWidth
        
    //     type={type}
    //     value={fieldVal || ""}
    //     name={name}
    //     onChange={handleChange}
    //     onBlur={handleBlur}
    //     sx={{
    //       cursor: "default",
    //       height: "70px",
    //       '& .MuiOutlinedInput-root': {
    //         '& fieldset': {
    //           borderColor: '#yourBorderColor', // Add your desired border color
    //         },
    //         '&:hover fieldset': {
    //           borderColor: '#yourHoverBorderColor', // Add your desired hover border color
    //         },
    //         '&.Mui-focused fieldset': {
    //           borderColor: '#yourFocusedBorderColor', // Add your desired focused border color
    //         },
    //       },
    //     }}
    //     InputProps={{
    //       endAdornment: (
    //         <InputAdornment>
    //           <IconButton onClick={handleModalOpen}>
    //             <Search />
    //           </IconButton>
    //         </InputAdornment>
    //       ),
    //     }}
    //     InputLabelProps={{ shrink: true }}
    //   />
    // </div>
  );
}



export default CustomSearchField;





