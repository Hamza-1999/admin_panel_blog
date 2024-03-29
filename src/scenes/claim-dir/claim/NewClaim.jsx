import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import { useState } from "react";
import ClaimInfo from "./ClaimInfo";
import ClaimCharges from "./ClaimCharges";
import { useFormik } from "formik";
import { claimInitVal } from "../../../utils/formikInitValues";
import { useDispatch } from "react-redux";
import { newClaimAction } from "../../../features/actions/claimAction";
import { useNavigate } from "react-router-dom";
import AdditionInfo from "./AdditionInfo";
import "./claim-styling/claim.css";
import AmbulanceInfo from "./AmbulanceInfo";
import { FormControl, FormLabel } from "react-bootstrap";
import InsAdditionalinfo from "./InsAdditionalinfo";
import InformationCodes from "./InformationCodes";
import CustomButton from "../../../components/CustomButton";

const NewClaim = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [claimIds, setClaimIds] = useState({
    patientAccountNo: null,
    patientId: null,
    practiceId: null,
    billingProviderId: null,
    insuredPartyId: null,
    payerInfoId: null,
    renderingProviderId: null,
    supervisingProviderId: null,
    providerId: null,
  });
  const [facilityId, setFacilityId] = useState(null);
  const [claimChargesDto, setClaimChargesDto] = useState([]);
  console.log(claimChargesDto, "claimDto");
  const dispatch = useDispatch();
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const formik = useFormik({
    initialValues: claimInitVal,
    onSubmit: (values, action) => {
      console.log(values, "claimvals999");
      const postValues = {
        ...values,
        patientAccountNo: claimIds.patientAccountNo,
        patientId: claimIds.patientId,
        practiceId: claimIds.practiceId,
        billingProviderId: claimIds.billingProviderId,
        insuredPartyId: claimIds.insuredPartyId,
        payerInfoId: claimIds.payerInfoId,
        renderingProviderId: claimIds.renderingProviderId,
        supervisingProviderId: claimIds.supervisingProviderId,
        providerId: claimIds.providerId,
        facilityId: facilityId,
        claimChargesUpdatedDto: claimChargesDto,
      };
      console.log(postValues, "claimPostValues");
      try {
        dispatch(newClaimAction(postValues));
      } catch (error) {
        throw error;
      }
      // action.resetForm();
    },
  });

  // console.log(formik.values, "frequencyType");

  // handle cancel
  const handleCancel = () => {
    const conform = window.confirm("Are you sure you want to cancel?");
    if (conform) {
      formik.resetForm();
      navigate("/claims");
    }
  };

  // console.log(formik.values.isProfessional, "check professional values");
  return (
    <Box className="backgroundpatient ">
    <Box margin="20px">
   
     <Header 
       title="Claim" subtitle="Create a New Claim" />
      {/* select claim type */}
      <Stack>
        <FormLabel id="claimType">Select Claim Type</FormLabel>
        <RadioGroup
          row
          aria-labelledby="claimType"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value={1}
            control={
              <Radio
                checked={formik.values.claimTypeId === 1}
                onChange={() => formik.setFieldValue("claimTypeId", 1)}
              />
            }
            label="Professional"
          />
          <FormControlLabel
            value={2}
            control={
              <Radio
                checked={formik.values.claimTypeId === 2}
                onChange={() => formik.setFieldValue("claimTypeId", 2)}
              />
            }
            label="Institutional"
          />
        </RadioGroup>
      </Stack>

      <Stack
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        // alignItems={{ xs: "flex-start", sm: "flex-start", md: "center" }}
        justifyContent="space-between"
        // gap={"15px"}
        // sx={{
        //   width: { xs: "95%", sm: "75%", md: "50%" },
        // }}
      >

        
        {/* <Tabs
          value={tabValue}
          onChange={handleTabChange}
      
        >
          <Tab label="Claim" value={0} />
          <Tab label="Charges" value={1} />
          <Tab label="Additional Info" value={2} />
          <Tab
            label={
              formik.values.claimTypeId === 1
                ? "Ambulance Info"
                : "Information Codes"
            }
            value={3}
          />
        </Tabs> */}

        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            order: { xs: 2, sm: 2, md: 1 },
            marginBottom: "10px",
            borderRadius: "10px 10px 0 0",
           
            
          }} 
          
        >
          <Tab  className="tabsdesigning" label="Claim" value={0} />
          <Tab  className="tabsdesigning"label="Charges" value={1} />
          <Tab className="tabsdesigning"label="Additional Info" value={2} />
          <Tab className="tabsdesigning"
            label={
              formik.values.claimTypeId === 1
                ? "Ambulance Info"
                : "Information Codes"
            }
            value={3}
          />
              </Tabs> 
              <Box sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
        
          
  <CustomButton
                type="reset"
                color="error"
                form="claimForm"
                padding={'7px'}
                isBlue={false}
                sx={{
                  marginRight: "15px",
                }}
                onClick={handleCancel}
              >
                Cancel
              </CustomButton>

<CustomButton
                type="submit"
                variant="contained"
                form="claimForm"
                isBlue={true}
                padding={'7px'}
                sx={{
                  marginRight: "30px",
                }}
              >
                Save
              </CustomButton>
          </Box>
      </Stack>

      

      <form id="claimForm" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            padding: "15px",
          }}
        >
          {tabValue === 0 && (
            <ClaimInfo
              formik={formik}
              setClaimIds={setClaimIds}
              setFacilityId={setFacilityId}
            />
          )}
          {tabValue === 1 && (
            <ClaimCharges
              formik={formik}
              setClaimChargesDto={setClaimChargesDto}
              claimChargesDto={claimChargesDto}
            />
          )}
          {tabValue === 2 &&
            (formik.values.claimTypeId === 1 ? (
              <AdditionInfo
                formik={formik}
                // setClaimChargesDto={setClaimChargesDto}
                // claimChargesDto={claimChargesDto}
              />
            ) : (
              <InsAdditionalinfo formik={formik} />
            ))}
          {tabValue === 3 &&
            (formik.values.claimTypeId === 1 ? (
              <AmbulanceInfo
                formik={formik}
                // setClaimChargesDto={setClaimChargesDto}
                // claimChargesDto={claimChargesDto}
              />
            ) : (
              <InformationCodes formik={formik} />
            ))}
        </Box>
      </form>

      {/* <Box
        sx={{
         
          margin: "15px",
        }}
      >
        <Button
          type="reset"
          color="error"
          variant="outlined"
          form="claimForm"
          sx={{
            marginRight: "15px",
          }}
          
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          form="claimForm"
        
          sx={{ bgcolor: "#6870fa", color: "#fff" }}
        >
          Save
        </Button>
      </Box> */}
    </Box>
    </Box>
  );
};

export default NewClaim;
