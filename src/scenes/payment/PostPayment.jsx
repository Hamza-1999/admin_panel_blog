import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PostPayGrid from "./PostPayGrid";
import PostPayDetail from "./PostPayDetail";

const PostPayment = ({
  // postPaymentData,
  setShowPostPay,
  setApplyEob,
  formik,
}) => {
  console.log(formik.values, "checkingPayData");
  const [showDetail, setShowDetail] = useState(false);
  const [detailInfo, setDetailInfo] = useState([]);

  // const payDataForGrid = [
  //   {
  //     claimId: formik.values.claimInfoId,
  //     patientFirstName: formik.values.patientFirstName,
  //     patientLastName: formik.values.patientLastName,
  //     claimNumber: formik.values.claimNumber,
  //     patientAccountNo: formik.values.patientAccountNo,
  //     billed: formik.values.billed,
  //     allowed: formik.values.allowed,
  //     paid: formik.values.paid,
  //     adjusted: formik.values.adjusted,
  //     unpaid: formik.values.unpaid,
  //     additionalActions: formik.values.additionalActions,
  //     balance: formik.values.balance,
  //     dateOfService: formik.values.dateOfService,
  //     tcn: formik.values.tcn,
  //     claimChargesDto: formik.values.claimChargesDto,
  //   },
  // ];

  // console.log(payDataForGrid, "datagridvalues");

  const handleCancel = () => {
    const conform = window.confirm("Are you sure you want to cancel?");
    if (conform) {
      formik.resetForm();
      setShowPostPay(false);
      setApplyEob(false);
    }
  };
  return (
    <Box margin="20px">
      <Header title="New Payment" subtitle="" />

      {showDetail ? (
        <Box sx={{ width: "100%" }}>
          <PostPayDetail formik={formik} detailInfo={detailInfo} />
        </Box>
      ) : (
        <div>
          <Stack flexDirection={"row"} alignItems="center">
            <CustomButton
              margin="0 20px 0"
              variant="contained"
              width="200px"
              handleClick={() => console.log("save button clicked..")}
            >
              Save Payment
            </CustomButton>
            <Button variant="outlined" color="error" onClick={handleCancel}>
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
              {formik.values.paymentMethod === "creditCard"
                ? formik.values.creditCardType
                : formik.values.paymentMethod === "check"
                ? "Check"
                : "EFT"}{" "}
              from <span>{formik.values.paymentBy}</span>
            </Typography>

            <Stack margin="20px 0 10px">
              {formik.values.paymentMethod === "check" && (
                <Typography variant="h5" component="span">
                  <strong>Check:</strong> {formik.values.checkNumber}
                </Typography>
              )}
              <Typography variant="h5" component="span">
                <strong>Amount:</strong> $ {formik.values.paymentAmount}
              </Typography>
              <Typography variant="h5" component="span">
                <strong>Applied:</strong> $ {formik.values.applied}
              </Typography>
              <Typography variant="h5" component="span">
                <strong>Unapplied:</strong> ${" "}
                {formik.values.paymentAmount - formik.values.applied}
              </Typography>
            </Stack>
          </Box>

          {/* Grid here */}
          <PostPayGrid
            formik={formik}
            setShowDetail={setShowDetail}
            setDetailInfo={setDetailInfo}
          />
        </div>
      )}
    </Box>
  );
};

export default PostPayment;
