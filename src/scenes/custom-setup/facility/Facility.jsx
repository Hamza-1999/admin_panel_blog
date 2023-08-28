import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFacilityAction } from "../../../features/actions/facilityAction";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const Facility = ({ setFacilityId, handleClose, setFieldValue }) => {
  const dispatch = useDispatch();
  const { getFacilityData, loading } = useSelector((state) => state.facility);
  console.log(getFacilityData, "facilityData101");
  useEffect(() => {
    try {
      dispatch(getFacilityAction());
    } catch (error) {
      throw error;
    }
  }, [dispatch]);
  const rows = getFacilityData.result?.map((el) => ({
    id: el.facilityId,
    facilityName: el.facilityName,
    phoneNumber: el.phoneNumber,
    sequenceNo: el.sequenceNo,
    taxonomySpeciality: el.taxonomySpeciality,
  }));

  if (
    !getFacilityData ||
    !getFacilityData.result ||
    getFacilityData.result.length === 0
  ) {
    return (
      <Box m={"20px"}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <div>No patient data available.</div>
        )}
      </Box>
    );
  }

  const handleFacilityClick = (val) => {
    setFacilityId(val.id);
    setFieldValue("facilityName", `${val.facilityName} (${val.sequenceNo})`);
    handleClose();
  };
  const columns = [
    {
      field: "facilityName",
      headerName: "Facility Name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "sequenceNo",
      headerName: "Seq #",
      width: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "taxonomySpeciality",
      headerName: "Taxonomy",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phoneNumber",
      headerName: "Ph #",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <>
      {loading ? (
        <Box sx={{ height: "400px", width: "100%" }}>
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <Box sx={{ height: "400px", width: "100%" }}>
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
            onCellClick={(params) => handleFacilityClick(params.row)}
          />
        </Box>
      )}
    </>
  );
};

export default Facility;
