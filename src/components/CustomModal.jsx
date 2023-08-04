import { Box, Modal } from "@mui/material";
import React from "react";

const CustomModal = ({ children, open, handleClose }) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "80%", md: "70%" },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <Box sx={modalStyle}>{children}</Box>
    </Modal>
  );
};

export default CustomModal;
