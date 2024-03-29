import { Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const ProcedureTable = ({ claimChargesDto, setClaimChargesDto }) => {
  console.log(claimChargesDto, "checking claim charges dto");
  const rows = claimChargesDto.map((el, index) => ({
    id: el.procedureCodeId,
    procedureCode: el.procedureCode,
    toDate: el.toDate,
    fromDate: el.fromDate,
    tosCode: el.tosCode,
    posCode: el.posCode,
    modCode_1: el.mod_Code1,
    modCode_2: el.mod_Code2,
    modCode_3: el.mod_Code3,
    modCode_4: el.mod_Code4,
    unitPrice: el.unitPrice,
    units: el.units,
    amountBilled: el.amountBilled,
  }));

  const handleDeleteRow = (val) => {
    const deletedRow = claimChargesDto.filter(
      (el) => el.procedureCodeId !== val.id
    );
    setClaimChargesDto(deletedRow);
  };

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
      headerName: "Procedure",
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
      field: "amountBilled",
      headerName: "Amount",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleDeleteRow(params.row)}
        >
          <Delete />
        </Button>
      ),
    },
  ];

  return (
    
    // <Box sx={{ width: "100%",borderRadius:'20px',background:'white'}}>
      <DataGrid style={{background:'white',borderRadius:'20px',boxShadow: '3px 4px 11px 0px rgba(0, 0, 0, 0.10)'}}
        rows={rows}
        columns={columns}
        sx={{
          "& .header-bg": {
            backgroundColor: "lightgrey",
            color: 'black',
            fontSize: '19px',
          },
        }}
        autoHeight
        components={{
          NoRowsOverlay: () => (
            <div
              style={{ width: "100%", textAlign: "center", padding: "16px" }}
            >
              {rows.length === 0 && "No Data Is Added"}
            </div>
          ),
        }}
      />
    // </Box>
  );
};

export default ProcedureTable;
