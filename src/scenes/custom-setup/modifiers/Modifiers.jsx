import axios from "axios";
import React, { useEffect, useState } from "react";
import path from "../../../config/apiUrl";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Modifiers = ({ setProcedureValues, identifier, handleClose }) => {
  const [modifierDetail, setModifierDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchModifier = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${path}/ct-modifierCode`);
      if (response.status === 200) {
        const data = await response.data;
        setModifierDetail(data.result);
      } else {
        setModifierDetail([]);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const rows = modifierDetail.map((el) => ({
    id: el.modifierId,
    modifierCode: el.modifierCode,
    modifierDescription: el.modifierDescription,
  }));

  const columns = [
    {
      field: "modifierCode",
      headerName: "Codes",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "modifierDescription",
      headerName: "Description",
      minWidth: 290,
      flex: 1,
      headerAlign: "left",
      align: "left",
      headerClassName: "header-bg",
    },
  ];

  useEffect(() => {
    fetchModifier();
  }, []);

  const handleModifier = (val, identifier) => {
    const fieldId = `mod_${identifier}`;
    const fieldCode = `mod_Code${identifier}`;
    setProcedureValues((prevVals) => ({
      ...prevVals,
      [fieldId]: val.id,
      [fieldCode]: val.modifierCode,
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
                {modifierDetail.length === 0 && "No Data Is Added"}
              </div>
            ),
          }}
          onCellClick={(params) => handleModifier(params.row, identifier)}
        />
      )}
    </Box>
  );
};

export default Modifiers;
