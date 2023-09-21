import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const PostPayGrid = ({
  selectedRowData,
  formik,
  setShowDetail,
  setDetailInfo,
}) => {
  const payDataForGrid = [
    {
      claimId: formik.values.claimInfoId,
      patientFirstName: formik.values.patientFirstName,
      patientLastName: formik.values.patientLastName,
      claimNumber: formik.values.claimNumber,
      patientAccountNo: formik.values.patientAccountNo,
      billed: formik.values.billed,
      allowed: formik.values.allowed,
      paid: formik.values.paid,
      adjusted: formik.values.adjusted,
      unpaid: formik.values.unpaid,
      additionalActions: formik.values.additionalActions,
      balance: formik.values.balance,
      dateOfService: formik.values.dateOfService,
      tcn: formik.values.tcn,
      claimChargesDto: formik.values.claimChargesDto,
    },
  ];
  console.log(payDataForGrid, "allgrids");

  const rows = payDataForGrid.map((el, index) => ({
    id: el.claimId || index,
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
    claimChargesDto: el.claimChargesDto,
  }));

  const payerRows = selectedRowData.map((el, index) => ({
    id: el.id || index,
    accountNo: el.accountNo,
    claimNo: el.claimNo,
    patientFirstName: el.patientFirstName,
    patientLastName: el.patientLastName,
    balance: el.balance,
    payments: el.payments,
    totalCharges: el.totalCharges,
  }));

  const totalBilled = rows.reduce((sum, row) => sum + row.billed, 0);
  const totalAllowed = rows.reduce((sum, row) => sum + row.allowed, 0);
  const totalPaid = rows.reduce((sum, row) => sum + row.paid, 0);
  const totalAdjusted = rows.reduce((sum, row) => sum + row.adjusted, 0);
  const totalUnpaid = rows.reduce((sum, row) => sum + row.unpaid, 0);
  const totalBalance = rows.reduce((sum, row) => sum + row.balance, 0);

  const totalRows = {
    id: "total",
    patientFirstName: "Total",
    patientLastName: "",
    billed: totalBilled,
    allowed: totalAllowed,
    adjusted: totalAdjusted,
    balance: totalBalance,
    paid: totalPaid,
    unpaid: totalUnpaid,
  };

  const rowsWithTotal = [...rows, totalRows];
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

  // payer columns
  const payerColumns = [
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
      field: "accountNo",
      headerName: "Account No",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "claimNo",
      headerName: "Claim",
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
    {
      field: "payments",
      headerName: "Payments",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "totalCharges",
      headerName: "Total Charges",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={formik.values.isClaim === true ? rowsWithTotal : payerRows}
        columns={formik.values.isClaim === true ? columns : payerColumns}
        sx={{
          "& .header-bg": {
            backgroundColor: "lightgrey",
          },
        }}
        autoHeight
        disableSelectionOnClick
        components={{
          NoRowsOverlay: () => (
            <div
              style={{ width: "100%", textAlign: "center", padding: "16px" }}
            >
              {rowsWithTotal.length === 0 && "No Data Is Added"}
            </div>
          ),
        }}
        onCellClick={(params) => {
          if (params.row.id !== "total") {
            setDetailInfo(params.row.claimChargesDto);
            setShowDetail(true);
          }
        }}
      />
    </Box>
  );
};

export default PostPayGrid;
