import { Box, CircularProgress, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { getData } from "../../config/axiosFunctions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const ManagePatient = () => {
  const [allPatient, setAllPatient] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllPatient = async () => {
    try {
      setIsLoading(true);
      const patientData = await getData("http://localhost:3004/patient");
      setAllPatient(patientData);
    } catch (error) {
      console.error("Error retrieving patient data:", error);
      // Handle the error appropriately (e.g., show an error message)
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "cellPhone", headerName: "Phone No", width: 150 },
    { field: "workPhone", headerName: "Work Phone", width: 150 },
    { field: "countryName", headerName: "Country", width: 150 },
    { field: "cityName", headerName: "City", width: 150 },
    { field: "stateName", headerName: "State", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        const { id } = params.row;
        return (
          <>
            <IconButton
              color="secondary"
              // onClick={() => handleEdit(id)}
              title="Edit"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="secondary"
              // onClick={() => handleDelete(id)}
              title="Delete"
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const rows = allPatient.map((el) => ({
    id: el.id,
    firstName: el.firstName,
    lastName: el.lastName,
    email: el.email,
    cellPhone: el.cellPhone,
    workPhone: el.workPhone,
    countryName: el.countryName,
    cityName: el.cityName,
    stateName: el.stateName,
  }));

  useEffect(() => {
    getAllPatient();
  }, []);
  return (
    <Box m={"20px"}>
      <Header title="MANAGE PATIENT" subtitle="Show all patients" />
      <Box height={"400px"} width={"100%"}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            columns={columns}
            rows={rows}
            pagination={true}
            pageSize={5}
          />
        )}
      </Box>
    </Box>
  );
};

export default ManagePatient;
