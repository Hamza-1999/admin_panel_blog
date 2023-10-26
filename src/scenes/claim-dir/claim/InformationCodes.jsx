import { Box, FormControl, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomSearchField from "../../../components/CustomSearchField";
import CustomSelectBox2 from "../../../components/CustomSelectBox2";
import CustomField from "../../../components/CustomField";
import CustomModal from "../../../components/CustomModal";
import Diagnosis from "../../custom-setup/diagnosis/Diagnosis";

const InformationCodes = ({ formik }) => {
  const [openDiagnosisModal, setOpenDiagnosisModal] = useState(false);

  const types = [
    {
      id: 1,
      type: "One",
    },
    {
      id: 2,
      type: "Two",
    },
    {
      id: 3,
      type: "Three",
    },
  ];

  //   handle diagnosis
  const handleInsDiagnosis = (value) => {
    console.log(value, "check handle diagnos");

    setOpenDiagnosisModal(false);
  };
  return (
    <>
      {/* modals */}
      <CustomModal
        open={openDiagnosisModal}
        handleClose={() => setOpenDiagnosisModal(false)}
      >
        <Diagnosis
          handleClose={() => setOpenDiagnosisModal(false)}
          formik={formik}
          //   icdIdentifier={icdIdentifier}
          handleInsDiagnosis={handleInsDiagnosis}
        />
      </CustomModal>
      {/* modals end */}
      <Box
        display="grid"
        gap="20px"
        sx={{
          marginTop: "20px",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(1, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 450px))",
          },
        }}
      >
        <Stack
          className="infoCodeContainer"
          sx={{
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <FormControl fullWidth>
            <CustomSearchField label="Principal DIagnosis" />
          </FormControl>
          <Typography
            variant="h6"
            component="span"
            className="ft_content"
            width={{ xs: "100%", sm: "30%", md: "38%" }}
            display={formik.values.formType === "1" && "none"}
          >
            {/* {formik.values.formType === "2"
                    ? "2300 REF~P4"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
          </Typography>
        </Stack>
        {/* POA */}
        <Stack
          className="infoCodeContainer"
          sx={{
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <FormControl fullWidth>
            <CustomSelectBox2
              name="admissionTypeId"
              value={formik.values.admissionTypeId}
              dropdownOptions={types?.map((opt) => ({
                value: opt.type,
                id: opt.id,
              }))}
              label="POA"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
          </FormControl>
          <Typography
            variant="h6"
            component="span"
            className="ft_content"
            width={{ xs: "100%", sm: "30%", md: "38%" }}
            display={formik.values.formType === "1" && "none"}
          >
            {/* {formik.values.formType === "2"
                    ? "2300 CLM-20"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
          </Typography>
        </Stack>
        {/* Admitting Diagnosis */}
        <Stack
          className="infoCodeContainer"
          sx={{
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <FormControl fullWidth>
            <CustomSearchField label="Admitting Diagnosis" />
          </FormControl>
          <Typography
            variant="h6"
            component="span"
            className="ft_content"
            width={{ xs: "100%", sm: "30%", md: "38%" }}
            display={formik.values.formType === "1" && "none"}
          >
            {/* {formik.values.formType === "2"
                    ? "2300 REF~P4"
                    : formik.values.formType === "3"
                    ? "BOX 11b"
                    : null} */}
          </Typography>
        </Stack>
      </Box>
      external cause injury
      <Box
        display="grid"
        gap="20px"
        sx={{
          marginTop: "20px",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(1, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 920px))",
          },
        }}
      >
        <table style={{ border: "1px solid red" }}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ verticalAlign: "bottom" }}>
              <td style={{ width: "40%", border: "1px solid green" }}>
                <div>
                  <CustomSearchField
                    handleModalOpen={() => setOpenDiagnosisModal(true)}
                  />
                </div>
              </td>
              <td style={{ width: "60%" }}>
                <div>
                  <CustomField />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default InformationCodes;
