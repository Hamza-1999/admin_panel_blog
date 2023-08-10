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
import CustomModal from "../../components/CustomModal";
import EditPatient from "./EditPatient";
import { getInsuranceAction } from "../../features/actions/patientInsuranceAction";
import EditInsuranceInfo from "./EditInsuranceInfo";

const ShowPatientInfo = () => {
  const [editPatientInfoModal, setEditPatientInfoModal] = useState(false);
  const [editInsuranceInfoModal, setEditInsuranceInfoModal] = useState(false);
  //   console.log(showPatientData, "show");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accountNo } = useParams();
  console.log(accountNo, "acc number");
  const { getAllPatients, loading } = useSelector((state) => state.patient);
  const { getPatientInsuranceData } = useSelector(
    (state) => state.patientInsurance
  );

  console.log(getPatientInsuranceData, "insurance11");
  // console.log(getAllPatients, "patient11");
  const selectedPatient = getAllPatients.result?.find(
    (el) => el.accountNo === accountNo
  );

  const selectedInsuranceInfo = getPatientInsuranceData.result?.find(
    (el) => el.accountNo === accountNo
  );
  console.log(selectedInsuranceInfo, "findind same");

  useEffect(() => {
    dispatch(getPatientAction());
    dispatch(getInsuranceAction());
  }, [dispatch]);

  return (
    <>
      <CustomModal
        open={editPatientInfoModal}
        handleClose={() => setEditPatientInfoModal(false)}
      >
        <EditPatient handleClose={() => setEditPatientInfoModal(false)} />
      </CustomModal>
      <CustomModal
        open={editInsuranceInfoModal}
        handleClose={() => setEditInsuranceInfoModal(false)}
      >
        <EditInsuranceInfo
          handleClose={() => setEditInsuranceInfoModal(false)}
        />
      </CustomModal>
      <Box width={"100%"} padding={"20px"}>
        <Header title="Patient Details" subtitle="" />
        <div style={{ background: "lightgray" }}>
          <Grid
            container
            width="100%"
            marginTop={"20px"}
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
                  {selectedPatient?.firstName?.slice(0, 1)}
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

        <Box marginTop={"30px"}>
          <Accordion>
            <AccordionSummary>
              <Stack
                width={"100%"}
                flexDirection={"row"}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h3" component={"h2"}>
                  General Info
                </Typography>
                <IconButton onClick={() => setEditPatientInfoModal(true)}>
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
                      Ext
                    </Typography>
                    <Typography>{selectedPatient?.ext}</Typography>
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
                      State
                    </Typography>
                    <Typography>{selectedPatient?.stateName}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Student Status
                    </Typography>
                    <Typography>
                      {selectedPatient?.studentStatusName}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Employement Status
                    </Typography>
                    <Typography>
                      {selectedPatient?.employmentStatusName}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Refrence
                    </Typography>
                    <Typography>
                      {selectedPatient?.referralSourceName}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Relation to Patient
                    </Typography>
                    <Typography>
                      {selectedPatient?.relationShipToPatientName}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" component={"h2"}>
                    Emergency Contact:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Name
                    </Typography>
                    <Typography>
                      {`${selectedPatient?.emergencyContactFirstName} ${selectedPatient?.emergencyContactLastName}`}
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Address
                    </Typography>
                    <Typography>
                      {selectedPatient?.emergencyContactAddress}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      City
                    </Typography>
                    <Typography>
                      {selectedPatient?.emergencyContactCity}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      State
                    </Typography>
                    <Typography>
                      {selectedPatient?.emergencyContactState}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Zipcode
                    </Typography>
                    <Typography>
                      {selectedPatient?.emergencyContactZipCode}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>
              <Stack
                width={"100%"}
                flexDirection={"row"}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h3" component={"h2"}>
                  Insurance Information
                </Typography>
                <IconButton onClick={() => setEditInsuranceInfoModal(true)}>
                  <Edit />
                </IconButton>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={4}>
                {selectedInsuranceInfo?.insuredPartyDtos?.map((el) => {
                  return (
                    <>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Patient Name
                          </Typography>
                          <Typography>
                            {`${el.insuredFirstName} ${el.insuredLastName}` ||
                              "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Date Of Birth
                          </Typography>
                          <Typography>
                            {el.insuredDateOfBirth || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Gender
                          </Typography>
                          <Typography>
                            {el.insuredGenderIdentityName || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            SSN
                          </Typography>
                          <Typography>{el.insuredSSN || "None"}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Priority Type
                          </Typography>
                          <Typography>
                            {el.insuredPriorityType || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Phone No
                          </Typography>
                          <Typography>
                            {el.insuredCellPhone || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Home Number
                          </Typography>
                          <Typography>
                            {el.insuredHomePhone || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Work Number
                          </Typography>
                          <Typography>
                            {el.insuredWorkPhone || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            {el.insuredExt || "None"}
                          </Typography>
                          <Typography>122</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Relation to Patient
                          </Typography>
                          <Typography>
                            {el.insuredRelationShipToPatientName || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Email
                          </Typography>
                          <Typography>{el.insuredEmail || "None"}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Address
                          </Typography>
                          <Typography>{el.insuredAddress || "None"}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Country
                          </Typography>
                          <Typography>
                            {el.insuredCountryName || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            City
                          </Typography>
                          <Typography>
                            {el.insuredCityName || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            State
                          </Typography>
                          <Typography>{el.empStateName || "None"}</Typography>
                        </Stack>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography>Employement Details</Typography>
                      </Grid>

                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Name
                          </Typography>
                          <Typography>{el.employeeName || "None"}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Employement Status
                          </Typography>
                          <Typography>
                            {el.empEmploymentStatusName || "None"}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Address
                          </Typography>
                          <Typography>{el.empAddress || "None"}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            City
                          </Typography>
                          <Typography>{el.empCityName || "None"}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            State
                          </Typography>
                          <Typography>{el.empStateName || "None"}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                          <Typography variant="h4" component={"h1"}>
                            Zipcode
                          </Typography>
                          <Typography>{el.empZipCode || "None"}</Typography>
                        </Stack>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>
              <Stack
                width={"100%"}
                flexDirection={"row"}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h3" component={"h2"}>
                  Payer Information
                </Typography>
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
                      Priority
                    </Typography>
                    <Typography>Primary</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Payer Type
                    </Typography>
                    <Typography>Self-Pay</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Policy Type
                    </Typography>
                    <Typography>Group Policy</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Memder Id
                    </Typography>
                    <Typography>1</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Group Id
                    </Typography>
                    <Typography>1</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Copay
                    </Typography>
                    <Typography>89700</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Co-Insurance %
                    </Typography>
                    <Typography>7860</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Deductible
                    </Typography>
                    <Typography>7658</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Out of Pocket Max
                    </Typography>
                    <Typography>99700</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Effective Date
                    </Typography>
                    <Typography>7/8/2002</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Termination Date
                    </Typography>
                    <Typography>7/9/2023</Typography>
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
