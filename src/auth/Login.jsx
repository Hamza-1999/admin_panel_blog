// Internal imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Material-UI imports
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
} from "@mui/material";
import { blue } from "@mui/material/colors";

// CSS import
import "./login.css";

const TechMatterLogo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
        height: "100%",
        padding: "50px 45px",
      }}
    >
      <Typography
        variant="h3"
        component={"h2"}
        fontSize={".9rem"}
        fontWeight={"300"}
        letterSpacing={1.2}
      >
        TechMatter PVT LTD
      </Typography>
      <Typography
        variant="h3"
        component={"h1"}
        fontSize={"1.5rem"}
        textAlign={"right"}
        sx={{ color: "#3da58a" }}
        fontWeight={"700"}
      >
        Welcome to Login
      </Typography>
    </Box>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("clicked");
    navigate("/dashboard");
  };

  return (
    <Box component={"form"} padding={"28px 60px"}>
      <Typography variant="h1" component={"h1"} fontSize={"2rem"}>
        Login
      </Typography>

      <Box marginTop={"40px"}>
        <FormGroup sx={{ margin: "10px 0 30px" }}>
          <InputLabel>Username:</InputLabel>
          <TextField
            variant="outlined"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            sx={{ marginTop: "10px" }}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel>Password:</InputLabel>
          <TextField
            variant="outlined"
            type="password"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            sx={{ marginTop: "10px" }}
          />
        </FormGroup>

        <FormControlLabel
          sx={{ marginTop: "12px" }}
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: blue[500],
              }}
            />
          }
          label="Remember me"
        />

        <Stack display={"flex"} alignItems={"flex-end"} width={"100%"}>
          <Button
            variant="contained"
            style={{
              width: "50%",
              // background: "#274f45",
            }}
            className="loginBtn"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

const Login = () => {
  return (
    <Grid container className="mainContainer">
      <Grid
        item
        xs={4}
        className="containerItem1"
        sx={{
          display: { xs: "none", sm: "grid", md: "grid" },
        }}
      >
        <TechMatterLogo />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        sx={{
          width: "100%",
        }}
        className="containerItem2"
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
