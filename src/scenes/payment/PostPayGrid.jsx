import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const PostPayGrid = ({ payDataForGrid }) => {
  console.log(payDataForGrid, "allgrids");

  const rows = payDataForGrid.map((el) => ({
    id: el.claimId,
    patientFirstName: el.patientFirstName,
    patientLastName: el.patientLastName,
    patientAccountNo: el.patientAccountNo,
    claimNumber: el.claimNumber,
    billed: el.billed,
    allowed: el.allowed,
    paid: el.paid,
    adjusted: el.adjusted,
    unpaid: el.unpaid,
    additionalActions: el.additionalActions,
    balance: el.balance,
  }));

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 3,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) =>
        `${params.row.patientFirstName} ${params.row.patientLastName}`,
    },
    {
      field: "patientAccountNo",
      headerName: "Account No",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "claimNumber",
      headerName: "Claim",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "tcn",
      headerName: "TCN",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "billed",
      headerName: "Billed",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "allowed",
      headerName: "Allowed",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "paid",
      headerName: "Paid",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "adjusted",
      headerName: "Adjusted",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "unpaid",
      headerName: "Unpaid",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "additionalActions",
      headerName: "Additional Actions",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "balance",
      headerName: "Balance",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
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
              {rows.length === 0 && "No Data Is Added"}
            </div>
          ),
        }}
      />
    </Box>
  );
};

export default PostPayGrid;
