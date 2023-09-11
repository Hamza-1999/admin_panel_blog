import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PostPayGrid from "./PostPayGrid";

const PostPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { postPaymentData } = location.state;

  console.log(postPaymentData, "postPaymentData getting6");

  const payDataForGrid = [
    {
      claimId: postPaymentData.claimInfoId,
      patientFirstName: postPaymentData.patientFirstName,
      patientLastName: postPaymentData.patientLastName,
      claimNumber: postPaymentData.claimNumber,
      patientAccountNo: postPaymentData.patientAccountNo,
      billed: postPaymentData.billed,
      allowed: postPaymentData.allowed,
      paid: postPaymentData.paid,
      adjusted: postPaymentData.adjusted,
      unpaid: postPaymentData.unpaid,
      additionalActions: postPaymentData.additionalActions,
      balance: postPaymentData.balance,
      dateOfService: postPaymentData.dateOfService,
      tcn: postPaymentData.tcn,
    },
  ];

  console.log(payDataForGrid, "datagridvalues");
  return (
    <Box margin="20px">
      <Header title="New Payment" subtitle="" />

      <Stack flexDirection={"row"} alignItems="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/payment")}
        >
          <ArrowBackIcon />
        </Button>
        <CustomButton
          margin="0 20px 0"
          variant="contained"
          width="200px"
          handleClick={() => console.log("save button clicked..")}
        >
          Save Payment
        </CustomButton>
        <Button variant="outlined" color="error">
          Cancel
        </Button>
      </Stack>

      <Box
        sx={{
          background: "lightgrey",
          padding: "18px",
          margin: "28px 0 20px",
        }}
      >
        <Typography variant="h4" component="p">
          Payment -{" "}
          {postPaymentData.paymentMethod === "creditCard"
            ? postPaymentData.creditCardType
            : postPaymentData.paymentMethod === "check"
            ? "Check"
            : "EFT"}{" "}
          from <span>{postPaymentData.paymentBy}</span>
        </Typography>

        <Stack margin="20px 0 10px">
          {postPaymentData.paymentMethod === "check" && (
            <Typography variant="h5" component="span">
              <strong>Check:</strong> {postPaymentData.checkNumber}
            </Typography>
          )}
          <Typography variant="h5" component="span">
            <strong>Amount:</strong> $ {postPaymentData.paymentAmount}
          </Typography>
          <Typography variant="h5" component="span">
            <strong>Applied:</strong> $ {postPaymentData.applied}
          </Typography>
          <Typography variant="h5" component="span">
            <strong>Unapplied:</strong> ${" "}
            {postPaymentData.paymentAmount - postPaymentData.applied}
          </Typography>
        </Stack>
      </Box>

      {/* Grid here */}
      <PostPayGrid payDataForGrid={payDataForGrid} />
    </Box>
  );
};

export default PostPayment;
