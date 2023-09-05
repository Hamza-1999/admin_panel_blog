import axios from "axios";
import React from "react";
import path from "../../../config/apiUrl";
import { useState } from "react";
import { useEffect } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const InsuredParty = ({ handleClose, setClaimIds, setValues }) => {
  const [insuredPartyDetail, setInsuredPartyDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(insuredPartyDetail, "insuredParty55");

  const fetchPayerInfo = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${path}/payerInfo`);
      if (response.status === 200) {
        const data = await response.data;
        setInsuredPartyDetail(data.result);
      } else {
        setInsuredPartyDetail([]);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const rows = insuredPartyDetail.map((el) => ({
    id: el.payerInfoId,
    payerInfoGroupId: el.payerInfoGroupId,
    payerInfoPayerName: el.payerInfoPayerName,
    payerInfoMemberId: el.payerInfoMemberId,
    payerInfoCopayAmount: el.payerInfoCopayAmount,
    payerInfoSequenceNumber: el.payerInfoSequenceNumber,
    payerInfoPriorityName: el.payerInfoPriorityName,
    payerInfoPolicyType: el.payerInfoPolicyType,
  }));

  const columns = [
    {
      field: "payerInfoPayerName",
      headerName: "Account #",
      minWidth: 200,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "payerInfoPriorityName",
      headerName: "Priority Type",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "payerInfoPolicyType",
      headerName: "Relation to Patient",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "payerInfoSequenceNumber",
      headerName: "City",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
  ];

  useEffect(() => {
    fetchPayerInfo();
  }, []);

  const handlePayerInfo = (val) => {
    console.log(val, "billing vals");
    setClaimIds((prevVals) => ({
      ...prevVals,
      payerInfoId: val.id,
    }));
    setValues((prevVals) => ({
      ...prevVals,
      primaryPayerInsuranceName: `${val.payerInfoPayerName} (${val.payerInfoSequenceNumber})`,
      primaryPayerMemberId: val.payerInfoMemberId,
      primaryPayerPolicyType: val.payerInfoPolicyType,
      primaryPayerCopayDue: val.payerInfoCopayAmount,
      primaryPayerGroupId: val.payerInfoGroupId,
    }));
    handleClose();
  };
  return (
    <Box sx={{ width: "100%" }}>
      {isLoading ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Stack
            sx={{
              borderBottom: "1px solid grey",
              padding: "10px 20px 15px",
            }}
          >
            <Typography variant="h3" component={"h3"}>
              Insurance Details
            </Typography>
          </Stack>
          <DataGrid
            rows={rows}
            columns={columns}
            sx={{
              "& .header-bg": {
                backgroundColor: "lightgrey",
              },
            }}
            autoHeight
            components={{
              NoRowsOverlay: () => (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "16px",
                  }}
                >
                  {insuredPartyDetail.length === 0 && "No Data Is Added"}
                </div>
              ),
            }}
            onCellClick={(params) => handlePayerInfo(params.row)}
          />
        </>
      )}
    </Box>
  );
};

export default InsuredParty;
