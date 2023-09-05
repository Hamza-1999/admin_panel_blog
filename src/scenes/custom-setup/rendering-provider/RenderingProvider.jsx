import axios from "axios";
import React, { useEffect, useState } from "react";
import path from "../../../config/apiUrl";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const RenderingProvider = ({ handleClose, setValues, setClaimIds }) => {
  const [renderingProviderInfo, setRenderingProviderInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRenderingProvider = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${path}/renderingProvider`);
      if (response.status === 200) {
        const data = await response.data;
        setRenderingProviderInfo(data.result);
      } else {
        setRenderingProviderInfo([]);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const rows = renderingProviderInfo.map((el) => ({
    id: el.renderingProviderId,
    renderingProviderFirstName: el.renderingProviderFirstName,
    renderingProviderLastName: el.renderingProviderLastName,
    renderingProviderNPINo: el.renderingProviderNPINo,
    renderingProviderSequenceNo: el.renderingProviderSequenceNo,
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
        `${params.row.renderingProviderFirstName} ${params.row.renderingProviderLastName}`,
    },
    {
      field: "renderingProviderNPINo",
      headerName: "NPI",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "renderingProviderSequenceNo",
      headerName: "Seq #",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
  ];

  useEffect(() => {
    fetchRenderingProvider();
  }, []);

  const handleRenderingProvider = (val) => {
    console.log(val, "billing vals");
    setClaimIds((prevVals) => ({
      ...prevVals,
      renderingProviderId: val.id,
    }));
    setValues((prevVals) => ({
      ...prevVals,
      renderingProviderName: `${val.renderingProviderFirstName} ${val.renderingProviderLastName} (${val.renderingProviderSequenceNo})`,
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
              Rendering Provider
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
                  {renderingProviderInfo.length === 0 && "No Data Is Added"}
                </div>
              ),
            }}
            onCellClick={(params) => handleRenderingProvider(params.row)}
          />
        </>
      )}
    </Box>
  );
};

export default RenderingProvider;
