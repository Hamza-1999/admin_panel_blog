import { Box, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientAction } from "../../features/actions/createPatientAction";

const LinkFamily = ({ handleCellClick }) => {
  const dispatch = useDispatch();
  const { getAllPatients, loading, error } = useSelector(
    (state) => state.patient
  );
  console.log(getAllPatients.result, "getFam");
  const rows =
    getAllPatients && getAllPatients.result
      ? getAllPatients.result?.map((el) => ({
          id: el.patientId,
          accountNo: el.accountNo,
          firstName: el.firstName,
          lastName: el.lastName,
          insuredFirstName: el.insuredFirstName,
          insuredLastName: el.insuredLastName,
          accountType: el.accountType,
          insuredDateOfBirth: new Date(
            el.insuredDateOfBirth
          ).toLocaleDateString(),
          insuredAddress: el.insuredAddress,
          insuredZipCode: el.insuredZipCode,
          insuredSSN: el.insuredSSN,
          insuredHomePhone: el.insuredHomePhone,
          insuredCellPhone: el.insuredCellPhone,
          insuredWorkPhone: el.insuredWorkPhone,
          insuredExt: el.insuredExt,
          insuredEmail: el.insuredEmail,
          insuredCityName: el.insuredCityName,
          insuredStateName: el.insuredStateName,
          insuredCountryName: el.insuredCountryName,
          insuredRelationShipToPatientName: el.insuredRelationShipToPatientName,
          insuredGenderIdentityName: el.insuredGenderIdentityName,
          insuredPriorityType: el.insuredPriorityType,
          //  employe
          employeeName: el.employeeName,
          empAddress: el.empAddress,
          empCityName: el.empCityName,
          empStateName: el.empStateName,
          insuredPartyName: el.insuredPartyName,
          empZipCode: el.empZipCode,
          empEmploymentStatusName: el.empEmploymentStatusName,
          // payer
          payerInfoMemberId: el.payerInfoMemberId,
          payerInfoGroupId: el.payerInfoGroupId,
          payerInfoCopayAmount: el.payerInfoCopayAmount,
          payerInfoCoInsurancePercent: el.payerInfoCoInsurancePercent,
          payerInfoDeductibleAmount: el.payerInfoDeductibleAmount,
          payerInfoOutOfPocketMax: el.payerInfoOutOfPocketMax,
          payerInfoEffectiveDate: el.payerInfoEffectiveDate,
          payerInfoTerminationDate: el.payerInfoTerminationDate,
          payerInfoPriorityName: el.payerInfoPriorityName,
          payerInfoPolicyType: el.payerInfoPolicyType,
          payerInfoPayerName: el.payerInfoPayerName,
          payerInfoSequenceNumber: el.payerInfoSequenceNumber,
        }))
      : [];
  const columns = [
    {
      field: "accountNo",
      headerName: "Account #",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "name",
      minWidth: 200,
      headerName: "Name",
      flex: 2,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`,
    },
    {
      field: "insuredDateOfBirth",
      headerName: "Date of Birth",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
    {
      field: "insured",
      headerName: "Insured",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      valueGetter: (params) =>
        `${params.row.insuredFirstName} ${params.row.insuredLastName}`,
    },
    {
      field: "accountType",
      headerName: "AccountType",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
    },
  ];

  useEffect(() => {
    dispatch(getPatientAction());
  }, [dispatch]);
  return (
    <>
      <h2 style={{ padding: "15px 20px " }}>Patient Search</h2>

      <Box padding="18px">
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            sx={{ fontSize: "1.2rem" }}
            autoHeight
            // initialState={{
            //   pagination: {
            //     paginationModel: {
            //       pageSize: 5,
            //     },
            //   },
            // }}
            pageSize={5}
            disableSelectionOnClick
            components={{
              NoRowsOverlay: () => (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "16px",
                  }}
                >
                  {getAllPatients.result?.length === 0 && "No Data Is Added"}
                </div>
              ),
            }}
            onCellClick={(params) => handleCellClick(params.row)}
          />
        )}
      </Box>
    </>
  );
};

export default LinkFamily;
