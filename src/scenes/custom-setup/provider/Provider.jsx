import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPracticeAction } from "../../../features/actions/practiceAction";
import { useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { getProviderAction } from "../../../features/actions/providerAction";

const Provider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getProviders, loading } = useSelector((state) => state.provider);
  //   const [searchPractice, setSearchPractice] = useState("");
  console.log(getProviders, "gettingPractice Data11");
  useEffect(() => {
    dispatch(getProviderAction());
  }, [dispatch]);

  if (
    !getProviders ||
    !getProviders.result ||
    getProviders.result?.length === 0
  ) {
    return (
      <Box m={"20px"}>
        <Header title=" All Providers" />
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <div>No patient data available.</div>
        )}
      </Box>
    );
  }

  const rows = getProviders.result?.map((el) => ({
    id: el.providerId,
    providerFirstName: el.providerFirstName,
    providerLastName: el.providerLastName,
    providerSequenceNo: el.providerSequenceNo,
    providerNPINo: el.providerNPINo,
    isActive: el.isActive,
  }));

  //   const filteredRow = rows?.filter((ro) =>
  //     ro.practiceName.toLowerCase().includes(searchPractice.toLowerCase())
  //   );

  const columns = [
    {
      field: "name",
      headerName: "Provider Name",
      minWidth: 160,
      headerAlign: "center",
      filterable: true,
      align: "center",
      valueGetter: (params) =>
        `${params.row.providerFirstName} ${params.row.providerLastName}`,
    },
    {
      field: "providerNPINo",
      headerName: "NPI",
      minWidth: 160,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "providerSequenceNo",
      minWidth: 160,
      headerName: "Seq#",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "isActive",
      minWidth: 160,
      headerName: "Inactive",
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => (params.value ? "Active" : "Inactive"),
    },
  ];

  return (
    <Box margin={"20px"}>
      <Header title="All Providers" subtitle="" />

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
          {/* <TextField
            fullWidth
            value={searchPractice}
            onChange={(e) => setSearchPractice(e.target.value)}
            variant="outlined"
            size="small"
            label="Search"
          /> */}
          <Box width={{ xs: "100%", sm: "65%", md: "65%" }}>
            <Button
              //   fullWidth
              variant="contained"
              color="secondary"
              onClick={() => navigate("/provider/new")}
            >
              <Add /> New Provider
            </Button>
          </Box>
        </Box>
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
          onCellClick={(params) =>
            navigate(`/practice/update/${params.row.id}`)
          }
        />
      </Box>
    </Box>
  );
};

export default Provider;
