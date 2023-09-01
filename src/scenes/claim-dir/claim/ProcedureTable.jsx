import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const ProcedureTable = ({ claimChargesDto }) => {
  console.log(claimChargesDto, "claim dtos");
  const rows = claimChargesDto.map((el, index) => ({
    id: index,
    procedureCode: el.procedureCode,
    toDate: el.toDate,
    fromDate: el.fromDate,
    tosCode: el.tosCode,
    posCode: el.posCode,
    modCode_1: el.modCode_1,
    modCode_2: el.modCode_2,
    modCode_3: el.modCode_3,
    modCode_4: el.modCode_4,
  }));
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
      field: "modCode_1",
      headerName: "Mod 1",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "modCode_2",
      headerName: "Mod 2",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "modCode_3",
      headerName: "Mod 3",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "modCode_4",
      headerName: "Mod 4",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    // {
    //   field: "unitPrice",
    //   headerName: "Unit Price",
    //   width: 150,
    //   headerAlign: "center",
    //   align: "center",
    //   headerClassName: "header-bg",
    // },
    // {
    //   field: "units",
    //   headerName: "Units",
    //   width: 150,
    //   headerAlign: "center",
    //   align: "center",
    //   headerClassName: "header-bg",
    // },
    // {
    //   field: "amount",
    //   headerName: "Amount",
    //   width: 150,
    //   headerAlign: "center",
    //   align: "center",
    //   headerClassName: "header-bg",
    // },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
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
              {claimChargesDto.length === 0 && "No Data Is Added"}
            </div>
          ),
        }}
      />
    </Box>
  );
};

export default ProcedureTable;
