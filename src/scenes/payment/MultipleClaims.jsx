import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";

const MultipleClaims = ({
  setSelectedRowData,
  multipleClaimData,
  handleClose,
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  console.log(selectedRows, "all selected rows");
  // console.log(multipleClaimData, "allClaims");
  const rows = multipleClaimData.map((el, index) => ({
    id: index,
    claimNo: el.claimNo || "N/A",
    accountNo: el.accountNo || "N/A",
    patientFirstName: el.patientFirstName || "N/A",
    patientLastName: el.patientLastName || "N/A",
    totalCharges: el.totalCharges || "N/A",
    adjustments: el.adjustments || "N/A",
    balance: el.balance || "N/A",
    payments: el.payments || "N/A",
    // fromDate: el.payerClaimChargeDto[0].fromDate,
    // toDate: el.payerClaimChargeDto[0].toDate,
  }));
  const columns = [
    {
      field: "claimNo",
      headerName: "Claim #",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "accountNo",
      headerName: "Account #",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "patientLastName",
      headerName: "Last Name",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "patientFirstName",
      headerName: "First Name",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    // {
    //   field: "fromDate",
    //   headerName: "From",
    //   flex: 1,
    //   minWidth: 100,
    //   headerAlign: "center",
    //   align: "center",
    // },
    // {
    //   field: "toDate",
    //   headerName: "To",
    //   flex: 1,
    //   minWidth: 100,
    //   headerAlign: "center",
    //   align: "center",
    // },
    {
      field: "totalCharges",
      headerName: "Charges",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "payments",
      headerName: "Payments",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "adjustments",
      headerName: "Adjustments",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "balance",
      headerName: "Balance",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
  ];

  // select button logic
  const handleSelectClick = () => {
    const selectedModelRow = selectedRows.map((rowId) =>
      rows.find((el) => el.id === rowId)
    );
    setSelectedRowData(selectedModelRow);
    handleClose();
  };
  return (
    <Box sx={{ minHeight: "200px", padding: "15px" }}>
      <Typography
        variant="h4"
        component="h4"
        letterSpacing="1.24px"
        margin="15px 0"
      >
        Search Results
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(newRow) => setSelectedRows(newRow)}
        sx={{
          "& .header-bg": {
            backgroundColor: "lightgrey",
          },
        }}
        autoHeight
        disableSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSize={5}
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

      <Stack sx={{ margin: "17px 0" }}>
        <CustomButton
          margin="0 20px 0"
          variant="contained"
          width="150px"
          handleClick={handleSelectClick}
        >
          Select
        </CustomButton>
      </Stack>
    </Box>
  );
};

export default MultipleClaims;
