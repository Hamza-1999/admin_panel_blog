import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import path from "../../../config/apiUrl";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const BillingProvider = ({ handleClose, setValues, setClaimIds }) => {
  const [billingProviderInfo, setBillingProviderInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBillingProvider = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${path}/billingProvider`);
      if (response.status === 200) {
        const data = await response.data;
        setBillingProviderInfo(data.result);
      } else {
        setBillingProviderInfo([]);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const rows = billingProviderInfo.map((el) => ({
    id: el.billingProviderId,
    billingProviderFirstName: el.billingProviderFirstName,
    billingProviderLastName: el.billingProviderLastName,
    billingProviderNPINo: el.billingProviderNPINo,
    billingProviderSequenceNo: el.billingProviderSequenceNo,
  }));

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 250,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      valueGetter: (params) =>
        `${params.row.billingProviderFirstName} ${params.row.billingProviderLastName}`,
    },
    {
      field: "billingProviderNPINo",
      headerName: "NPI",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "billingProviderSequenceNo",
      headerName: "Seq #",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
  ];

  useEffect(() => {
    fetchBillingProvider();
  }, []);

  const handleBillingProvider = (val) => {
    console.log(val, "billing vals");

    setClaimIds((prevVals) => ({
      ...prevVals,
      billingProviderId: val.id,
    }));

    setValues((prevVals) => ({
      ...prevVals,
      billingProviderName: `${val.billingProviderFirstName} ${val.billingProviderLastName} (${val.billingProviderSequenceNo})`,
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
              Billing Provider
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
                  {billingProviderInfo.length === 0 && "No Data Is Added"}
                </div>
              ),
            }}
            onCellClick={(params) => handleBillingProvider(params.row)}
          />
        </>
      )}
    </Box>
  );
};

export default BillingProvider;
