import { Cancel } from "@mui/icons-material";
import { Box, Button, Modal } from "@mui/material";
import React from "react";

const CustomModal = ({ children, open, handleClose }) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "80%", sm: "auto", md: "auto" },
    minWidth: { xs: "80%", sm: "450px", md: "600px" },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    minHeight: "100px",
    maxHeight: "600px",
    overflowY: "scroll",
    padding: "15px",
    // padding: "16px", // Adding some padding to the modal content
  };

  const cancelBtnStyle = {
    position: "absolute",
    top: "0", // Adjust the top position as needed
    right: "16px", // Adjust the right position as needed
    zIndex: 111,
    paddingRight: "20px",
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <Box sx={modalStyle}>{children}</Box>
      {/* <Button sx={cancelBtnStyle} onClick={handleClose}>
        Cancel
      </Button> */}
    </Modal>
  );
};

export default CustomModal;
