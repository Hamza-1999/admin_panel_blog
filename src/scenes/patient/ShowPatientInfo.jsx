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

const ShowPatientInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accountNo } = useParams();

  console.log(accountNo, "acc number");
  const { getAllPatients, loading } = useSelector((state) => state.patient);
  console.log(getAllPatients, "all patients");
  const selectedPatient = getAllPatients.result?.find(
    (el) => el.accountNo === Number(accountNo)
  );

  console.log(selectedPatient, "check selected67");

  const handleEditPatient = (accNum) => {
    navigate(`/editpatient/${accNum}`);
  };

  useEffect(() => {
    dispatch(getPatientAction());
  }, [dispatch]);
  return (
    <>
        <Box className="backgroundpatient ">
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
                <IconButton
                  onClick={() => handleEditPatient(selectedPatient?.accountNo)}
                >
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

          {/* Insurance Information Detail */}
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
                <IconButton
                  onClick={() => handleEditPatient(selectedPatient?.accountNo)}
                >
                  <Edit />
                </IconButton>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Patient Name
                    </Typography>
                    <Typography>
                      {`${selectedPatient?.insuredFirstName} ${selectedPatient?.insuredLastName}` ||
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
                      {selectedPatient?.insuredDateOfBirth || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Gender
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredGenderIdentityName || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      SSN
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredSSN || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Priority Type
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredPriorityType || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Phone No
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredCellPhone || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Home Number
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredHomePhone || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Work Number
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredWorkPhone || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      {selectedPatient?.insuredExt || "None"}
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
                      {selectedPatient?.insuredRelationShipToPatientName ||
                        "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Email
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredEmail || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Address
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredAddress || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Country
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredCountryName || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      City
                    </Typography>
                    <Typography>
                      {selectedPatient?.insuredCityName || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      State
                    </Typography>
                    <Typography>
                      {selectedPatient?.empStateName || "None"}
                    </Typography>
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
                    <Typography>
                      {selectedPatient?.employeeName || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Employement Status
                    </Typography>
                    <Typography>
                      {selectedPatient?.empEmploymentStatusName || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Address
                    </Typography>
                    <Typography>
                      {selectedPatient?.empAddress || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      City
                    </Typography>
                    <Typography>
                      {selectedPatient?.empCityName || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      State
                    </Typography>
                    <Typography>
                      {selectedPatient?.empStateName || "None"}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Zipcode
                    </Typography>
                    <Typography>
                      {selectedPatient?.empZipCode || "None"}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* payerInfo Detail */}
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
                <IconButton
                  onClick={() => handleEditPatient(selectedPatient?.accountNo)}
                >
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
                    <Typography>
                      {selectedPatient?.payerInfoPriorityName}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Policy Type
                    </Typography>
                    <Typography>
                      {selectedPatient?.payerInfoPolicyType}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Memder Id
                    </Typography>
                    <Typography>
                      {selectedPatient?.payerInfoMemberId}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Group Id
                    </Typography>
                    <Typography>
                      {selectedPatient?.payerInfoMemberId}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Copay
                    </Typography>
                    <Typography>
                      {selectedPatient?.payerInfoCopayAmount}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Co-Insurance %
                    </Typography>
                    <Typography>
                      {selectedPatient?.payerInfoCoInsurancePercent}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Deductible
                    </Typography>
                    <Typography>
                      {selectedPatient?.payerInfoDeductibleAmount}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Out of Pocket Max
                    </Typography>
                    <Typography>
                      {selectedPatient?.payerInfoOutOfPocketMax}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Effective Date
                    </Typography>
                    <Typography>
                      {selectedPatient?.payerInfoEffectiveDate}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack>
                    <Typography variant="h4" component={"h1"}>
                      Termination Date
                    </Typography>
                    <Typography>
                      {selectedPatient?.payerInfoTerminationDate}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
      </Box>
    </>
  );
};

export default ShowPatientInfo;
