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
import { pink } from "@mui/material/colors";
import React from "react";

const Login = () => {
  return (
    <Container fixed>
      <Box fullWidth display="flex" marginTop={"10%"}>
        <Box sx={{ border: "1px solid green" }} width={"50%"}>
          <Box
            className="header"
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography>Sign In</Typography>
            <Stack direction={"row"}>
              <span>fb</span>
              <span>G</span>
            </Stack>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            // alignItems={"center"}
            // justifyContent={"center"}
          >
            <FormControl fullWidth>
              <label>Username</label>
              <TextField label="Username" type="text" />
            </FormControl>
            <FormControl fullWidth>
              <label>Password</label>
              <TextField label="Password" type="password" />
            </FormControl>
            <Button fullWidth variant="contained" color="success">
              Sign In
            </Button>

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
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
          display={"flex"}
          flexDirection={"column"}
          width={"50%"}
        >
          <Typography variant="h3" component={"h1"}>
            Welcome to Login
          </Typography>
          <Typography variant="h5" component={"p"}>
            Don't have an account?
          </Typography>
          <FormGroup sx={{ width: "300px" }}>
            <Button variant="outlined" color="secondary" size="small">
              Sign In
            </Button>
          </FormGroup>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
