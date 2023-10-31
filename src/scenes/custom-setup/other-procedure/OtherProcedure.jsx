import React from "react";
import { useEffect } from "react";
import { getData } from "../../../config/axiosFunctions";
import path from "../../../config/apiUrl";
import { useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const OtherProcdure = ({
  formik,
  handleClose,
  icdIdentifier,
  diagnoseTable,
  handleInsDiagnosis,
}) => {
  const [diagnosisData, setDiagnosisData] = useState([]);

  const fetchAllDiagnosis = async (endPoint) => {
    try {
      const response = await axios.get(`${path}/${endPoint}`);
      console.log(response, "response");
      if (response.status === 200) {
        const data = response.data;
        console.log("data" , data)
        let usedDiagnose = formik.values?.insClaimInfoDetailDto?.filter((e)=> e.insClaimInfoCodeId === diagnoseTable)
        console.log("usedDiagnose" , usedDiagnose)
        for (let i = 0; i < usedDiagnose.length; i++) {
          const element = usedDiagnose[i];
          let findIndex = data.result.findIndex((e)=> e?.occurrenceId || e?.valueId || e?.conditionCodeId || e?.occurrenceSpanId || e?.otherProcedureId === element.insClaimInfoCTId)
          console.log("findIndex" , findIndex , data.result)
          if (findIndex !== -1 ) {
            data?.result?.splice(findIndex , 1)
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


  const getEndPointOfOtherProcedure = (claimId) =>{
    if (claimId === 4) {
        return "ct-otherProcedure"
    } else if (claimId === 5) {
        return "ct-occurrenceSpan"
    }else if (claimId === 6) {
        return "ct-occurrence"
    }else if (claimId === 7) {
        return "ct-value"
    }else if (claimId === 8) {
        return "ct-conditionCode"
    }
  }
  const rows = diagnosisData.map((el) => ({
    id: el?.occurrenceId || el?.valueId || el?.conditionCodeId || el?.occurrenceSpanId || el?.otherProcedureId,
    diagnosisDescription: el?.occurrenceDescription || el?.valueDescription || el?.conditionDescription || el?.occurrenceSpanDescription || el?.otherProcedureDescription,
    codeType: el?.occurrenceCode || el?.valueCode || el?.conditionCode || el?.occurrenceSpanCode || el?.otherProcedureCode,
    diagnosisCode: null,
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
  ];

  useEffect(() => {
    let currentEndPoint = getEndPointOfOtherProcedure(diagnoseTable)
    console.log("currentEndPoint" , currentEndPoint)
    fetchAllDiagnosis(currentEndPoint);
  },[]);

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
            formik.values.isProfessional === 1
              ? handleDiagnosis(params.row, `icD_${icdIdentifier}`)
              : handleInsDiagnosis(params.row , diagnoseTable);
          }}
        />
      </Box>
    </>
  );
};

export default OtherProcdure;
