import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import path from "../../../../config/apiUrl";
import { useState } from "react";
import CustomModal from "../../../../components/CustomModal";
import { unstable_resetCleanupTracking } from "@mui/x-data-grid";
import SearchedNpiData from "./SearchedNpiData";

const SearchNpi = () => {
  const [searchedData, setSearchedData] = useState([]);
  const [openSearchDataModal, setOpenSearchDataModal] = useState(false);
  console.log(searchedData, "getting search response");
  const initialValues = {
    FirstName: "",
    LastName: "",
    OrganizationName: "",
  };

  const { values, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      const { FirstName, LastName, OrganizationName } = values;
      const queryParams = new URLSearchParams();

      if (FirstName) queryParams.append("firstName", FirstName.trim());
      if (LastName) queryParams.append("lastName", LastName.trim());
      if (OrganizationName)
        queryParams.append("orgName", OrganizationName.trim());
      const url = `${path}/npi/search?${queryParams.toString()}`;

      try {
        const response = await axios.get(url);
        if (response) {
          console.log(response, "response search");
          const getSearchData = response.data;
          setSearchedData(getSearchData.result);
          setOpenSearchDataModal(true);
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  });
  return (
    <>
      <CustomModal
        open={openSearchDataModal}
        handleClose={() => setOpenSearchDataModal(false)}
      >
        <SearchedNpiData
          searchedData={searchedData}
          handleClose={() => setOpenSearchDataModal(false)}
        />
      </CustomModal>
      <Box>
        <Stack>
          <Typography variant="h3" component={"h3"}>
            NPI Registry
          </Typography>
        </Stack>
        <hr />

        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            margin={"20px 0"}
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(2, minmax(0, 1fr))",
              },
            }}
          >
            <TextField
              size="small"
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.FirstName}
              name="FirstName"
              id="FirstName"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              size="small"
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.LastName}
              name="LastName"
              id="LastName"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
          </Box>

          {/* organization */}
          <Box
            display="grid"
            gap="30px"
            margin={"20px 0"}
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(1, minmax(0, 1fr))",
                md: "repeat(1, minmax(0, 1fr))",
              },
            }}
          >
            <TextField
              size="small"
              fullWidth
              variant="filled"
              type="text"
              label="Organization Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.OrganizationName}
              name="OrganizationName"
              id="OrganizationName"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
          </Box>

          <Box textAlign={"right"}>
            <Button variant="contained" type="submit" color="primary">
              Search
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default SearchNpi;
