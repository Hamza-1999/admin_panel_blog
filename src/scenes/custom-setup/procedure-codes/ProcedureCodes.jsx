import axios from "axios";
import React, { useEffect, useState } from "react";
import path from "../../../config/apiUrl";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const ProcedureCodes = ({ setProcedureValues, handleClose }) => {
  const [procedureDetail, setProcedureDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(procedureDetail, "pro details");
  const fetchProcedureCode = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${path}/ct-procedureCodes`);
      if (response.status === 200) {
        const data = await response.data;
        setProcedureDetail(data.result);
      } else {
        setProcedureDetail([]);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const rows = procedureDetail.map((el) => ({
    id: el.procedureCodeId,
    procedureCode: el.procedureCode,
    procedureDescription: el.procedureDescription,
    price: el.price,
    units: el.units === null ? 1 : el.units,
  }));

  const columns = [
    {
      field: "procedureCode",
      headerName: "Codes",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "procedureDescription",
      headerName: "Description",
      minWidth: 100,
      flex: 3,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
  ];

  useEffect(() => {
    fetchProcedureCode();
  }, []);

  const handleProcedureDetail = (val) => {
    console.log(val, "procedure, Val");
    // setProcedureAmount(val.price * val.units);
    setProcedureValues((prevValues) => ({
      ...prevValues,
      procedureCodeId: val.id,
      procedureCode: val.procedureCode,
      unitPrice: val.price,
      units: Number(val.units),
      amountBilled: val.price * val.units,
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
                {procedureDetail.length === 0 && "No Data Is Added"}
              </div>
            ),
          }}
          onCellClick={(params) => handleProcedureDetail(params.row)}
        />
      )}
    </Box>
  );
};

export default ProcedureCodes;
