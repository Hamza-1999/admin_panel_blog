import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import CustomSearchField from "../../../components/CustomSearchField";

const ProcedureClaim = ({ formik, handleClose, charge, index }) => {
  console.log(formik.values, "667");
  const procedureBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid lightgrey",
    padding: "7px 14px 10px",
    position: "sticky",
    top: "0",
    zIndex: "111",
    backgroundColor: "#fff",
  };

  const handleProcedureAdd = () => {
    formik.setValues({
      ...formik.values,
      claimChargesDto: [
        // ...charge,
        {
          procedureCode: charge.procedureCode,
        },
      ],
    });
  };
  return (
    <>
      <Box sx={procedureBoxStyle}>
        <Typography variant="h4" component="h4" letterSpacing={"1.24px"}>
          Add Procedure
        </Typography>

        <Button
          variant="container"
          sx={{
            bgcolor: "#6870fa",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#6870fa",
            },
          }}
          onClick={handleProcedureAdd}
        >
          Add
        </Button>
      </Box>

      <Stack padding={"20px 30px"}>
        <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              label="To"
              value={charge.toDate}
              onChange={(value) => {
                console.log(value, "dateVal");
                formik.setFieldValue("toDate", value);
              }}
              onBlur={() => formik.setFieldTouched("toDate", true)}
              renderInput={(params) => <TextField {...params} />}
              inputFormat="MM/DD/YYYY"
              // clearable
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              label="From"
              value={charge.fromDate}
              onChange={(value) => {
                console.log(value, "dateVal");
                formik.setFieldValue("fromDate", value);
              }}
              onBlur={() => formik.setFieldTouched("fromDate", true)}
              renderInput={(params) => <TextField {...params} />}
              inputFormat="MM/DD/YYYY"
              // clearable
            />
          </LocalizationProvider>
        </Box>

        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <label style={{ marginRight: "20px", width: "20%" }}>
              Precedure:
            </label>
            <FormControl fullWidth>
              <CustomSearchField
                type="text"
                label="Procedure"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                fieldVal={charge.procedureCode}
                name={`claimChargesDto[${index}].procedureCode`}
              />
            </FormControl>
          </Box>
          {/* <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <label style={{ marginRight: "20px", width: "20%" }}>POS:</label>
            <FormControl fullWidth>
              <CustomSearchField type="text" label="Post" />
            </FormControl>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <label style={{ marginRight: "20px", width: "20%" }}>TOS:</label>
            <FormControl fullWidth>
              <CustomSearchField type="text" label="Tos" />
            </FormControl>
          </Box> */}
        </Box>

        {/* mod */}
        {/* <Box
          display="grid"
          gap="30px"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(2, minmax(0, 1fr))",
            },
            marginTop: "20px",
          }}
        >
          <CustomSearchField label="Mod 1" />
          <CustomSearchField label="Mod 2" />
          <CustomSearchField label="Mod 3" />
          <CustomSearchField label="Mod 4" />
        </Box> */}
      </Stack>
    </>
  );
};

export default ProcedureClaim;
