import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import PostPayGrid from "./PostPayGrid";
import PostPayDetail from "./PostPayDetail";
import path from "../../config/apiUrl";
import axios from "axios";
import CustomModal from "../../components/CustomModal";
import MultipleClaims from "./MultipleClaims";
import { useSelector } from "react-redux";

const PostPayment = ({
  // postPaymentData,
  setShowPostPay,
  setApplyEob,
  setPaymentDetailDto,
  formik,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detailInfo, setDetailInfo] = useState([]);
  console.log(detailInfo, "detailInfoRows");
  const [multipleClaimData, setMultipleClaimData] = useState([]);
  const [openMultiClaimMod, setOpenMultiClaimMod] = useState(false);
  const [appliedValue , setAppliedValue] = useState(0)

  // const [isLoading, setIsLoading] = useState();
  // const [selectedRowData, setSelectedRowData] = useState([]);
  let {paymentDataForApi } = useSelector((state)=> state.payment)
  const handleCancel = () => {
    const conform = window.confirm("Are you sure you want to cancel?");
    if (conform) {
      formik.resetForm();
      setShowPostPay(false);
      setApplyEob(false);
    }
  };

  const handleGetMultiClaims = async () => {
    const seqNo = formik.values.payerSequenceNo;
    const url = `${path}/payerClaimDetail/SequenceNo?sequenceNo=${seqNo}`;

    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        console.log(response, "getMultiClaimResponse");
        const multiClaimsData = response.data;
        setMultipleClaimData(multiClaimsData);
        console.log(multiClaimsData, "get multi claims data");
      } else {
        setMultipleClaimData([]);
      }
    } catch (error) {
      throw error;
    }

    setOpenMultiClaimMod(true);
  };
const sumAppliedValue = ()=>{
  let total = 0
  if (paymentDataForApi.paymentClaimDto) {
    for (let i = 0; i < paymentDataForApi.paymentClaimDto.length; i++) {
      const element = paymentDataForApi.paymentClaimDto[i];
         let totalofSingleClaim = element.paymentDetailDto.reduce((sum , current)=> sum + current.allowed
         , 0)
         total += totalofSingleClaim
    }
  }
  setAppliedValue(total)
}
  useEffect(()=>{
    sumAppliedValue()
  },[paymentDataForApi])
  return (
    <Box margin="20px">
      <Header title="New Payment" subtitle="" />

      {/* custom modal for multiple claims */}
      <CustomModal
        open={openMultiClaimMod}
        handleClose={() => setOpenMultiClaimMod(false)}
      >
        <MultipleClaims
         
          multipleClaimData={multipleClaimData}
          handleClose={() => setOpenMultiClaimMod(false)}
        />
      </CustomModal>
      {showDetail ? (
        <Box sx={{ width: "100%" }}>
          <PostPayDetail
           
            formik={formik}
            detailInfo={detailInfo}
            setShowDetail={setShowDetail}
            setPaymentDetailDto={setPaymentDetailDto}
          />
        </Box>
      ) : (
        <div>
          <Stack flexDirection={"row"} alignItems="center">
            <CustomButton
              margin="0 20px 0"
              variant="contained"
              width="200px"
              handleClick={formik.handleSubmit}
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
              {formik.values.paymentMethodId === "3"
                ? formik.values.creditCardTypeId
                : formik.values.paymentMethodId === "1"
                ? "Check"
                : "EFT"}{" "}
              from <span>{formik.values.paymentBy}</span>
            </Typography>

            <Stack margin="20px 0 10px">
              {formik.values.paymentMethodId === "1" && (
                <Typography variant="h5" component="span">
                  <strong>Check:</strong> {formik.values.checkNumber}
                </Typography>
              )}
              <Typography variant="h5" component="span">
                <strong>Amount:</strong> $ {formik.values.paymentAmount}
              </Typography>
              <Typography variant="h5" component="span">
                <strong>Applied:</strong> $ {appliedValue}
              </Typography>
              <Typography variant="h5" component="span">
                <strong>Unapplied:</strong> ${" "}
                {formik.values.paymentAmount - appliedValue}
              </Typography>
            </Stack>

            {/* get payer  */}

            <Stack flexDirection="row" alignItems="center">
              <Typography marginRight="15px">Add Payment For:</Typography>
              <CustomButton
                margin="15px 0 "
                variant="contained"
                width="150px"
                handleClick={handleGetMultiClaims}
              >
                Add Claims
              </CustomButton>
            </Stack>
          </Box>

          {/* Grid here */}
          <PostPayGrid
            setShowDetail={setShowDetail}
            setDetailInfo={setDetailInfo}
          />
          {/* <div>Work</div> */}
        </div>
      )}
    </Box>
  );
};

export default PostPayment;
