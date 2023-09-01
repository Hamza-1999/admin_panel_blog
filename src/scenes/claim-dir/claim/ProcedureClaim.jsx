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
import React, { useState } from "react";
import CustomSearchField from "../../../components/CustomSearchField";

const ProcedureClaim = ({ formik, handleClose, setClaimChargesDto }) => {
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

  const [procedureValues, setProcedureValues] = useState({
    procedureCode: "",
    toDate: null,
    fromDate: null,
    posCode: "",
    tosCode: "",
    modCode_1: "",
    modCode_2: "",
    modCode_3: "",
    modCode_4: "",
    icd_Pointers: "",
    unitPrice: null,
    units: null,
    amount: null,
    claimStatus: "",
  });
  const handleProcedureAdd = () => {
    setClaimChargesDto((prevVals) => [...prevVals, procedureValues]);
    handleClose();
  };

  const handleProcedureChange = (event) => {
    const { name, value } = event.target;

    setProcedureValues((prevCharge) => ({
      ...prevCharge,
      [name]: value,
    }));
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
              label="From"
              value={procedureValues.fromDate}
              onChange={handleProcedureChange}
              // onBlur={() => formik.setFieldTouched("toDate", true)}
              renderInput={(params) => <TextField {...params} name="toDate" />}
              inputFormat="MM/DD/YYYY"
              // clearable
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              label="To"
              value={procedureValues.fromDate}
              onChange={handleProcedureChange}
              // onBlur={() => formik.setFieldTouched("fromDate", true)}
              renderInput={(params) => (
                <TextField {...params} name="fromDate" />
              )}
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
                handleBlur={formik.handleBlur}
                handleChange={handleProcedureChange}
                fieldVal={procedureValues.procedureCode}
                name="procedureCode"
              />
            </FormControl>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <label style={{ marginRight: "20px", width: "20%" }}>POS:</label>
            <FormControl fullWidth>
              <CustomSearchField
                type="text"
                label="Pos"
                handleChange={handleProcedureChange}
                fieldVal={procedureValues.posCode}
                name="posCode"
              />
            </FormControl>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <label style={{ marginRight: "20px", width: "20%" }}>TOS:</label>
            <FormControl fullWidth>
              <CustomSearchField
                type="text"
                label="Tos"
                handleChange={handleProcedureChange}
                fieldVal={procedureValues.tosCode}
                name="tosCode"
              />
            </FormControl>
          </Box>
        </Box>

        {/* mod */}
        <Box
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
          <CustomSearchField
            label="Mod 1"
            fieldVal={procedureValues.modCode_1}
            handleChange={handleProcedureChange}
            name="modCode_1"
          />
          <CustomSearchField
            label="Mod 2"
            fieldVal={procedureValues.modCode_2}
            handleChange={handleProcedureChange}
            name="modCode_2"
          />
          <CustomSearchField
            label="Mod 3"
            fieldVal={procedureValues.modCode_3}
            handleChange={handleProcedureChange}
            name="modCode_3"
          />
          <CustomSearchField
            label="Mod 4"
            fieldVal={procedureValues.modCode_4}
            handleChange={handleProcedureChange}
            name="modCode_4"
          />
        </Box>
      </Stack>
    </>
  );
};

export default ProcedureClaim;
