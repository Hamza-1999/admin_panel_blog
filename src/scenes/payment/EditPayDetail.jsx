import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

const EditPayDetail = ({ data, onSave, handleClose }) => {
  const [editedData, setEditedData] = useState({ ...data });
  console.log(editedData, "get edited data");
  const otherCalculation = (e) => {
    let allowedPlusAdjusted = parseFloat(e.allowed + e.amount - e.allowed);
    let additionalOtherCredits = parseFloat(
      allowedPlusAdjusted > e.amount ? allowedPlusAdjusted - e.amount : 0
    );
    return parseFloat(additionalOtherCredits);
  };
  const handleSave = () => {
    const updatedData = {
      ...editedData,
      allowed: parseFloat(editedData.allowed), // Convert to a floating-point number
      paid: parseFloat(editedData.paid), // Convert to a floating-point number
      unpaid:
        editedData.deductible > 0
          ? 0
          : parseFloat(
              editedData.paid > editedData.allowed
                ? 0
                : editedData.allowed - editedData.paid
            ),
      endBalance: parseFloat(
        editedData.paid > editedData.allowed
          ? 0
          : editedData.allowed - editedData.paid
      ),
      otherCredits: parseFloat(
        editedData.paid > editedData.allowed
          ? editedData.adjusted > editedData.amount - editedData.allowed
            ?-1 * (parseFloat(editedData.paid) -
              parseFloat(editedData.allowed) +
              parseFloat(editedData.adjusted) +
              parseFloat(editedData.allowed) -
              parseFloat(editedData.amount))
            :   editedData.allowed - editedData.paid
          : 0
      ),
      claimStatus : editedData.paid > editedData.allowed ? "PAID" : "DUE AMOUNT",
    };
    onSave(updatedData);
    handleClose();
  };
  return (
    <>
      <Box
        display="grid"
        padding="20px"
        gap="30px"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 1fr))",
          },
        }}
      >
        <TextField
          type="number"
          size="small"
          label="Amount"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={editedData.amount}
          name="amount"
          onChange={(e) =>
            setEditedData({ ...editedData, amount: e.target.value })
          }
          variant="outlined"
        />
        <TextField
          type="number"
          size="small"
          label="Allowed"
          value={editedData.allowed}
          fullWidth
          InputLabelProps={{ shrink: true }}
          name="allowed"
          onChange={(e) =>
            setEditedData({
              ...editedData,
              allowed: e.target.value,
              adjusted: Math.abs(parseFloat(editedData.amount - e.target.value)),
            })
          }
          variant="outlined"
        />
        <TextField
          type="number"
          size="small"
          label="Paid"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={editedData.paid}
          name="paid"
          variant="outlined"
          onChange={(e) =>
            setEditedData({
              ...editedData,
              paid: e.target.value,
            })
          }
        />
        <TextField
          type="number"
          size="small"
          label="Adjusted"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={editedData.adjusted}
          name="adjusted"
          variant="outlined"
          onChange={(e) => {
            if (e.target.value) {
              setEditedData({ ...editedData, adjusted: e.target.value });
            }
          }}
        />
        <TextField
          type="number"
          size="small"
          label="Unpaid"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={editedData.unpaid}
          name="unpaid"
          variant="outlined"
          onChange={(e) => {
            if (e.target.value) {
              setEditedData({ ...editedData, unpaid: e.target.value });
            }
          }}
        />
        <TextField
          type="number"
          size="small"
          label="Deductible"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={editedData.deductible}
          name="deductible"
          variant="outlined"
          onChange={(e) => {
            if (e.target.value) {
              setEditedData({
                ...editedData,
                deductible: e.target.value,
              });
            }
          }}
        />

        <div>
          <CustomButton variant="contained" handleClick={handleSave}>
            Save
          </CustomButton>
        </div>
      </Box>
    </>
  );
};

export default EditPayDetail;
