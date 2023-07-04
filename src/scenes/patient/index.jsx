import React, { useState, useEffect } from 'react';
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { Box , Button } from "@mui/material";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

function generateRandom() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
  
}

// const columns = [
//   { field: "firstName", headerName: "firstName", flex: 0.5 },
//   // { field: "registrarId", headerName: "Patient ID" },
 
// ];

const columns = [
  { field: 'patientId', headerName: 'Account #',width: 100  },
  { field: 'firstName', headerName: 'First Name', width: 100 },
  { field: 'lastName', headerName: 'Last Name', width: 100 },
  { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
  { field: 'address', headerName: 'Insured', width: 150 },
  { field: 'homePhone', headerName: 'Balance due Pat', width: 150 },
  { field: 'cellPhone', headerName: 'Account Type', width: 150 }
 
  
];

const Patient = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch('https://localhost:7102/API/Patient')
        .then((response) => response.json())
        .then((json) => setTableData(json))
       

  }, [])

  console.log(tableData)

  return (
 
    <Box m="20px">
      <Header
        title="PATIENTS"
        subtitle="List of Patients"
      />
      <Button   to="/patientform" color="secondary" variant="contained">
Create New Patient
</Button>
<Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={tableData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}       
          getRowId={(row) =>  generateRandom()}
        />
      </Box>
    </Box>

  )
}

export default Patient