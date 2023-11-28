import React from 'react'
import "./newlogin.css";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    Stack,
    TextField,
    Typography,
    Container,
    Link,
    ImageList,
   
  } from "@mui/material";
import { useNavigate } from 'react-router-dom';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const NewLogin = () => {
  const navigate= useNavigate()
  return (
    <>

<Box sx={{
  backgroundColor: "#EDF2F6",
  height: {xs:"auto", sm:"auto", md:"100vh"},
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position:"relative"
}}>
  
  <Box className='background' sx={{
    width: "100%",
    height: "400px",
  }}>
    <Box sx={{
      width:{xs:"100%", sm:"100%", md:"400px"},
      position:"absolute",
      top:{xs:"150px", sm:"150px",md:"-37px"},
      right:{xs:"0", sm:"0", md:"70px"},
      height:"100%",
    }}>

    <Box component={"form"} className='inner' sx={{
       borderRadius: {xs: "38px 38px 0px 0px", sm: "10px", md:"10px"}
    }}>

      <Typography style={{ fontWeight: "bold", fontSize: "40px", textAlign: "center" }}>
        Login <span style={{ fontWeight: "lighter", fontSize: "40px" }}>Here</span>
      </Typography>

      <Typography variant='h6' fontWeight='600' color="#216FED" fontFamily="Radio Canada" marginTop={2}>
        Username
      </Typography>
      <TextField style={{ width: "100%" }} id="outlined" defaultValue="" />

      <Typography variant='h6' fontWeight='600' color="#216FED" fontFamily='Radio Canada' marginTop={4}>
        Password
      </Typography>
      <TextField style={{ width: "100%" }} id="outlined" defaultValue="" />
      <br />

      <Link sx={{
        position: "absolute",
        top: {sm:"280px",xs:"280px"},
        // lg:1200,md:900,sm:600,xs:before 600
        left: {lg:"280px",md:"280px",sm:"500px",xs:"180px"}
      }} href="#" underline="none" color="#DE1D1D" fontFamily="Poppins">
        {'Forget Password'}
      </Link>
      <br />

      <label style={{ fontSize: "14px", color: "#696969", fontFamily: "poppins" }}>
        <input type="checkbox" style={{ color: "#216FED", height: "15px", width: "15px", marginLeft: "2px", marginTop: "5%" }} />
        <span style={{ marginLeft: "5px" }}>Remember me</span>
      </label>
      <br />

      <Button sx={{
        color: "#FFF",
        position:'absolute',
        top:"400px",
        left:{xs:"80px",lg:"100px"},
        backgroundColor: "#0464FF",
        borderRadius: "10px",
        border: "1px solid #0464FF",
        width:"48%",
        fontFamily:'Radio Canada',
        fontSize:{xs:'1rem',lg:'1.3rem'},
      }} variant="outlined" size="medium"  onClick={()=>navigate("/dashboard")}>
        Get started
      </Button>
      <Typography 
  sx={{
    position:"absolute",
    top:"93%",
    left:{lg:"37%",sm:"45%",md:"39%" ,xs:"37%"}
  }} >TechMatter PVT.LTD</Typography>
    </Box>
    </Box>
  </Box>     
</Box>

<Box className="triangle-container">
<Box className="triangle">

  </Box>
  </Box>





      

      
    </>
  )
}

export default NewLogin;
