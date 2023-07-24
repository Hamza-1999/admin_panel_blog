import { Box, CircularProgress, IconButton } from "@mui/material";
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
  const { getAllPatients, loading } = useSelector((state) => state.patient);
  console.log(getAllPatients, "getPatient in Ui");

  useEffect(() => {
    dispatch(getPatientAction());
  }, [dispatch]);

  const rows = getAllPatients.result?.map((el) => ({
    id: el.patientId,
    firstName: el.firstName,
    lastName: el.lastName,
    // dateOfBirth: new Date(el.dateOfBirth).toLocaleDateString(),
    genderName: el.genderName,
    accountTypeName: el.accountTypeName,
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

  useEffect(() => {
    dispatch(getPatientAction());
  }, [dispatch]);

  if (
    !getAllPatients ||
    !getAllPatients.result ||
    getAllPatients.result.length === 0
  ) {
    return (
      <Box m={"20px"}>
        <Header title="MANAGE PATIENT" subtitle="Show all patients" />
        {loading ? <CircularProgress /> : <div>No patient data available.</div>}
      </Box>
    );
  }

  const handleEdit = (id) => {
    navigate(`/editpatient/${id}`);
  };
  const columns = [
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
    },
    { field: "lastName", headerName: "Last Name", width: 150 },
    // { field: "dateOfBirth", headerName: "Date Of Birth", width: 150 },
    { field: "genderName", headerName: "Gender", width: 150 },
    { field: "accountTypeName", headerName: "Account Type", width: 150 },
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
              onClick={() => handleEdit(id)}
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

  return (
    <Box m={"20px"}>
      <Header title="MANAGE PATIENT" subtitle="Show all patients" />
      <Box height={"400px"} width={"100%"}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box height={"400px"} width={"100%"}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ManagePatient;
