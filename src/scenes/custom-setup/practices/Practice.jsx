import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPracticeAction } from "../../../features/actions/practiceAction";
import { useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";
import CustomSearchField from "../../../components/CustomSearchField";
import CustomButton from "../../../components/CustomButton";

const Practice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getPractices, loading } = useSelector((state) => state.practices);
  const [searchPractice, setSearchPractice] = useState("");
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
        <Header title="Practices" subtitle="Show all practices" />
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <>
            <div>No practice data available.</div>
            <Box
              margin={"20px 0"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
                gap: "15px",
              }}
            >
              <Box width={{ xs: "100%", sm: "65%", md: "65%" }}>
                <Button
                  //   fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate("/practice/new")}
                >
                  <Add /> Add Practice
                </Button>
              </Box>
            </Box>
          </>
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

  const filteredRow = rows?.filter((ro) =>
    ro.practiceName.toLowerCase().includes(searchPractice.toLowerCase())
  );

  const columns = [
    {
      field: "practiceName",
      headerName: "Practice Name",
      minWidth: 160,
      headerAlign: "center",
      filterable: true,
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content"
    },
    {
      field: "primaryAddress",
      headerName: "Address",
      minWidth: 160,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content"
    },
    {
      field: "sequenceNo",
      minWidth: 160,
      headerName: "Seq#",
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content"
    },
    {
      field: "practiceNPINo",
      minWidth: 160,
      headerName: "NPI",
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content"
    },
  ];

  return (
    <Box className="backgroundpatient ">
    <Box margin={"20px"}>
      <Header title="All Practice" subtitle="" />

      <Box
        sx={{
          height: "400px",
          width: { xs: "95%", sm: "85%", md: "60%" },
        }}
      >
        <Box
          margin={"20px 0"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            
            gap: "15px",
          }}
        >

          <Box  sx={{marginRight:{xs:'220px',sm:'100px',md:'0'}}}>
          <CustomSearchField 
            // fullWidth
            value={searchPractice}
            onChange={(e) => setSearchPractice(e.target.value)}
            variant="outlined"
            label="Search"
          />
          </Box>
          <Box width={{ xs: "100%", sm: "65%", md: "60%" }}
          sx={{marginTop:'25px',
          marginLeft:{xs:'0',md:'10px'}}}
          
          >
            <CustomButton 
              fullWidth
              variant="contained"
              isBlue={true}
              padding={'5px'}
              onClick={() => navigate("/practice/new")}
             
            >
              <Add /> Add Practice
            </CustomButton>
          </Box>
        </Box>
        <DataGrid
          rows={filteredRow}
          columns={columns}
          sx={{
            "& .header-bg": {
              backgroundColor: "lightgrey",
              color: 'black',
              fontSize: '16px',
            },
            "& .cell-content": {
              fontSize: '1.2rem', 
            }
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSize={5}
          disableSelectionOnClick
          onCellClick={(params) =>
            navigate(`/practice/update/${params.row.id}`)
          }
        />
      </Box>
    </Box>
    </Box>
  );
};

export default Practice;
