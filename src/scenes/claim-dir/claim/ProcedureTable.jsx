import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const ProcedureTable = ({ gridData }) => {
  const columns = [
    {
      field: "fromDate",
      headerName: "From",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "toDate",
      headerName: "To",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },

    {
      field: "procedureCode",
      headerName: "Procesdure",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "posCode",
      headerName: "Pos",
      width: 150,
      headerAlign: "center",

      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "tosCode",
      headerName: "Tos",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "mod1",
      headerName: "Mod 1",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "mod2",
      headerName: "Mod 2",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "mod3",
      headerName: "Mod 3",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "mod4",
      headerName: "Mod 4",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "unitPrice",
      headerName: "Unit Price",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "units",
      headerName: "Units",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={gridData}
        columns={columns}
        sx={{
          "& .header-bg": {
            backgroundColor: "lightgrey",
          },
        }}
        autoHeight
        components={{
          NoRowsOverlay: () => (
            <div
              style={{ width: "100%", textAlign: "center", padding: "16px" }}
            >
              {gridData.length === 0 && "No Data Is Added"}
            </div>
          ),
        }}
      />
    </Box>
  );
};

export default ProcedureTable;
