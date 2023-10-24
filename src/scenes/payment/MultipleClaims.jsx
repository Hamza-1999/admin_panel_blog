import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSelectedClaim } from "../../features/slice/PaymentSlice";

const MultipleClaims = ({
  data,
  setData,
  setSelectedRowData,
  multipleClaimData,
  handleClose,
}) => {
  console.log(multipleClaimData, "allMultiClaims");
  console.log(data, "data --come");
  const [selectedRows, setSelectedRows] = useState([]);
  // dispatching
  const dispatch = useDispatch();
  console.log(selectedRows, "allselectedrows56");
  // console.log(selectedRows, "all selected rows");
  // console.log(multipleClaimData, "allClaims");
  const rows = multipleClaimData.map((el, index) => ({
    id: index,
    claimId: el.claimId,
    claimNumber: el.claimNumber || "N/A",
    patientAccountNo: el.patientAccountNo || "N/A",
    patientFirstName: el.patientFirstName || "N/A",
    patientLastName: el.patientLastName || "N/A",
    totalBilled: el.totalBilled || "N/A",
    adjustments: 0,
    balance: el.totalBilled || "N/A",
    payments: 0,
    fromDate: el.claimChargesDto[0].fromDate || "N/a",
    toDate: el.claimChargesDto[0].toDate || "N/A",
    claimChargesDto: el.claimChargesDto,
  }));
  const columns = [
    {
      field: "claimNumber",
      headerName: "Claim #",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "patientAccountNo",
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
    {
      field: "totalBilled",
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
    let intialData = data;
    const selectedModelRow = selectedRows.map((rowId) => 
      rows.find((el) => el.id === rowId)
    );

    

    // Checking if the initially selected row is in the selected rows
    const initialRow = rows.find((el) => el.id === selectedRows[0]);
    if (!selectedModelRow.includes(initialRow)) {
      selectedModelRow.push(initialRow);
    }
    let selectedRowForData = selectedModelRow.map((val) => ({
      claimId: val.claimId,
      claimNumber: val.claimNumber,
      claimChargesDto: val.claimChargesDto,
      paymentDetailDto : []
    }))
    intialData.paymentClaimDto = selectedRowForData;
    console.log(intialData , "intial Data after change")
    dispatch(addSelectedClaim([...selectedModelRow]));
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
