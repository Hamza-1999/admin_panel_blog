import React from "react";
import { useEffect } from "react";
import { getData } from "../../../config/axiosFunctions";
import path from "../../../config/apiUrl";
import { useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Diagnosis = ({ formik, handleClose, icdIdentifier }) => {
  const [diagnosisData, setDiagnosisData] = useState([]);

  const fetchAllDiagnosis = async () => {
    try {
      const response = await axios.get(`${path}/ct-diagnosisCode`);
      console.log(response, "response");
      if (response.status === 200) {
        const data = response.data;
        setDiagnosisData(data.result);
      } else {
        setDiagnosisData([]);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const rows = diagnosisData.map((el) => ({
    id: el.diagnosisCodeId,
    diagnosisDescription: el.diagnosisDescription,
    codeType: el.codeType,
    diagnosisCode: el.diagnosisCode,
  }));

  const columns = [
    {
      field: "codeType",
      headerName: "Code Type",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "diagnosisDescription",
      headerName: "Description",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "diagnosisCode",
      headerName: "Description",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
  ];

  useEffect(() => {
    fetchAllDiagnosis();
  }, []);

  const handleDiagnosis = (val, field) => {
    console.log(val, "diagnosis values");
    const fieldName = field;
    const descriptionFieldName = `icd_${icdIdentifier}_Description`;
    formik.setValues({
      ...formik.values,
      [fieldName]: val.diagnosisCode,
      [descriptionFieldName]: val.diagnosisDescription,
    });

    handleClose();
  };
  return (
    <>
      <Box sx={{ height: "400px", width: "100%" }}>
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
          onCellClick={(params) =>
            handleDiagnosis(params.row, `icD_${icdIdentifier}`)
          }
        />
      </Box>
    </>
  );
};

export default Diagnosis;
