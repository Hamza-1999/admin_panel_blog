import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getClaimAction } from "../../../features/actions/claimAction";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import ClaimTable from "./ClaimTable";
import CustomButton from "../../../components/CustomButton";

const Claim = () => {
  const navigate = useNavigate();

  return (
    <Box className="backgroundpatient ">
    <Box margin="20px">
      <Header title="Claim" />
      {/* <Stack
        sx={{
          borderBottom: "1px solid grey",
          padding: "10px 20px 15px",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "30%" }}
          onClick={() => navigate("/claims/new")}
        >
          Add Claim
        </Button>
      </Stack> */}

<Box>
     
            <CustomButton
              type="button"
              handleClick={() => navigate("/claims/new")}
              isBlue={true}
              padding="5px 30px"
            >
               Add Claim
            </CustomButton>
          </Box>
         
      <ClaimTable isModal={false} />
    </Box>
    </Box>
  );
};

export default Claim;
