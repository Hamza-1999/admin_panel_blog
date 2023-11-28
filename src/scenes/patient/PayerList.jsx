// import React, { useState } from "react";
import { useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPayerAction } from "../../features/actions/payerAction";
import { DataGrid } from "@mui/x-data-grid";

const PayerList = ({ handleSelectPayer, handlePaymentBy, modalFor }) => {
  const dispatch = useDispatch();
  const { getAllPayer, loading } = useSelector((state) => state.payer);

  const rows = getAllPayer.result?.map((el) => ({
    id: el.payerId,
    payerName: el.payerName,
    planName: el.planName,
    payerAddress: el.payerAddress,
    payerSequenceNo: el.payerSequenceNo,
  }));

  useEffect(() => {
    dispatch(getPayerAction());
  }, [dispatch]);

  const columns = [
    {
      field: "payerName",
      headerName: "Payer Name",
      // width: 320,
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "planName",
      headerName: "Plan Name",
      // width: 320,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "payerAddress",
      headerName: "Payer Address",
      // width: 320,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <Box>
      <Typography variant="h6" component={"h1"} fontSize={"1.6rem"}>
        Payer List
        <Box component={"hr"} />
      </Typography>

      <Box height={400} marginTop={4}>
        {loading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : rows && rows.length > 0 ? (
          <DataGrid
            rows={rows}
            columns={columns}
            scrollbarSize={5}
            disableSelectionOnClick
            onCellClick={(param) =>
              modalFor === "payment"
                ? handlePaymentBy(param.row)
                : handleSelectPayer(param.row)
            }
          />
        ) : (
          <Typography variant="body1">No data available.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default PayerList;
