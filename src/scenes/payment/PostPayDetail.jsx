import { Box, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

const PostPayDetail = ({ detailInfo, formik }) => {
  console.log(detailInfo, "alldetailOfData");

  console.log(formik.values, "formikVals");

  const formattedData = detailInfo.map((item) => ({
    id: item.claimChargesId,
    procedureCode: item.procedureCode,
    amount: item.amountBilled,
    claimStatus: item.claimStatus,
    fromDate: item.fromDate || "",
    startBalance: item.amountBilled,
    allowed: 0,
    paid: 0,
    unpaid: 0,
    adjusted: 0,
  }));
  console.log(formattedData, "formattedData");

  const columns = [
    {
      field: "fromDate",
      headerName: "DOS",
      flex: 3,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "procedureCode",
      headerName: "Procedure Code",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "startBalance",
      headerName: "Start Balance",
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
      editable: true,
      renderCell: (params) => (
        <TextField
          value={params.value}
          onChange={(e) => handleEditCellChange(params, e)}
        />
      ),
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
      renderCell: (params) => (
        <TextField
          value={params.value}
          onChange={(e) =>
            handleEditCellChange({
              ...params,
              props: { value: e.target.value },
            })
          }
        />
      ),
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
      field: "claimStatus",
      headerName: "Status",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
  ];

  const totalAllowed = formattedData.reduce((sum, row) => sum + row.allowed, 0);
  console.log(totalAllowed, "total Allowed");
  const totalPaid = formattedData.reduce((sum, row) => sum + row.paid, 0);
  const totalUnpaid = formattedData.reduce((sum, row) => sum + row.unpaid, 0);
  // const totalBalance = formattedData.reduce((sum, row) => sum + row.balance);
  const totalAdjusted = formattedData.reduce(
    (sum, row) => sum + row.adjusted,
    0
  );
  const totalAmount = formattedData.reduce((sum, row) => sum + row.amount, 0);
  const totalStartBalance = formattedData.reduce(
    (sum, row) => sum + row.startBalance,
    0
  );

  const totalRows = {
    id: "total",
    fromDate: "Total",
    amount: totalAmount,
    procedureCode: "",
    startBalance: totalStartBalance,
    allowed: totalAllowed,
    adjusted: totalAdjusted,
    // balance: totalBalance,
    paid: totalPaid,
    unpaid: totalUnpaid,
    claimStatus: "",
  };

  const allRows = [...formattedData, totalRows];
  console.log(allRows, "all rows");

  const [editedData, setEditedData] = useState(allRows);

  const handleEditCellChange = (params, event) => {
    // Find the index of the edited row
    const editedRowIndex = editedData.findIndex((row) => row.id === params.id);

    // Get the new "Allowed" value from the event
    const allowed = parseFloat(event.target.value) || 0;

    // Calculate the updated Paid and Adjusted values
    const amount = parseFloat(editedData[editedRowIndex].amount) || 0;
    const paid = allowed;
    const adjusted = amount - allowed;

    // Create a new copy of the editedData with the updated cell values
    const updatedRow = {
      ...editedData[editedRowIndex],
      allowed: allowed,
      paid: paid,
      adjusted: adjusted,
    };
    const updatedData = [...editedData];
    updatedData[editedRowIndex] = updatedRow;

    // Update the state with the edited data
    setEditedData(updatedData);

    // Update formik values
    const updatedFormikValues = { ...formik.values };
    updatedFormikValues.allowed = allowed;
    // Update other formik values here if needed

    // Set the new formik values
    formik.setValues(updatedFormikValues);
  };

  return (
    <div style={{ width: "100%" }}>
      {allRows.length > 0 ? (
        <DataGrid
          rows={editedData}
          columns={columns}
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
                No Data Is Added
              </div>
            ),
          }}
        />
      ) : (
        <div>No Data Is Added</div>
      )}
    </div>
  );
};

export default PostPayDetail;
