import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPatientAction } from "../../features/actions/createPatientAction";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Grid,
  IconButton,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import { Edit } from "@mui/icons-material";

const ShowPatientInfo = () => {
  //   const [showPatientData, setShowPatientData] = useState([]);
  //   console.log(showPatientData, "show");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getAllPatients, loading } = useSelector((state) => state.patient);

  useEffect(() => {
    dispatch(getPatientAction());
  }, []);

  console.log("id:", id);
  console.log("getAllPatients:", getAllPatients);

  const selectedPatient = getAllPatients.result?.find(
    (el) => el.patientId === Number(id)
  );

  return (
    <>
      <Box width={"100%"} padding={"20px"}>
        <Header title="Patient Details" subtitle="" />
        <div style={{ background: "lightgray" }}>
          <Grid
            container
            width="100%"
            spacing={4}
            sx={{
              padding: "20px",
            }}
          >
            <Grid item xs={12} justifyContent={"space-between"}>
              <Stack flexDirection={"row"} alignItems={"center"}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "deepPurple[500]",
                    fontSize: "30px",
                  }}
                >
                  H
                </Avatar>
                <Typography
                  color={"primary"}
                  variant="h3"
                  component={"h1"}
                  marginLeft={"10px"}
                  fontWeight={"600"}
                >
                  {`${selectedPatient?.firstName} ${selectedPatient?.lastName}`}{" "}
                  ( #{selectedPatient?.accountNo})
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component={"h1"}>
                Date of Birth
              </Typography>
              <Typography>
                {new Date(selectedPatient?.dateOfBirth).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component={"h1"}>
                Gender
              </Typography>
              <Typography>{selectedPatient?.genderIdentityName}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component={"h1"}>
                Phone No
              </Typography>
              <Typography>{selectedPatient?.cellPhone}</Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component={"h1"}>
                Address
              </Typography>
              <Typography>{selectedPatient?.address || "None"}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component={"h1"}>
                Country
              </Typography>
              <Typography>{selectedPatient?.countryName || "None"}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component={"h1"}>
                City
              </Typography>
              <Typography>{selectedPatient?.cityName || "None"}</Typography>
            </Grid>
          </Grid>
        </div>

        <Box>
          <Accordion>
            <AccordionSummary>
              <Stack
                width={"100%"}
                flexDirection={"row"}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography>General Info</Typography>
                <IconButton>
                  <Edit />
                </IconButton>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Account Type
                    </Typography>
                    <Typography>{selectedPatient?.accountType}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Marital Status
                    </Typography>
                    <Typography>
                      {selectedPatient?.maritalStatusName}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Race Status
                    </Typography>
                    <Typography>{selectedPatient?.raceStatusName}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Email
                    </Typography>
                    <Typography>{selectedPatient?.email}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Home No
                    </Typography>
                    <Typography>{selectedPatient?.homePhone}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Work No
                    </Typography>
                    <Typography>{selectedPatient?.workPhone}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Residence Type
                    </Typography>
                    <Typography>
                      {selectedPatient?.residenceTypeName}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Ethnicity
                    </Typography>
                    <Typography>{selectedPatient?.ethnicityName}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Date of Death
                    </Typography>
                    <Typography>
                      {new Date(
                        selectedPatient?.dateOfDeath
                      ).toLocaleDateString()}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Driving License
                    </Typography>
                    <Typography>{selectedPatient?.drivingLicense}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Suxual Orientation
                    </Typography>
                    <Typography>
                      {selectedPatient?.sexualOrientationName}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default ShowPatientInfo;
