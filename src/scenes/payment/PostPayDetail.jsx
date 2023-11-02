import { Edit } from "@mui/icons-material";
import { Box, Button, Stack, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { setPaymentDataForApi } from "../../features/slice/PaymentSlice";
import React, { useEffect, useState } from "react";
import CustomModal from "../../components/CustomModal";
import EditPayDetail from "./EditPayDetail";
import { useDispatch, useSelector } from "react-redux";

const PostPayDetail = ({ detailInfo, setShowDetail, setPaymentDetailDto }) => {

  const [openEditModal, setOpenEditModal] = useState(false);
  const [editedData, setEditedData] = useState(null);
  console.log(detailInfo, "checkEditedDataInfo");
  const dispatch = useDispatch()
  //get paymentDataForApi Value from redux
  let { paymentDataForApi } = useSelector((state) => state.payment)

  const formattedData = detailInfo.map((item) => ({
    id: item.claimChargesId,
    claimInfoId: item.claimInfoId,
    procedureCode: item.procedureCode,
    amount: item.amountBilled,
    fromDate: item.fromDate,
    startBalance: item.amountBilled,
    allowed: 0,
    paid: 0,
    adjusted: 0,
    unpaid: 0,
    deductible: 0,
    claimStatus: item.claimStatus,
    endBalance: item.amountBilled,
    // claimInfoId: item.claimInfoId,
  }));

  // rows
  const [rowData, setRowData] = useState(formattedData);
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
      field: "deductible",
      headerName: "Deductible",
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
    console.log(row, "check selectedrow edit");
    setEditedData(row);
    setOpenEditModal(true);
  };

  const handleSaveEdit = (updatedData) => {
    console.log(updatedData, "all updatedData");
    // Update the original data with the edited data
    console.log(rowData, "rowData3333");
    const updatedDetailInfo = rowData.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    console.log(updatedDetailInfo, "updatedInfo17");
    setRowData([...updatedDetailInfo]);
    console.log(rowData, "allRows90");
    setOpenEditModal(false);
  };

  // handle done
  const handleDone = () => {
    console.log("rowData", rowData);

    let inputData = paymentDataForApi;
    let rowDataId = rowData[0].claimInfoId;
    console.log("work");
    let findClaimId = inputData.paymentClaimDto.findIndex(
      (val) => val.claimId === rowDataId
    );
    console.log("findClaimId", inputData.paymentClaimDto[findClaimId]);

    // Check if findClaimId is a valid index
    if (findClaimId !== -1) {
      let updatedPaymentClaimDto = [...inputData.paymentClaimDto];
      updatedPaymentClaimDto[findClaimId] = {
        ...updatedPaymentClaimDto[findClaimId],
        paymentDetailDto: rowData,
      };


      let updatedInputData = {
        ...inputData,
        paymentClaimDto: updatedPaymentClaimDto,
      };

      dispatch(setPaymentDataForApi(updatedInputData));
    }
    setPaymentDetailDto(rowData);
    setShowDetail(false);

//   };


  };
useEffect(()=>{
//check first if the paymentClaimDto key paymentDetail is not null then we will assign updated value
  let claimInfoId = formattedData[0].claimInfoId
  console.log("claimInfoId" , claimInfoId);
  //find Index in paymentDataForApi of specific clain payment
  let paymentDetailDtoIndex = paymentDataForApi.paymentClaimDto.findIndex((val)=> val.claimId == claimInfoId)
  if (paymentDetailDtoIndex !== -1) {
    let paymentDetailDtoLength =  paymentDataForApi.paymentClaimDto[paymentDetailDtoIndex].paymentDetailDto.length
/// if length is zero so we asgin formatted data as a row data
    if (paymentDetailDtoLength === 0) {
        setRowData(formattedData)
    }
    /// if both length equal so we set paymentdataForApi
    else if (paymentDetailDtoLength === formattedData.length) {
       setRowData(paymentDataForApi.paymentClaimDto[paymentDetailDtoIndex].paymentDetailDto)
    }else if(formattedData.length > paymentDetailDtoLength){
      let formattedData = [...rowData]
      let valueNotEdit = []
      let formattedDataPaymentDetail = paymentDataForApi.paymentClaimDto[paymentDetailDtoIndex].paymentDetailDto
      for (let i = 0; i < formattedData.length; i++) {
        const element = formattedData[i];
          let found =  formattedDataPaymentDetail.find((val)=> val.id == element.id)
          if (!found) {
            valueNotEdit.push(element)
          }    
      }
     let finalUpdatedValue = formattedDataPaymentDetail.concat(valueNotEdit)
      console.log("object mmm" , finalUpdatedValue);
      setRowData(finalUpdatedValue)
    }
  }
},[])
  return (
    <>
      <CustomModal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
      >
        <EditPayDetail
          data={editedData}
          onSave={handleSaveEdit}
          handleClose={() => setOpenEditModal(false)}
        />
      </CustomModal>
      <div style={{ width: "100%" }}>
        <Box>
          <Button variant="outlined" onClick={handleDone}>
            Done
          </Button>
        </Box>

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
        // components={{
        //   NoRowsOverlay: () => (
        //     <div
        //       style={{
        //         width: "100%",
        //         textAlign: "center",
        //         padding: "16px",
        //       }}
        //     >
        //       No Data Is Added
        //     </div>
        //   ),
        // }}
        />
      </div>
    </>
  );
};

export default PostPayDetail;
