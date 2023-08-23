import { Box, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProviderAction } from "../features/actions/providerAction";
import { Formik } from "formik";

const ProviderModal = ({
  handleClose,
  setFieldValue,
  fieldToSet,
  setSelectBil,
  setSelectElibility,
}) => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const { getProviders, loading } = useSelector((state) => state.provider);
  console.log(getProviders.result, "getting provider Data11");
  useEffect(() => {
    dispatch(getProviderAction());
  }, [dispatch]);

  if (
    !getProviders ||
    !getProviders.result ||
    getProviders.result?.length === 0
  ) {
    return (
      <Box m={"20px"}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <div>No patient data available.</div>
        )}
      </Box>
    );
  }

  const rows = getProviders.result?.map((el) => ({
    id: el.providerId,
    billingProviderName: el.billingProviderName,
    eligibilityProviderName: el.eligibilityProviderName,
    providerSequenceNo: el.providerSequenceNo,
  }));

  // const filteredRow = rows?.filter((ro) =>
  //   ro.practiceName.toLowerCase().includes(searchPractice.toLowerCase())
  // );

  const columns = [
    {
      field: "billingProviderName",
      headerName: "Billing Name",
      minWidth: 160,
      headerAlign: "center",
      filterable: true,
      align: "center",
    },
    {
      field: "eligibilityProviderName",
      headerName: "Eligibility Name",
      minWidth: 160,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "providerSequenceNo",
      minWidth: 160,
      headerName: "Seq#",
      headerAlign: "center",
      align: "center",
    },
  ];

  const handleCellClick = (val) => {
    console.log(val.row.billingProviderName, "val of providr");
    const fieldValue =
      fieldToSet === "billingProviderName"
        ? `${val.row.billingProviderName}`
        : `${val.row.eligibilityProviderName}`;
    setFieldValue(fieldToSet, fieldValue);
    // setFieldValue(fieldToSet, fieldValue);

    if (fieldToSet === "billingProviderName") {
      setSelectBil({
        billProv: val.row.billingProviderName,
        seqNo: val.row.providerSequenceNo,
      });
    }

    if (fieldToSet === "eligibilityProviderName") {
      setSelectElibility({
        seqNo: val.row.providerSequenceNo,
        eligProv: val.row.eligibilityProviderName,
      });
    }

    handleClose();
  };
  return (
    <Box margin={"20px"}>
      <Box
        sx={{
          height: "400px",
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSize={5}
          disableSelectionOnClick
          onCellClick={(params) => handleCellClick(params)}
        />
      </Box>
    </Box>
  );
};

export default ProviderModal;
