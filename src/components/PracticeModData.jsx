import { Box, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPracticeAction } from "../features/actions/practiceAction";

const PracticeModData = ({ handleClose, setFieldValue }) => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const { getPractices, loading } = useSelector((state) => state.practices);
  console.log(getPractices.result, "gettingPractice Data11");
  useEffect(() => {
    dispatch(getPracticeAction());
  }, [dispatch]);

  if (
    !getPractices ||
    !getPractices.result ||
    getPractices.result?.length === 0
  ) {
    return (
      <Box m={"20px"}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <div>No patient data available.</div>
        )}
      </Box>
    );
  }

  const rows = getPractices.result?.map((el) => ({
    id: el.practiceId,
    practiceName: el.practiceName,
    primaryAddress: el.primaryAddress,
    sequenceNo: el.sequenceNo,
    practiceNPINo: el.practiceNPINo,
  }));

  const columns = [
    {
      field: "practiceName",
      headerName: "Practice Name",
      minWidth: 160,
      headerAlign: "center",
      filterable: true,
      align: "center",
    },
    {
      field: "primaryAddress",
      headerName: "Address",
      minWidth: 160,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "sequenceNo",
      minWidth: 160,
      headerName: "Seq#",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "practiceNPINo",
      minWidth: 160,
      headerName: "NPI",
      headerAlign: "center",
      align: "center",
    },
  ];

  const handleCellClick = (val) => {
    console.log(val, "practiceNameinProv");
    setFieldValue(
      "practiceName",
      `${val.row.practiceName} (${val.row.sequenceNo})`
    );

    handleClose();
  };
  return (
    <Box margin={"20px"}>
      <Box
        sx={{
          height: "400px",
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSize={5}
          disableSelectionOnClick
          onCellClick={(params) => handleCellClick(params)}
        />
      </Box>
    </Box>
  );
};

export default PracticeModData;
