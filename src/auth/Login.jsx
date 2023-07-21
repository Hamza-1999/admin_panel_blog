import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <Container fixed>
      <Box fullWidth display="flex" marginTop={"10%"}>
        <Box sx={{ border: "1px solid green" }} width={"50%"} padding={"25px"}>
          <Box
            className="header"
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              variant="h3"
              component={"h1"}
              fontSize={"2.5rem"}
              fontWeight={"300"}
            >
              Sign In
            </Typography>
            <Stack direction={"row"}>
              <TwitterIcon className="socialIcon" />
              <FacebookIcon className="socialIcon" />
            </Stack>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            // alignItems={"center"}
            // justifyContent={"center"}
          >
            <FormControl fullWidth sx={{ margin: "20px 0" }}>
              <label>Username</label>
              <TextField
                label="Username"
                type="text"
                className="textField"
                sx={{
                  marginTop: "10px",
                }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "20px 0" }}>
              <label>Password</label>
              <TextField
                label="Password"
                type="password"
                sx={{
                  marginTop: "10px",
                }}
              />
            </FormControl>

            <Button
              fullWidth
              variant="outline"
              className="loginBtn"
              sx={{
                marginTop: "20px",
                padding: "12px",
                background: "",
                borderRadius: "20px",
              }}
              onClick={handleLogin}
            >
              Sign In
            </Button>

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginTop={"15px"}
            >
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember" />
              </FormGroup>

              <Typography>Forget Password</Typography>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{ border: "1px solid red" }}
          className="welcomeBox"
          display={"flex"}
          flexDirection={"column"}
          width={"50%"}
          alignItems={"center"}
          justifyContent={"center"}
          padding={"18px"}
        >
          <Typography variant="h3" component={"h1"} fontSize={"2.5rem"}>
            Welcome to Login
          </Typography>
          <Typography variant="h5" component={"p"} margin={"30px 0"}>
            Don't have an account?
          </Typography>
          <FormGroup sx={{ width: "200px" }}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ borderRadius: "20px", padding: "10px" }}
            >
              Sign In
            </Button>
          </FormGroup>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
