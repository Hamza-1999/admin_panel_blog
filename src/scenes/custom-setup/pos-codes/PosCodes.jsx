import React from "react";
import { useState } from "react";
import path from "../../../config/apiUrl";
import axios from "axios";
import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const PosCodes = ({ setProcedureValues, handleClose }) => {
  const [posDetail, setPosDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosCodes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${path}/PosCode`);
      if (response.status === 200) {
        const data = await response.data;
        setPosDetail(data.result);
      } else {
        setPosDetail([]);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const rows = posDetail.map((el) => ({
    id: el.posCodeId,
    posCode: el.posCode,
    posDescription: el.posDescription,
  }));

  const columns = [
    {
      field: "posCode",
      headerName: "Codes",
      minWidth: 100,
      flex: 2,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "posDescription",
      headerName: "Description",
      minWidth: 100,
      flex: 3,
      headerAlign: "left",
      align: "left",
      headerClassName: "header-bg",
    },
  ];

  useEffect(() => {
    fetchPosCodes();
  }, []);

  const handlePoscode = (val) => {
    setProcedureValues((prevVals) => ({
      ...prevVals,
      posCodeId: val.id,
      posCode: val.posCode,
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
                style={{ width: "100%", textAlign: "center", padding: "16px" }}
              >
                {posDetail.length === 0 && "No Data Is Added"}
              </div>
            ),
          }}
          onCellClick={(params) => handlePoscode(params.row)}
        />
      )}
    </Box>
  );
};

export default PosCodes;
