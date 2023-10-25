import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";

const PostPayGrid = ({ setDetailInfo, setShowDetail }) => {
  const { selectedClaim  , paymentDataForApi } = useSelector((state) => state.payment);
  console.log(selectedClaim, "selectedClaims");



  const Sum = (id, key) => {
    console.log("id" , id)
    let findClaim = paymentDataForApi.paymentClaimDto.find((val) => val.claimId === id);
    console.log("findClaim222", paymentDataForApi);
    if (findClaim) {
      const sum = findClaim.paymentDetailDto.reduce((accumulator, currentValue) => {
        return accumulator + currentValue[key];
      }, 0);
      return sum;
    }
    return 0;
  };

  const rows = selectedClaim.map((el) => ({
    id: el.id,
    patientFirstName: el.patientFirstName,
    patientLastName: el.patientLastName,
    patientAccountNo: el.patientAccountNo,
    claimNumber: el.claimNumber,
    billed: el.totalBilled,
    allowed: Sum(el.claimId  || el.id , "allowed"),
    paid: Sum(el.claimId  || el.id , "paid"),
    adjusted: Sum(el.claimId || el.id , "adjusted"),
    unpaid: 0,
    additionalActions: 0,
    balance: el.totalBilled,
    claimChargesDto: el.claimChargesDto,
  }));
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 3,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) =>
        `${params.row.patientFirstName} ${params.row.patientLastName}`,
    },
    {
      field: "patientAccountNo",
      headerName: "Account No",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "claimNumber",
      headerName: "Claim",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "tcn",
      headerName: "TCN",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "billed",
      headerName: "Billed",
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
      field: "additionalActions",
      headerName: "Additional Actions",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "balance",
      headerName: "Balance",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
  ];
  const SumForMainTotal = (key)=>{
      let total = rows.reduce((sum , current)=> sum + current[key] , 0)
      console.log("0" , total)
      return total
  }
  const totalRow = { id: "total", patientFirstName : 'Total', billed : SumForMainTotal("billed") , allowed: SumForMainTotal("allowed"), paid: SumForMainTotal("paid") , adjusted:SumForMainTotal("adjusted") ,unpaid :0 , additionalActions: 0 , balance: SumForMainTotal("balance")};

  const totalRows = [...rows , totalRow  ]
  // // payer columns
  // const payerColumns = [
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     flex: 3,
  //     minWidth: 150,
  //     headerAlign: "center",
  //     align: "center",
  //     valueGetter: (params) =>
  //       `${params.row.patientFirstName} ${params.row.patientLastName}`,
  //   },
  //   {
  //     field: "accountNo",
  //     headerName: "Account No",
  //     flex: 1,
  //     minWidth: 150,
  //     headerAlign: "center",
  //     align: "center",
  //   },

  //   {
  //     field: "claimNo",
  //     headerName: "Claim",
  //     flex: 1,
  //     minWidth: 150,
  //     headerAlign: "center",
  //     align: "center",
  //   },
  //   {
  //     field: "balance",
  //     headerName: "Balance",
  //     flex: 1,
  //     minWidth: 150,
  //     headerAlign: "center",
  //     align: "center",
  //   },
  //   {
  //     field: "payments",
  //     headerName: "Payments",
  //     flex: 1,
  //     minWidth: 150,
  //     headerAlign: "center",
  //     align: "center",
  //   },
  //   {
  //     field: "totalCharges",
  //     headerName: "Total Charges",
  //     flex: 1,
  //     minWidth: 150,
  //     headerAlign: "center",
  //     align: "center",
  //   },
  // ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        // rows={formik.values.isClaim === true ? rowsWithTotal : payerRows}
        rows={totalRows}
        // columns={formik.values.isClaim === true ? columns : payerColumns}
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
        //       style={{ width: "100%", textAlign: "center", padding: "16px" }}
        //     >
        //       {rowsWithTotal.length === 0 && "No Data Is Added"}
        //     </div>
        //   ),
        // }}
        onCellClick={(params) => {
          console.log("params.row.id" , params.row.id)
          if (params.row.id !== "total") {
            setDetailInfo(params.row.claimChargesDto);
            setShowDetail(true);
          }
        }}
      />
    </Box>
  );
};

export default PostPayGrid;
