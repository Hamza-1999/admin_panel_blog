import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import CustomSearchField from "../../../components/CustomSearchField";
import CustomField from "../../../components/CustomField";
import CustomSelectBox from "../../../components/CustomSelectBox";
import path from "../../../config/apiUrl";
import { getData } from "../../../config/axiosFunctions";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CustomModal from "../../../components/CustomModal";
import Diagnosis from "../../custom-setup/diagnosis/Diagnosis";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ProcedureClaim from "./ProcedureClaim";
import ProcedureTable from "./ProcedureTable";

const ClaimCharges = ({ formik, claimChargesDto, setClaimChargesDto }) => {
  console.log(claimChargesDto, "get claim charges5");
  const [openDiagnosisModal, setOpenDiagnosisModal] = useState(false);
  const [openProcedureModal, setOpenProcedureModal] = useState(false);
  const [icdIdentifier, setIcdIdentifier] = useState("");

  const handleOpenDiagnosisModal = (identifier) => {
    setOpenDiagnosisModal(true);
    setIcdIdentifier(identifier);
  };

  const handleAddProcedure = () => {
    setOpenProcedureModal(true);
  };

  return (
    <>
      <CustomModal
        open={openDiagnosisModal}
        handleClose={() => setOpenDiagnosisModal(false)}
      >
        <Diagnosis
          handleClose={() => setOpenDiagnosisModal(false)}
          formik={formik}
          icdIdentifier={icdIdentifier}
        />
      </CustomModal>
      {/* procedure modal */}
      <CustomModal
        open={openProcedureModal}
        handleClose={() => setOpenProcedureModal(false)}
      >
        <ProcedureClaim
          formik={formik}
          setClaimChargesDto={setClaimChargesDto}
          handleClose={() => setOpenProcedureModal(false)}
        />
      </CustomModal>

      <>
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              height: "300px",
              overflowY: "scroll",
              border: "1px solid lightgrey",
              padding: "12px",
              width: { xs: "95%", sm: "75%", md: "50%" },
            }}
          >
            <Box>
              <Typography variant="h4" component="h4">
                ICD Codes
              </Typography>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD A"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_A_Code}
                name="icD_A_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("A")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_A_Description}
                  name="icd_A_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD B"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_B_Code}
                name="icD_B_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("B")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_B_Description}
                  name="icd_B_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD C"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_C_Code}
                name="icD_C_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("C")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_C_Description}
                  name="icd_C_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD D"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_D_Code}
                name="icD_D_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("D")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_D_Description}
                  name="icd_D_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD E"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_E_Code}
                name="icD_E_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("E")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_E_Description}
                  name="icd_E_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD F"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_F_Code}
                name="icD_F_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("F")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_F_Description}
                  name="icd_F_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD G"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_G_Code}
                name="icD_G_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("G")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_G_Description}
                  name="icd_G_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD H"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_H_Code}
                name="icD_H_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("H")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_H_Description}
                  name="icd_H_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD I"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_I_Code}
                name="icD_I_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("I")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_I_Description}
                  name="icd_I_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD J"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_J_Code}
                name="icD_J_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("J")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_J_Description}
                  name="icd_J_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD K"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_K_Code}
                name="icD_K_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("K")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_K_Description}
                  name="icd_K_Description"
                />
              </Box>
            </Box>
            <Box
              display="grid"
              gap="30px"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
              }}
            >
              <CustomField
                type="text"
                label="ICD L"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.icD_L_Code}
                name="icD_L_Code"
                isOutlined={true}
              />

              <Box
                sx={{
                  gridColumn: { xs: "span 1", sm: "span 2", md: "span 3" },
                }}
              >
                <CustomSearchField
                  type="text"
                  handleModalOpen={() => handleOpenDiagnosisModal("L")}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  fieldVal={formik.values.icd_L_Description}
                  name="icd_L_Description"
                />
              </Box>
            </Box>
          </Box>

          {/* Procedure table */}
          <Box marginTop={"30px"}>
            <Button
              onClick={handleAddProcedure}
              variant="contained"
              sx={{ bgcolor: "#6870fa", color: "#fff", marginBottom: "15px" }}
            >
              Add Procedures
            </Button>

            <ProcedureTable
              claimChargesDto={claimChargesDto}
              setClaimChargesDto={setClaimChargesDto}
            />
          </Box>
        </div>
      </>
    </>
  );
};

export default ClaimCharges;
