import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getPatientAction } from "../../features/actions/createPatientAction";
import { useNavigate } from "react-router-dom";
// import "./managepatient.css";

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
    accountNo: el.accountNo,
    firstName: el.firstName,
    lastName: el.lastName,
    dateOfBirth: new Date(el.dateOfBirth).toLocaleDateString(),
    genderIdentityName: el.genderIdentityName,
    accountType: el.accountType,
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
      headerClassName: "bold-header",
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
  ];

  return (
    <Box className="backgroundpatient ">
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
              onCellClick={(params) =>
                navigate(`/showpatient/${params.row.accountNo}`)
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ManagePatient;
