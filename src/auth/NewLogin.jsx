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
   
  } from "@mui/material";



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const NewLogin = () => {
  return (
    <>
    
    <Stack 
   sx={{
    backgroundColor:"#EDF2F6",
    height:"100%" 
   }}>
      <Box  className="login" >
  
<form className='inner' 
sx={{
  maxWidth:{lg: "400px", xs: "100px"},

}}>
{/* <Box className="inner"
flexDirection={"column"}
maxWidth={400}
padding={3}
> */}

  <Typography style={{fontWeight:"bold",fontSize:"40px",textAlign:"center"}}>Login <span style={{fontWeight:"lighter",fontSize:"40px"}}>Here</span></Typography>
  <Typography variant='h6'
  color={"#216FED"}
  fontFamily={"Poppins"}
  marginTop={2}
  >Username</Typography>
        <TextField style={{width:"100%"}}
          id="outlined"
          defaultValue=""
        />

      <Typography variant='h6'
       color={"#216FED"}
       fontFamily={"Poppins"}
       marginTop={4} sx={{
        // color: {xs: "red", sm:"blue", md:"green"}
       }}>Password</Typography>
     <TextField style={{width:"100%",}}
          id="outlined"
          defaultValue=""
        />
        <br/>

    <Link href="#" underline="none"
     color={"#DE1D1D"}
     marginLeft={32}
     marginTop={4}
     fontFamily={"Poppins"}>
  {'Forget Password'}
</Link>
    <br/>
   
    {/* <Checkbox style={{color:"#216FED"}} {...label} /> */}
    <label  style={{fontSize:"14px",color:"#696969",fontFamily:"poppins"}} >
      <input type="checkbox" style={{color: "#216FED",height:"15px",width:"15px",marginLeft:"2px",marginTop:"5%"}} />
        <span style={{marginLeft:"5px"}}>Remember me</span>
    </label>
    <br/>
  
    <Button style={{color: "#FFF",marginTop:"20%",marginLeft:"22%",backgroundColor:"#0464FF",borderRadius:"10px", border:"1px solid #0464FF",height:"40px",width:"200px"}} variant="outlined" size="medium">
         Get start
        </Button>

{/* </Box> */}
{/* <Typography 
marginBottom={2}
marginLeft={118}>TechMatter PVT.LTD</Typography> */}

        </form>
      </Box>
  <Typography marginLeft={120}
  marginTop={7}>TechMatter PVT.LTD</Typography>
      </Stack>

     
      
    </>
  )
}

export default NewLogin;
