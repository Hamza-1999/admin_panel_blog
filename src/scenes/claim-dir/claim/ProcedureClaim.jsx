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
import React, { useEffect, useState } from "react";
import CustomSearchField from "../../../components/CustomSearchField";
import CustomModal from "../../../components/CustomModal";
import ProcedureCodes from "../../custom-setup/procedure-codes/ProcedureCodes";
import CustomField from "../../../components/CustomField";
import TosCodes from "../../custom-setup/tos-codes/TosCodes";
import PosCodes from "../../custom-setup/pos-codes/PosCodes";
import Modifiers from "../../custom-setup/modifiers/Modifiers";
import path from "../../../config/apiUrl";
import { getData } from "../../../config/axiosFunctions";
import CustomSelectBox from "../../../components/CustomSelectBox";

const ProcedureClaim = ({ formik, handleClose, setClaimChargesDto }) => {
  const [openProcedureCodeMod, setOpenProcedureCodeMod] = useState(false);
  const [openTosModal, setOpenTosModal] = useState(false);
  const [openPosModal, setOpenPosModal] = useState(false);
  const [openModifierModal, setOpenModifierModal] = useState(false);
  const [modIdentifier, setModIdentifier] = useState("");
  const [claimStatusOpt, setClaimStatusOpt] = useState([]);

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
  // const [procedureAmount, setProcedureAmount] = useState(null);
  const [procedureValues, setProcedureValues] = useState({
    procedureCodeId: null,
    tosCodeId: null,
    posCodeId: null,
    procedureCode: "",
    toDate: null,
    fromDate: null,
    posCode: "",
    tosCode: "",
    mod_1: null,
    mod_2: null,
    mod_3: null,
    mod_4: null,
    unitPrice: 0,
    units: 0,
    claimStatus: "",
    amountBilled: 0,
    amountPaid: 0,
    isDeleted: false,
  });

  // console.log(procedureValues.amount, "check amount prs");

  const handleOpenModifierModal = (identifier) => {
    setOpenModifierModal(true);
    setModIdentifier(identifier);
  };

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
    if (name === "units" || name === "unitPrice") {
      const newUnits = name === "units" ? Number(value) : procedureValues.units;
      const newPrice =
        name === "unitPrice" ? Number(value) : procedureValues.unitPrice;
      const newAmount = newUnits * newPrice;
      // Update the procedureValues state with the new amount
      setProcedureValues((prevCharge) => ({
        ...prevCharge,
        amountBilled: newAmount,
      }));
    }
  };

  // Define data fetching URLs
  const dataFetchUrls = {
    claimStatus: `${path}/ct-claimStatus`,
  };

  // Define a reusable function to fetch data for a given URL
  const fetchDataOptions = async (url, setter) => {
    try {
      const response = await getData(url);
      setter(response.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataOptions(dataFetchUrls.claimStatus, setClaimStatusOpt);
  }, [setClaimStatusOpt]);
  return (
    <>
      {/* procedure modal */}
      <CustomModal
        open={openProcedureCodeMod}
        handleClose={() => setOpenProcedureCodeMod(false)}
      >
        <ProcedureCodes
          setProcedureValues={setProcedureValues}
          // setProcedureAmount={setProcedureAmount}
          handleClose={() => setOpenProcedureCodeMod(false)}
        />
      </CustomModal>
      {/* tos modal */}
      <CustomModal
        open={openTosModal}
        handleClose={() => setOpenTosModal(false)}
      >
        <TosCodes
          setProcedureValues={setProcedureValues}
          handleClose={() => setOpenTosModal(false)}
        />
      </CustomModal>
      {/* pos modal */}
      <CustomModal
        open={openPosModal}
        handleClose={() => setOpenPosModal(false)}
      >
        <PosCodes
          setProcedureValues={setProcedureValues}
          handleClose={() => setOpenPosModal(false)}
        />
      </CustomModal>
      {/* modifier modal */}
      <CustomModal
        open={openModifierModal}
        handleClose={() => setOpenModifierModal(false)}
      >
        <Modifiers
          setProcedureValues={setProcedureValues}
          identifier={modIdentifier}
          handleClose={() => setOpenModifierModal(false)}
        />
      </CustomModal>
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
              onChange={(newDate) =>
                setProcedureValues((prevVals) => ({
                  ...prevVals,
                  fromDate: new Date(newDate),
                }))
              }
              onBlur={() => formik.setFieldTouched("fromDate", true)}
              renderInput={(params) => <TextField {...params} />}
              inputFormat="MM/DD/YYYY"
              // clearable
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              label="To"
              value={procedureValues.toDate}
              onChange={(newDate) =>
                setProcedureValues((prevVals) => ({
                  ...prevVals,
                  toDate: new Date(newDate),
                }))
              }
              onBlur={() => formik.setFieldTouched("toDate", true)}
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
                handleBlur={formik.handleBlur}
                handleChange={handleProcedureChange}
                fieldVal={procedureValues.procedureCode}
                name="procedureCode"
                handleModalOpen={() => setOpenProcedureCodeMod(true)}
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
                handleModalOpen={() => setOpenPosModal(true)}
                handleBlur={formik.handleBlur}
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
                handleBlur={formik.handleBlur}
                fieldVal={procedureValues.tosCode}
                name="tosCode"
                handleModalOpen={() => setOpenTosModal(true)}
              />
            </FormControl>
          </Box>
        </Box>

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
          <CustomField
            type="number"
            label="Units"
            name="units"
            value={procedureValues.units}
            handleChange={handleProcedureChange}
            handleBlur={formik.handleBlur}
          />
          <CustomField
            type="number"
            label="Price"
            name="unitPrice"
            value={procedureValues.unitPrice}
            handleChange={handleProcedureChange}
            handleBlur={formik.handleBlur}
          />
          <CustomField
            type="number"
            label="Amount"
            name="amountBilled"
            value={procedureValues.amountBilled}
            handleChange={handleProcedureChange}
            handleBlur={formik.handleBlur}
          />
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
            handleModalOpen={() => handleOpenModifierModal(1)}
            handleBlur={formik.handleBlur}
          />
          <CustomSearchField
            label="Mod 2"
            fieldVal={procedureValues.modCode_2}
            handleChange={handleProcedureChange}
            name="modCode_2"
            handleModalOpen={() => handleOpenModifierModal(2)}
            handleBlur={formik.handleBlur}
          />
          <CustomSearchField
            label="Mod 3"
            fieldVal={procedureValues.modCode_3}
            handleChange={handleProcedureChange}
            name="modCode_3"
            handleModalOpen={() => handleOpenModifierModal(3)}
            handleBlur={formik.handleBlur}
          />
          <CustomSearchField
            label="Mod 4"
            fieldVal={procedureValues.modCode_4}
            handleChange={handleProcedureChange}
            name="modCode_4"
            handleModalOpen={() => handleOpenModifierModal(4)}
            handleBlur={formik.handleBlur}
          />
        </Box>

        {/* claim status */}
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
          <CustomSelectBox
            value={procedureValues.claimStatus}
            name="claimStatus"
            dropdownOptions={claimStatusOpt?.map((opt) => ({
              value: opt.claimStatusType,
              id: opt.claimStatusId,
            }))}
            label="Claim Status"
            handleChange={handleProcedureChange}
            handleBlur={formik.handleBlur}
          />
        </Box>
      </Stack>
    </>
  );
};

export default ProcedureClaim;
