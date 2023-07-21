import { Box, CircularProgress, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { getData } from "../../config/axiosFunctions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import path from "../../config/apiUrl";
const ManagePatient = () => {
  const [allPatient, setAllPatient] = useState([]);
  console.log(allPatient, "all patient data");
  const [isLoading, setIsLoading] = useState(false);

  const getAllPatient = async () => {
    try {
      setIsLoading(true);
      const patientData = await getData(`${path}/test-patient`);
      // console.log(patientData, "get patient Data");
      setAllPatient(patientData.result);
    } catch (error) {
      console.error("Error retrieving patient data:", error);
      // Handle the error appropriately (e.g., show an error message)
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "drivingLicense", headerName: "Driving License", width: 150 },
    { field: "genderName", headerName: "Gender", width: 150 },
    {
      field: "sexualOrientationName",
      headerName: "Sexual Orientation",
      width: 150,
    },
    { field: "maritalStatusName", headerName: "Maritale Status", width: 150 },
    { field: "raceName", headerName: "Race Status", width: 150 },
    { field: "accountTypeName", headerName: "Account Type", width: 150 },
    { field: "ethnicityName", headerName: "Ethnicity Status", width: 150 },
    {
      field: "employmentStatusName",
      headerName: "Employement Status",
      width: 150,
    },
    { field: "referralSourceName", headerName: "Refrence", width: 150 },
    {
      field: "relationShipToPatientName",
      headerName: "Relation to patient",
      width: 150,
    },
    { field: "studentStatusName", headerName: "Student Status", width: 150 },
    { field: "cellPhone", headerName: "Phone No", width: 150 },
    { field: "homePhone", headerName: "Home Phone", width: 150 },
    { field: "workPhone", headerName: "Work Phone", width: 150 },
    { field: "ext", headerName: "Ext", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "countryName", headerName: "Country", width: 150 },
    { field: "cityName", headerName: "City", width: 150 },
    { field: "stateName", headerName: "State", width: 150 },
    { field: "residenceName", headerName: "Residence Type", width: 150 },
    { field: "zipCode", headerName: "Zip Code", width: 150 },
    {
      field: "emergencyContactFirstName",
      headerName: "Emergency Contact First Name",
      width: 150,
    },
    {
      field: "emergencyContactLastName",
      headerName: "Emergency Contact State",
      width: 150,
    },
    {
      field: "emergencyContactZipCode",
      headerName: "Emergency Contact Zip Code",
      width: 150,
    },
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
    id: el.patientId,
    firstName: el.firstName,
    lastName: el.lastName,
    email: el.email,
    drivingLicense: el.drivingLicense,
    genderName: el.genderName,
    sexualOrientationName: el.sexualOrientationName,
    raceName: el.raceName,
    accountTypeName: el.accountTypeName,
    ethnicityName: el.ethnicityName,
    maritalStatusName: el.maritalStatusName,
    employmentStatusName: el.employmentStatusName,
    referralSourceName: el.referralSourceName,
    relationShipToPatientName: el.relationShipToPatientName,
    studentStatusName: el.studentStatusName,
    cellPhone: el.cellPhone,
    workPhone: el.workPhone,
    homePhone: el.homePhone,
    ext: el.ext,
    address: el.address,
    countryName: el.countryName,
    cityName: el.cityName,
    stateName: el.stateName,
    zipCode: el.zipCode,
    residenceName: el.residenceName,
    emergencyContactFirstName: el.emergencyContactFirstName,
    emergencyContactLastName: el.emergencyContactLastName,
    emergencyContactState: el.emergencyContactState,
    emergencyContactZipCode: el.emergencyContactZipCode,
  }));

  useEffect(() => {
    getAllPatient();
  }, []);
  return (
    <Box m={"20px"}>
      <Header title="MANAGE PATIENT" subtitle="Show all patients" />
      <Box height={"400px"} width={"100%"}>
        {/* {isLoading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            // columns={columns}
            // rows={rows}
            pagination={true}
            pageSize={5}
          />
        )} */}
        <DataGrid
          columns={columns}
          rows={rows}
          pagination={true}
          pageSize={5}
        />
      </Box>
    </Box>
  );
};

export default ManagePatient;
