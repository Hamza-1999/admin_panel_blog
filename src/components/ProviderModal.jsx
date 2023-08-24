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
  setSelectBill,
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
    providerSequenceNo: el.providerSequenceNo,
    providerFirstName: el.providerFirstName,
    providerLastName: el.providerLastName,
    providerOrganization: el.providerOrganization,
  }));

  // const filteredRow = rows?.filter((ro) =>
  //   ro.practiceName.toLowerCase().includes(searchPractice.toLowerCase())
  // );

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 160,
      headerAlign: "center",
      filterable: true,
      align: "center",
      valueGetter: (params) => {
        const { providerOrganization, providerFirstName, providerLastName } =
          params.row;
        if (providerOrganization) {
          return providerOrganization;
        }
        return `${providerFirstName} ${providerLastName}`;
      },
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
    console.log(val.formattedValue, "val11");
    const fieldValue =
      fieldToSet === "billingProviderName"
        ? val.formattedValue
        : val.formattedValue;
    setFieldValue(fieldToSet, fieldValue);

    if (fieldToSet === "billingProviderName") {
      setSelectBill({
        billProv: val.formattedValue,
        seqNo: val.row.providerSequenceNo,
      });
    }
    if (fieldToSet === "eligibilityProviderName") {
      setSelectElibility({
        eligProv: val.formattedValue,
        seqNo: val.row.providerSequenceNo,
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
