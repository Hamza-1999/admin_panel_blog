import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClaimAction } from "../../../features/actions/claimAction";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const ClaimTable = ({ onCellClick, isModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getClaims, loading } = useSelector((state) => state.claim);

  const rows =
    getClaims && getClaims.result
      ? getClaims.result.map((el) => ({
          id: el.claimId,
          claimNumber: el.claimNumber,
          patientFirstName: el.patientFirstName,
          patientLastName: el.patientLastName,
          primaryPayerInsuranceName: el.primaryPayerInsuranceName,
          payerSequenceNo: el.payerSequenceNo,
          patientAccountNo: el.patientAccountNo,
          providerId: el.providerId,
          patientId: el.patientId,
          payerId: el.payerId,
          totalBilled: el.totalBilled,
          fromDate: el.claimChargesDto[0]?.fromDate || "N/A",
          claimStatus: el.claimChargesDto[0]?.claimStatus || "N/A",
          claimChargesDto: el.claimChargesDto,
        }))
      : [];

  const columns = [
    {
      field: "claimNumber",
      headerName: "Claim ID",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content"
      
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 250,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      editable: true,
      editField: "name", // Add this line
      valueGetter: (params) =>
        `${params.row.patientFirstName} ${params.row.patientLastName}`,
        cellClassName: "cell-content"
    },
    {
      field: "fromDate",
      headerName: "DOS",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content"
    },
    {
      field: "claimStatus",
      headerName: "Status",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content"
    },
  ];

  useEffect(() => {
    try {
      dispatch(getClaimAction());
    } catch (err) {
      throw err;
    }
  }, [dispatch]);

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <DataGrid
          rows={rows}
          editMode="row"
          columns={columns}
          sx={{
            "& .header-bg": {
              backgroundColor: "lightgrey",
              color: 'black',
              fontSize: '16px',
            },
            "& .cell-content": {
              fontSize: '1.2rem', 
            }
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          autoHeight
          components={{
            NoRowsOverlay: () => (
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "16px",
                 
                }}
              >
                
                {getClaims.result?.length === 0 && "No Data Is Added"}
              </div>
            ),
          }}
          pageSize={5}
          disableSelectionOnClick
          onCellClick={(params) => {
            isModal
              ? onCellClick(params.row)
              : navigate(`/claims/update/${params.row.claimNumber}`);
          }}
        />
      )}
    </Box>
  );
};

export default ClaimTable;
