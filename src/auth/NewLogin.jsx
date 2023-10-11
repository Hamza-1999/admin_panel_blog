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



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const NewLogin = () => {
  return (
    <>
    
     {/* <Box className='background'
   sx={{
    backgroundColor:"#EDF2F6",
    height:"100%", 
    width:"100%",
    
   
   }}>
   
   
      <Box  className="login" >
<Box

sx={{
width:"400px",
height:"520px",
position:"relative",
 left:"810px",
 top:"-20px",

}}
> 

<form className='inner'>
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
        color: {xs: "red", sm:"blue", md:"green"}
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
   

    <label  style={{fontSize:"14px",color:"#696969",fontFamily:"poppins"}} >
      <input type="checkbox" style={{color: "#216FED",height:"15px",width:"15px",marginLeft:"2px",marginTop:"5%"}} />
        <span style={{marginLeft:"5px"}}>Remember me</span>
    </label>
    <br/>
  
    <Button style={{color: "#FFF",marginTop:"20%",marginLeft:"22%",backgroundColor:"#0464FF",borderRadius:"10px", border:"1px solid #0464FF",height:"40px",width:"200px"}} variant="outlined" size="medium">
         Get start
        </Button>

        </form>
      </Box>
      </Box>
  <Typography marginLeft={120}
  marginTop={7}>TechMatter PVT.LTD</Typography>
      </Box>  */}





{/* <Box  sx={{
  backgroundColor: "#EDF2F6",
  height: "100vh",
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  flexDirection: 'column', 
}}>

  
<Box className='background' sx={{
    width: "100%",
}}>
  <Box className="login" sx={{
   
    maxWidth: "400px", 
    position: "relative",
    left:"40%",
    border:"2px solid green"
    
  }}>
    <form className='inner'>
      <Typography style={{ fontWeight: "bold", fontSize: "40px", textAlign: "center" }}>
        Login <span style={{ fontWeight: "lighter", fontSize: "40px" }}>Here</span>
      </Typography>

      <Typography variant='h6' color="#216FED" fontFamily="Poppins" marginTop={2}>
        Username
      </Typography>
      <TextField style={{ width: "100%" }} id="outlined" defaultValue="" />

      <Typography variant='h6' color="#216FED" fontFamily="Poppins" marginTop={4}>
        Password
      </Typography>
      <TextField style={{ width: "100%" }} id="outlined" defaultValue="" />
      <br />

      <Link href="#" underline="none" color="#DE1D1D" marginLeft={2} marginTop={2} fontFamily="Poppins">
        {'Forget Password'}
      </Link>
      <br />

      <label style={{ fontSize: "14px", color: "#696969", fontFamily: "poppins" }}>
        <input type="checkbox" style={{ color: "#216FED", height: "15px", width: "15px", marginLeft: "2px", marginTop: "5%" }} />
        <span style={{ marginLeft: "5px" }}>Remember me</span>
      </label>
      <br />

      <Button style={{
        color: "#FFF",
        marginTop: "4%",
        backgroundColor: "#0464FF",
        borderRadius: "10px",
        border: "1px solid #0464FF",
        width: "100%", 
      }} variant="outlined" size="medium">
        Get start
      </Button>
    </form>
  </Box>
  </Box>

  <Typography marginTop={3}>TechMatter PVT.LTD</Typography>
</Box> */}

{/* <Box sx={{
  backgroundColor: "#EDF2F6",
  height: "100vh",
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
 
}}>
  <Box className='background' sx={{
    width: "100%",
    height:"70%",
}}>

      <form className='inner'>
        <Typography style={{ fontWeight: "bold", fontSize: "40px", textAlign: "center" }}>
          Login <span style={{ fontWeight: "lighter", fontSize: "40px" }}>Here</span>
        </Typography>

        <Typography variant='h6' color="#216FED" fontFamily="Poppins" marginTop={2}>
          Username
        </Typography>
        <TextField style={{ width: "100%" }} id="outlined" defaultValue="" />

        <Typography variant='h6' color="#216FED" fontFamily="Poppins" marginTop={4}>
          Password
        </Typography>
        <TextField style={{ width: "100%" }} id="outlined" defaultValue="" />
        <br />

        <Link sx={{
          position:"relative",
          top:"10px",
          right:"0"
        }}href="#" underline="none" color="#DE1D1D" fontFamily="Poppins">
          {'Forget Password'}
        </Link>
        <br />

        <label style={{ fontSize: "14px", color: "#696969", fontFamily: "poppins" }}>
          <input type="checkbox" style={{ color: "#216FED", height: "15px", width: "15px", marginLeft: "2px", marginTop: "5%" }} />
          <span style={{ marginLeft: "5px" }}>Remember me</span>
        </label>
        <br />

        <Button style={{
          color: "#FFF",
          marginTop: "4%",
          backgroundColor: "#0464FF",
          borderRadius: "10px",
          border: "1px solid #0464FF",
          width: "100%",
        }} variant="outlined" size="medium">
          Get start
        </Button>
      </form>
   
  </Box>

  <Typography marginTop={3}>TechMatter PVT.LTD</Typography>
</Box> */}


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
    height: "300px",
  }}>
    <Box sx={{
      width:{xs:"100%", sm:"100%", md:"400px"},
      position:"absolute",
      top:{xs:"150px", sm:"150px", md:"0"},
      right:{xs:"0", sm:"0", md:"70px"}
    }}>

    <form className='inner'>
      <Typography style={{ fontWeight: "bold", fontSize: "40px", textAlign: "center" }}>
        Login <span style={{ fontWeight: "lighter", fontSize: "40px" }}>Here</span>
      </Typography>

      <Typography variant='h6' color="#216FED" fontFamily="Poppins" marginTop={2}>
        Username
      </Typography>
      <TextField style={{ width: "100%" }} id="outlined" defaultValue="" />

      <Typography variant='h6' color="#216FED" fontFamily="Poppins" marginTop={4}>
        Password
      </Typography>
      <TextField style={{ width: "100%" }} id="outlined" defaultValue="" />
      <br />

      <Link sx={{
        position: "relative",
        top: "10px",
        right: "0",
      }} href="#" underline="none" color="#DE1D1D" fontFamily="Poppins">
        {'Forget Password'}
      </Link>
      <br />

      <label style={{ fontSize: "14px", color: "#696969", fontFamily: "poppins" }}>
        <input type="checkbox" style={{ color: "#216FED", height: "15px", width: "15px", marginLeft: "2px", marginTop: "5%" }} />
        <span style={{ marginLeft: "5px" }}>Remember me</span>
      </label>
      <br />

      <Button style={{
        color: "#FFF",
        marginTop: "4%",
        backgroundColor: "#0464FF",
        borderRadius: "10px",
        border: "1px solid #0464FF",
        width: "100%",
      }} variant="outlined" size="medium">
        Get started
      </Button>
    </form>
    </Box>
  </Box>

</Box>
  <Typography 
  sx={{
    position:"absolute",
    top:"95%",
    left:"72%"
  }} >TechMatter PVT.LTD</Typography>






      

      
    </>
  )
}

export default NewLogin;
