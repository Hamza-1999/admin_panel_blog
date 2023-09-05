import axios from "axios";
import React from "react";
import { useEffect } from "react";
import path from "../../../config/apiUrl";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const ClaimModData = ({ setClaimIds, setValues, formik, handleClose }) => {
  const [PatientClaimData, setPatientClaimData] = useState([]);
  const getClaimDetails = async () => {
    try {
      const response = await axios.get(`${path}/patientClaimDetail`);
      if (response.status === 200) {
        const data = response.data;
        setPatientClaimData(data);
      } else {
        setPatientClaimData([]);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const rows = PatientClaimData?.map((el) => ({
    id: el.patientId,
    patientAccountNo: el.patientAccountNo,
    patientName: el.patientName,
    practiceId: el.practiceId,
    practiceSequenceNo: el.practiceSequenceNo,
    practiceName: el.practiceName,
    practiceAddress: el.practiceAddress,
    payerInfoId: el.payerInfoId,
    providerId: el.providerId,
    primaryPayerInfoSequenceNo: el.primaryPayerInfoSequenceNo,
    primaryPayerInfoName: el.primaryPayerInfoName,
    primaryPayerInfoMemberId: el.primaryPayerInfoMemberId,
    primaryPayerInfoGroupId: el.primaryPayerInfoGroupId,
    primaryPayerInfoPayerType: el.primaryPayerInfoPayerType,
    primaryPayerInfoCopayDue: el.primaryPayerInfoCopayDue,
    firstName: el.firstName,
    lastName: el.lastName,
    dateOfBirth: el.dateOfBirth,
    accountType: el.accountType,
    insuredPartyId: el.insuredPartyId,
    insuredFirstName: el.insuredFirstName,
    insuredLastName: el.insuredLastName,
    renderingProviderId: el.renderingProviderId,
    renderingProviderFirstName: el.renderingProviderFirstName,
    renderingProviderLastName: el.renderingProviderLastName,
    renderingProviderSequenceNo: el.renderingProviderSequenceNo,
    billingProviderId: el.billingProviderId,
    billingProviderFirstName: el.billingProviderFirstName,
    billingProviderLastName: el.billingProviderLastName,
    billingProviderSequenceNo: el.billingProviderSequenceNo,
  }));

  const columns = [
    {
      field: "patientAccountNo",
      headerName: "Account #",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`,
    },

    {
      field: "dateOfBirth",
      headerName: "Date Of Birth",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "insured",
      headerName: "Insured",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) =>
        `${params.row.insuredFirstName} ${params.row.insuredLastName}`,
    },
    {
      field: "accountType",
      headerName: "Account Type",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
  ];

  useEffect(() => {
    getClaimDetails();
  }, [setPatientClaimData]);

  const handleClaim = (val) => {
    console.log(val, "allcVals");
    setClaimIds({
      patientId: val.id,
      patientAccountNo: val.patientAccountNo,
      practiceId: val.practiceId,
      billingProviderId: val.billingProviderId,
      insuredPartyId: val.insuredPartyId,
      payerInfoId: val.payerInfoId,
      renderingProviderId: val.renderingProviderId,
      supervisingProviderId: val.supervisingProviderId,
      providerId: val.providerId,
    });

    setValues({
      ...formik.values,
      patientName: `${val.firstName} ${val.lastName} (${val.patientAccountNo})`,
      renderingProviderName: `${val.renderingProviderFirstName} ${val.renderingProviderLastName} (${val.renderingProviderSequenceNo})`,
      billingProviderName: `${val.billingProviderFirstName} ${val.billingProviderLastName} (${val.billingProviderSequenceNo})`,
      practiceAddress: val.practiceAddress,
      primaryPayerInsuranceName:
        val.primaryPayerInfoName === null
          ? ""
          : `${val.primaryPayerInfoName} (${val.primaryPayerInfoSequenceNo})`,
      primaryPayerMemberId: val.primaryPayerInfoMemberId,
      primaryPayerGroupId: val.primaryPayerInfoGroupId,
      primaryPayerPolicyType: val.primaryPayerPolicyType,
      primaryPayerCopayDue: val.primaryPayerInfoCopayDue,
    });

    handleClose();
  };
  return (
    <Box sx={{ height: "450px", width: "100%" }} padding={"20px"}>
      <Typography variant="h4" component="h4" margin="10px 0">
        Patient Claim Data
      </Typography>
      <DataGrid
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSize={5}
        disableSelectionOnClick
        onCellClick={(params) => handleClaim(params.row)}
      />
    </Box>
  );
};

export default ClaimModData;
