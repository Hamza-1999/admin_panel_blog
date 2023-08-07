import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getPatientAction } from "../../features/actions/createPatientAction";
import { useNavigate } from "react-router-dom";

const ManagePatient = () => {
  const navigate = useNavigate();
  // const [allPatient, setAllPatient] = useState([]);
  // console.log(allPatient, "all patient data");
  const dispatch = useDispatch();
  const { getAllPatients, loading, error } = useSelector(
    (state) => state.patient
  );
  console.log(error, "error");

  useEffect(() => {
    dispatch(getPatientAction());
  }, [dispatch]);

  if (error) {
    return (
      <Box m={"20px"}>
        <Header title="MANAGE PATIENT" subtitle="Show all patients" />
        <div>Error loading data. Please try again later.</div>
      </Box>
    );
  }

  const rows = getAllPatients.result?.map((el) => ({
    id: el.patientId,
    firstName: el.firstName,
    lastName: el.lastName,
    dateOfBirth: new Date(el.dateOfBirth).toLocaleDateString(),
    genderIdentityName: el.genderIdentityName,
    accountType: el.accountType,
    // email: el.email,
    // drivingLicense: el.drivingLicense,
    // sexualOrientationName: el.sexualOrientationName,
    // raceName: el.raceName,
    // ethnicityName: el.ethnicityName,
    // maritalStatusName: el.maritalStatusName,
    // employmentStatusName: el.employmentStatusName,
    // referralSourceName: el.referralSourceName,
    // relationShipToPatientName: el.relationShipToPatientName,
    // studentStatusName: el.studentStatusName,
    // cellPhone: el.cellPhone,
    // workPhone: el.workPhone,
    // homePhone: el.homePhone,
    // ext: el.ext,
    // address: el.address,
    // countryName: el.countryName,
    // cityName: el.cityName,
    // stateName: el.stateName,
    // zipCode: el.zipCode,
    // residenceName: el.residenceName,
    // emergencyContactFirstName: el.emergencyContactFirstName,
    // emergencyContactLastName: el.emergencyContactLastName,
    // emergencyContactState: el.emergencyContactState,
    // emergencyContactZipCode: el.emergencyContactZipCode,
  }));

  if (
    !getAllPatients ||
    !getAllPatients.result ||
    getAllPatients.result.length === 0
  ) {
    return (
      <Box m={"20px"}>
        <Header title="MANAGE PATIENT" subtitle="Show all patients" />
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <div>No patient data available.</div>
        )}
      </Box>
    );
  }

  const columns = [
    {
      field: "firstName",
      headerName: "First Name",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      headerAlign: "center",
      width: 200,
      align: "center",
    },
    {
      field: "dateOfBirth",
      headerName: "Date Of Birth",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "genderIdentityName",
      headerName: "Gender",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "accountType",
      headerName: "Account Type",
      width: 200,
      align: "center",
      headerAlign: "center",
      cursor: "pointer",
    },
    // { field: "drivingLicense", headerName: "Driving License", width: 150 },
    // {
    //   field: "sexualOrientationName",
    //   headerName: "Sexual Orientation",
    //   width: 150,
    // },
    // { field: "maritalStatusName", headerName: "Maritale Status", width: 150 },
    // { field: "raceName", headerName: "Race Status", width: 150 },
    // { field: "ethnicityName", headerName: "Ethnicity Status", width: 150 },
    // {
    //   field: "employmentStatusName",
    //   headerName: "Employement Status",
    //   width: 150,
    // },
    // { field: "referralSourceName", headerName: "Refrence", width: 150 },
    // {
    //   field: "relationShipToPatientName",
    //   headerName: "Relation to patient",
    //   width: 150,
    // },
    // { field: "studentStatusName", headerName: "Student Status", width: 150 },
    // { field: "cellPhone", headerName: "Phone No", width: 150 },
    // { field: "homePhone", headerName: "Home Phone", width: 150 },
    // { field: "workPhone", headerName: "Work Phone", width: 150 },
    // { field: "ext", headerName: "Ext", width: 150 },
    // { field: "address", headerName: "Address", width: 150 },
    // { field: "countryName", headerName: "Country", width: 150 },
    // { field: "cityName", headerName: "City", width: 150 },
    // { field: "stateName", headerName: "State", width: 150 },
    // { field: "residenceName", headerName: "Residence Type", width: 150 },
    // { field: "zipCode", headerName: "Zip Code", width: 150 },
    // {
    //   field: "emergencyContactFirstName",
    //   headerName: "Emergency Contact First Name",
    //   width: 150,
    // },
    // {
    //   field: "emergencyContactLastName",
    //   headerName: "Emergency Contact State",
    //   width: 150,
    // },
    // {
    //   field: "emergencyContactZipCode",
    //   headerName: "Emergency Contact Zip Code",
    //   width: 150,
    // },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   width: 200,
    //   align: "center",
    //   headerAlign: "center",

    //   renderCell: (params) => {
    //     const { id } = params.row;

    //     return (
    //       <>
    //         <IconButton
    //           color="secondary"
    //           onClick={() => handleEdit(id)}
    //           title="Edit"
    //         >
    //           <EditIcon />
    //         </IconButton>
    //         <IconButton
    //           color="secondary"
    //           // onClick={() => handleDelete(id)}
    //           title="Delete"
    //         >
    //           <DeleteIcon />
    //         </IconButton>
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <Box m={"20px"}>
      <Header title="MANAGE PATIENT" subtitle="Show all patients" />
      {loading ? (
        // <CircularProgress />
        <Typography>Loading...</Typography>
      ) : (
        <Box height={"400px"} width={"100%"}>
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
            onCellClick={(params) => navigate(`/showpatient/${params.row.id}`)}
          />
        </Box>
      )}
    </Box>
  );
};

export default ManagePatient;
