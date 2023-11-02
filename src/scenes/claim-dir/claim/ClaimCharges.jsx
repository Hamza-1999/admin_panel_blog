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
import InsClaimCharges from "./InsClaimCharges";

const ClaimCharges = ({
  findClaim,
  formik,
  claimChargesDto,
  setClaimChargesDto,
}) => {
  console.log(formik.values.icD_B, "icd ids");
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
          {formik.values.claimTypeId === 1 ? (
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
                  value={formik.values.icD_Code_A}
                  name="icD_Code_A"
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
                    fieldVal={formik.values.icd_Description_A}
                    name="icd_Description_A"
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
                  value={formik.values.icD_Code_B}
                  name="icD_Code_B"
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
                    fieldVal={formik.values.icd_Description_B}
                    name="icd_Description_B"
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
                  value={formik.values.icD_Code_C}
                  name="icD_Code_C"
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
                    fieldVal={formik.values.icd_Description_C}
                    name="icd_Description_C"
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
                  value={formik.values.icD_Code_D}
                  name="icD_Code_D"
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
                    fieldVal={formik.values.icd_Description_D}
                    name="icd_Description_D"
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
                  value={formik.values.icD_Code_E}
                  name="icD_Code_E"
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
                    fieldVal={formik.values.icd_Description_E}
                    name="icd_Description_E"
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
                  value={formik.values.icD_Code_F}
                  name="icD_Code_F"
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
                    fieldVal={formik.values.icd_Description_F}
                    name="icd_Description_F"
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
                  value={formik.values.icD_Code_G}
                  name="icD_Code_G"
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
                    fieldVal={formik.values.icd_Description_G}
                    name="icd_Description_G"
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
                  value={formik.values.icD_Code_H}
                  name="icD_Code_H"
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
                    fieldVal={formik.values.icd_Description_H}
                    name="icd_Description_H"
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
                  value={formik.values.icD_Code_I}
                  name="icD_Code_I"
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
                    fieldVal={formik.values.icd_Description_I}
                    name="icd_Description_I"
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
                  value={formik.values.icD_Code_J}
                  name="icD_Code_J"
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
                    fieldVal={formik.values.icd_Description_J}
                    name="icd_Description_J"
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
                  value={formik.values.icD_Code_K}
                  name="icD_Code_K"
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
                    fieldVal={formik.values.icd_Description_K}
                    name="icd_Description_K"
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
                  value={formik.values.icD_Code_L}
                  name="icD_Code_L"
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
                    fieldVal={formik.values.icd_Description_L}
                    name="icd_Description_L"
                  />
                </Box>
              </Box>
            </Box>
          ) : (
            <Box>
              <InsClaimCharges />
            </Box>
          )}

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
              findClaim={findClaim}
            />
          </Box>
        </div>
      </>
    </>
  );
};

export default ClaimCharges;
