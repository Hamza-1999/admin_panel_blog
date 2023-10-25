import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

const EditPayDetail = ({ data, onSave, handleClose }) => {
  const [editedData, setEditedData] = useState({ ...data });
  console.log(editedData, "get edited data");

  const handleSave = () => {
    const updatedData = {
      ...editedData,
      allowed: parseFloat(editedData.allowed), // Convert to a floating-point number
      paid: parseFloat(editedData.paid), // Convert to a floating-point number
      adjusted : parseFloat(editedData.amount - editedData.allowed)
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
            setEditedData({ ...editedData, allowed: e.target.value })
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
            setEditedData({ ...editedData, paid: e.target.value })
          }
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
