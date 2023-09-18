import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import path from "../../../config/apiUrl";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const TosCodes = ({ handleClose, setProcedureValues }) => {
  const [tosDetail, setTosDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTosCodes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${path}/ct-tosCode`);
      if (response.status === 200) {
        const data = await response.data;
        setTosDetail(data.result);
      } else {
        setTosDetail([]);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const rows = tosDetail.map((el) => ({
    id: el.tosCodeId,
    tosCode: el.tosCode,
    tosDescription: el.tosDescription,
  }));

  const columns = [
    {
      field: "tosCode",
      headerName: "Codes",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "tosDescription",
      headerName: "Description",
      minWidth: 290,
      flex: 1,
      headerAlign: "left",
      align: "left",
      headerClassName: "header-bg",
    },
  ];

  useEffect(() => {
    fetchTosCodes();
  }, []);

  const handleTosDetails = (val) => {
    setProcedureValues((prevValues) => ({
      ...prevValues,
      tosCodeId: val.id,
      tosCode: val.tosCode,
    }));

    handleClose();
  };
  return (
    <Box sx={{ width: "400px" }}>
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
                {tosDetail.length === 0 && "No Data Is Added"}
              </div>
            ),
          }}
          onCellClick={(params) => handleTosDetails(params.row)}
        />
      )}
    </Box>
  );
};

export default TosCodes;
