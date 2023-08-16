import { Box } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPracticeAction } from "../../../features/actions/practiceAction";

const Practice = () => {
  const dispatch = useDispatch();
  const prac = useSelector((state) => state.practices);
  console.log(prac, "gettingPractice Data11");

  useEffect(() => {
    dispatch(getPracticeAction());
  }, [dispatch]);
  return (
    <Box margin={"20px"}>
      <Header title="All Practice" subtitle="" />

      <Box
        sx={{
          width: { xs: "80%", sm: "70%", md: "60%" },
        }}
      >
        {/* <DataGrid /> */}
      </Box>
    </Box>
  );
};

export default Practice;
