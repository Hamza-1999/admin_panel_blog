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

const Claim = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getClaims, loading } = useSelector((state) => state.claim);

  const rows =
    getClaims && getClaims.result
      ? getClaims.result.map((el) => ({
          id: el.claimId,
          claimNumber: el.claimNumber,
          patientFirstName: el.patientFirstName,
          patientLastName: el.patientLastName,
          fromDate: el.claimChargesDto[0]?.fromDate || "N/A",
          claimStatus: el.claimChargesDto[0]?.claimStatus || "N/A",
        }))
      : [];

  console.log(rows, "all rows in claims");

  const columns = [
    {
      field: "claimNumber",
      headerName: "Claim ID",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 250,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      editable: true,
      editField: "name", // Add this line
      valueGetter: (params) =>
        `${params.row.patientFirstName} ${params.row.patientLastName}`,
    },
    {
      field: "fromDate",
      headerName: "DOS",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "claimStatus",
      headerName: "Status",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
  ];

  useEffect(() => {
    try {
      dispatch(getClaimAction());
    } catch (err) {
      throw err;
    }
  }, []);
  console.log(columns, "all columns in claim");

  // handle change for cell edit

  return (
    <Box margin="20px">
      <Header title="Claim" />
      <Stack
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
      </Stack>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <DataGrid
            rows={rows}
            editMode="row"
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            autoHeight
            components={{
              NoRowsOverlay: () => (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "16px",
                  }}
                >
                  {getClaims.result?.length === 0 && "No Data Is Added"}
                </div>
              ),
            }}
            pageSize={5}
            disableSelectionOnClick
            onCellClick={(params) =>
              navigate(`/claims/update/${params.row.claimNumber}`)
            }
          />
        </Box>
      )}
    </Box>
  );
};

export default Claim;
