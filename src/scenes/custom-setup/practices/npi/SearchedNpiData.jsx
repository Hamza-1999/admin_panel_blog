import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const SearchedNpiData = ({
  searchedData,
  handleSelectNpi,
  setSearchNpiModal,
  handleClose,
}) => {
  console.log(searchedData, "searchedData66");

  // data grid rows
  const rows = searchedData?.map((el) => ({
    id: el.npiId,
    npiNo: el.npiNo,
    organizationName: el.organizationName,
    firstName: el.firstName,
    lastName: el.lastName,
  }));

  // data grid columns
  const columns = [
    {
      field: "npiNo",
      headerName: "NPI",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "organizationName",
      headerName: "Organization",
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
  ];

  const handleNpiField = (val) => {
    handleSelectNpi(Number(val));
    handleClose();
    setSearchNpiModal(false);
  };
  return (
    <Box sx={{ height: "400px", width: "100%" }} padding={"15px 20px"}>
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
        onCellClick={(params) => handleNpiField(params.row.npiNo)}
      />
    </Box>
  );
};

export default SearchedNpiData;
