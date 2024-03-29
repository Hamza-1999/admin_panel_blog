import React from "react";
import { useEffect } from "react";
import { getData } from "../../../config/axiosFunctions";
import path from "../../../config/apiUrl";
import { useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Diagnosis = ({
  formik,
  handleClose,
  icdIdentifier,
  diagnoseTable,
  handleInsDiagnosis,
}) => {
  const [diagnosisData, setDiagnosisData] = useState([]);

  const fetchAllDiagnosis = async () => {
    try {
      const response = await axios.get(`${path}/ct-diagnosisCode`);
      console.log(response, "response");
      if (response.status === 200) {
        const data = response.data;
        let usedDiagnose = formik.values?.insClaimInfoDetailDto?.filter(
          (e) => e.insClaimInfoCodeId === diagnoseTable
        );
        for (let i = 0; i < usedDiagnose.length; i++) {
          const element = usedDiagnose[i];
          let findIndex = data.result.findIndex(
            (e) => e.diagnosisCodeId === element.insClaimInfoCTId
          );
          if (findIndex !== -1) {
            data?.result?.splice(findIndex, 1);
          }
        }
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
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "diagnosisDescription",
      headerName: "Description",
      minWidth: 100,
      flex: 3,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "diagnosisCode",
      headerName: "Description",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];

  useEffect(() => {
    console.log("diagnoseTable", diagnoseTable);
    fetchAllDiagnosis();
  }, []);

  const handleDiagnosis = (val, field) => {
    console.log(val, "diagnosis values");
    const fieldId = field;
    const descriptionFieldName = `icd_Description_${icdIdentifier}`;
    const icdCode = `icD_Code_${icdIdentifier}`;
    formik.setValues({
      ...formik.values,
      [fieldId]: val.id,
      [descriptionFieldName]: val.diagnosisDescription,
      [icdCode]: val.diagnosisCode,
    });

    handleClose();
  };

  useEffect(() => {}, []);

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
          onCellClick={(params) => {
            formik.values.claimTypeId === 1
              ? handleDiagnosis(params.row, `icD_${icdIdentifier}`)
              : handleInsDiagnosis(params.row, diagnoseTable);
          }}
        />
      </Box>
    </>
  );
};

export default Diagnosis;
