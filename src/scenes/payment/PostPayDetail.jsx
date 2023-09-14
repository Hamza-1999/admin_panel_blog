import { Edit } from "@mui/icons-material";
import { Box, Button, Stack, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import CustomModal from "../../components/CustomModal";
import EditPayDetail from "./EditPayDetail";
const PostPayDetail = ({ detailInfo, formik, setShowDetail }) => {
  console.log(formik.values, "formikVals");
  const [openEditModal, setOpenEditModal] = useState(false);
  console.log(openEditModal, "editedModal code");
  const [editedRow, setEditedRow] = useState(null);
  console.log(editedRow, "checkEditedRow5");
  const formattedData = detailInfo.map((item) => ({
    id: item.claimChargesId,
    procedureCode: item.procedureCode,
    amount: item.amountBilled,
    claimStatus: item.claimStatus,
    fromDate: item.fromDate,
    startBalance: item.amountBilled,
    allowed: 0,
    paid: 0,
    unpaid: 0,
    adjusted: 0,
  }));

  const [rowData, setRowData] = useState(formattedData);
  const [editedData, setEditedData] = useState([]);

  const columns = [
    {
      field: "action",
      headerName: "Edit",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Button variant="outlined" onClick={() => handleEditClick(params.row)}>
          <Edit />
        </Button>
      ),
    },
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
      field: "claimStatus",
      headerName: "Status",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
  ];

  const handleEditClick = (row) => {
    console.log(row);
    setEditedRow(row);
    // Check if the row is already in the editedData state
    const isRowInEditedData = editedData.some((item) => item.id === row.id);
    if (!isRowInEditedData) {
      // Add the row to the editedData state if it's not already there
      setEditedData((prevData) => [...prevData, row]);
    }
    setOpenEditModal(true);
  };

  const handleSave = (editedData) => {
    const updatedData = rowData.map((row) =>
      row.id === editedData.id ? editedData : row
    );
    // Update the rowData state with the edited row
    setRowData(updatedData);
    setEditedData((prevData) =>
      prevData.map((row) => (row.id === editedData.id ? editedData : row))
    );
    setEditedData((prevData) =>
      prevData.map((row) => (row.id === editedData.id ? editedData : row))
    );
    setOpenEditModal(false);
  };

  // done button handling
  const handleDone = () => {
    const totalAllowedFV = editedData.reduce(
      (sum, row) => sum + row.allowed,
      0
    );
    const totalPaidFV = editedData.reduce((sum, row) => sum + row.paid, 0);
    const totalAdjustedFV = editedData.reduce(
      (sum, row) => sum + row.adjusted,
      0
    );
    const totalUnpaidFV = editedData.reduce((sum, row) => sum + row.unpaid, 0);
    const minusAllowed = formik.values.billed - totalAllowedFV;
    const minusedAdj = minusAllowed - totalAdjustedFV;
    const result = minusedAdj;
    const totalBalanceFV = result;
    const appliedFV = formik.values.billed - formik.values.allowed;
    formik.setValues((prevVals) => ({
      ...prevVals,
      allowed: totalAllowedFV,
      adjusted: totalAdjustedFV,
      paid: totalPaidFV,
      unpaid: totalUnpaidFV,
      balance: totalBalanceFV,
      applied: appliedFV,
    }));
    setShowDetail(false);
  };

  console.log(rowData, "checkRowData");

  return (
    <>
      <CustomModal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
      >
        <EditPayDetail data={editedRow} onSave={handleSave} />
      </CustomModal>
      <div style={{ width: "100%" }}>
        <Box>
          <Button variant="outlined" onClick={handleDone}>
            Done
          </Button>
        </Box>
        {rowData.length > 0 ? (
          <DataGrid
            rows={rowData}
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
                  style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "16px",
                  }}
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
    </>
  );
};

export default PostPayDetail;
