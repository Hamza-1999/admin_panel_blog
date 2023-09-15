import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

const EditPayDetail = ({ data, onSave }) => {
  console.log(data, "data");
  const [editData, setEditData] = useState(data);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const parsedValue =
      name === "allowed" || "paid" || "unpaid" || "adjusted"
        ? parseInt(value)
        : value;

    setEditData({
      ...editData,
      [name]: parsedValue,
    });
  };

  const handleSaveClick = () => {
    onSave(editData);
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
          value={editData.amount}
          label="Amount"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={handleInputChange}
          name="amount"
          variant="outlined"
        />
        <TextField
          type="number"
          size="small"
          value={editData.allowed}
          label="Allowed"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={handleInputChange}
          name="allowed"
          variant="outlined"
        />
        <TextField
          type="number"
          size="small"
          value={editData.paid}
          label="Paid"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={handleInputChange}
          name="paid"
          variant="outlined"
        />
        <TextField
          type="number"
          size="small"
          value={
            editData.allowed > 0
              ? (editData.adjusted = editData.amount - editData.allowed)
              : 0
          }
          label="Adjusted"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={handleInputChange}
          name="adjusted"
          variant="outlined"
        />

        <TextField
          type="number"
          size="small"
          label="Adjusted"
          fullWidth
          value={editData.billed}
          InputLabelProps={{ shrink: true }}
          onChange={handleInputChange}
          name="startBalance"
          variant="outlined"
        />

        <div>
          <CustomButton variant="contained" handleClick={handleSaveClick}>
            Save
          </CustomButton>
        </div>
      </Box>
    </>
  );
};

export default EditPayDetail;
