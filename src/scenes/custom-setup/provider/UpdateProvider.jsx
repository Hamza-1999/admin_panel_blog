import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../../components/Header";
import { useFormik } from "formik";
import { ExpandMore, Search } from "@mui/icons-material";
import CustomModal from "../../../components/CustomModal";
import TaxonomyCategories from "../practices/taxonomy/TaxonomyCategories";
import SearchNpi from "../practices/npi/SearchNpi";
import { useState } from "react";
import CustomSelectBox from "../../../components/CustomSelectBox";
import Practice from "../practices/Practice";
import PracticeModData from "../../../components/PracticeModData";
import ProviderModal from "../../../components/ProviderModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getProviderAction,
  updateProviderAction,
} from "../../../features/actions/providerAction";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProvider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [taxonomyListModal, setTaxonomyListModal] = useState(false);
  const [searchNpiModal, setSearchNpiModal] = useState(false);
  const [practiceModal, setPracticeModal] = useState(false);
  const [billingProviderModal, setBillingProviderModal] = useState(false);
  const [elibilityProviderModal, setEligibilityProviderModal] = useState(false);
  const { id } = useParams();

  const { getProviders, loading } = useSelector((state) => state.provider);
  console.log(getProviders, "getting data in update prov");
  const findProvValues = getProviders.result?.find(
    (el) => el.providerId === Number(id)
  );
  console.log(findProvValues, "provValue");

  const initialValues = {
    providerFirstName: findProvValues?.providerFirstName || "",
    providerLastName: findProvValues?.providerLastName || "",
    providerMI: findProvValues?.providerMI || "",
    providerCredential: findProvValues?.providerCredential || "",
    providerOrganization: findProvValues?.providerOrganization || "",
    providerNPINo: findProvValues?.providerNPINo || null,
    providerTaxonomySpeciality:
      findProvValues?.providerTaxonomySpeciality || "",
    providerSequenceNo: findProvValues?.providerSequenceNo || null,
    providerReferenceNo: findProvValues?.providerReferenceNo || null,
    providerCode: findProvValues?.providerCode || "",
    practiceName: findProvValues?.practiceName || "",
    ssn: findProvValues?.ssn || "",
    ein: findProvValues?.ein || "",
    billingProviderName: findProvValues?.billingProviderName || "",
    eligibilityProviderName: findProvValues?.eligibilityProviderName || "",
  };
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log(values, "update provider Values");
      try {
        dispatch(
          updateProviderAction({
            providerId: findProvValues?.providerId,
            ...values,
          })
        );
      } catch (error) {
        throw new Error(error);
      }

      action.resetForm();
      navigate("/provider");
    },
  });

  const handleSelectTaxonomy = (taxonomyCode) => {
    setFieldValue("providerTaxonomySpeciality", taxonomyCode);
  };

  const handleSelectNpi = (npiNum) => {
    setFieldValue("providerNPINo", npiNum);
  };

  // useEffect(() => {
  //   setValues({
  //     providerFirstName: findProvValues?.providerFirstName || "",
  //     providerLastName: findProvValues?.providerLastName || "",
  //     providerMI: findProvValues?.providerMI || "",
  //     providerCredential: findProvValues?.providerCredential || "",
  //     providerOrganization: findProvValues?.providerOrganization || "",
  //     providerNPINo: findProvValues?.providerNPINo || null,
  //     providerTaxonomySpeciality:
  //       findProvValues?.providerTaxonomySpeciality || "",
  //     providerSequenceNo: findProvValues?.providerSequenceNo || null,
  //     providerReferenceNo: findProvValues?.providerReferenceNo || null,
  //     providerCode: findProvValues?.providerCode || "",
  //     practiceName: findProvValues?.practiceName || "",
  //     ssn: findProvValues?.ssn || "",
  //     ein: findProvValues?.ein || "",
  //     billingProviderName: findProvValues?.billingProviderName || "",
  //     eligibilityProviderName: findProvValues?.eligibilityProviderName || "",
  //   });
  // }, [findProvValues]);

  useEffect(() => {
    dispatch(getProviderAction());
  }, [dispatch]);

  return (
    <>
      {/* custom modals */}
      <CustomModal
        open={taxonomyListModal}
        handleClose={() => setTaxonomyListModal(false)}
      >
        <TaxonomyCategories
          //   setTaxonomyName={setTaxonomyName}
          handleSelectTaxonomy={handleSelectTaxonomy}
          handleClose={() => setTaxonomyListModal(false)}
        />
      </CustomModal>
      {/* npi modal */}
      <CustomModal
        open={searchNpiModal}
        handleClose={() => setSearchNpiModal(false)}
      >
        <SearchNpi
          //   setFieldValue={setFieldValue}
          handleSelectNpi={handleSelectNpi}
          handleClose={() => setSearchNpiModal(false)}
          setSearchNpiModal={setSearchNpiModal}
        />
      </CustomModal>

      <CustomModal
        open={practiceModal}
        handleClose={() => setPracticeModal(false)}
      >
        <PracticeModData
          handleClose={() => setPracticeModal(false)}
          setFieldValue={setFieldValue}
        />
      </CustomModal>

      <CustomModal
        open={billingProviderModal}
        handleClose={() => setBillingProviderModal(false)}
      >
        <ProviderModal
          fieldToSet="billingProviderName"
          handleClose={() => setBillingProviderModal(false)}
          setFieldValue={setFieldValue}
        />
      </CustomModal>
      <CustomModal
        open={elibilityProviderModal}
        handleClose={() => setEligibilityProviderModal(false)}
      >
        <ProviderModal
          fieldToSet="eligibilityProviderName"
          handleClose={() => setEligibilityProviderModal(false)}
          setFieldValue={setFieldValue}
        />
      </CustomModal>

      <Box margin={"20px"} sx={{ width: { xs: "80%", sm: "70%", md: "60%" } }}>
        <Header title="Update Provider" subtitle="" />

        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            margin={"20px 0"}
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(1, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
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
              value={values.providerFirstName}
              name="providerFirstName"
              id="providerFirstName"
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
              value={values.providerLastName}
              name="providerLastName"
              id="providerLastName"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              size="small"
              fullWidth
              variant="filled"
              type="text"
              label="MI"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.providerMI}
              name="providerMI"
              id="providerMI"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              size="small"
              fullWidth
              variant="filled"
              type="text"
              label="Credentials"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.providerCredential}
              name="providerCredential"
              id="providerCredential"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
          </Box>

          {/* organization name */}
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
              label="Origanization Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.providerOrganization}
              name="providerOrganization"
              id="providerOrganization"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
          </Box>

          {/* modals npi - taxonomy */}
          <Box
            display="grid"
            margin={"20px 0"}
            gap="30px"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(2, minmax(0, 1fr))",
              },
            }}
          >
            <TextField
              type="number"
              size="small"
              variant="filled"
              sx={{
                width: { xs: "100%", sm: "100%" },
                fontSize: "1rem",
              }}
              value={values.providerNPINo}
              name="providerNPINo"
              onChange={handleChange}
              onBlur={handleBlur}
              label="NPI"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton onClick={() => setSearchNpiModal(true)}>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              type="text"
              size="small"
              variant="filled"
              sx={{
                width: { xs: "100%", sm: "100%" },
                fontSize: "1rem",
              }}
              value={values.providerTaxonomySpeciality}
              name="providerTaxonomySpeciality"
              onChange={handleChange}
              onBlur={handleBlur}
              label="Taxonomy"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton onClick={() => setTaxonomyListModal(true)}>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* sequence refrence code */}

          <Box marginTop={"30px"}>
            <Typography variant="h5" component="h5">
              Sequence #
            </Typography>
          </Box>
          <Box
            display="grid"
            margin={"20px 0"}
            gap="10px"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
              },
            }}
          >
            <TextField
              size="small"
              fullWidth
              variant="filled"
              type="number"
              placeholder="#New"
              disabled
              value={values.providerSequenceNo}
              name="providerSequenceNo"
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ gridColumn: "span 1" }}
            />

            <TextField
              size="small"
              fullWidth
              variant="filled"
              type="number"
              label="Refrence#"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.providerReferenceNo}
              name="providerReferenceNo"
              id="providerReferenceNo"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              size="small"
              fullWidth
              variant="filled"
              type="text"
              label="Code"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.providerCode}
              name="providerCode"
              id="providerCode"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
          </Box>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h4" component="h4">
                Billing Information
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* practice for the provider */}
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
                  type="text"
                  size="small"
                  variant="filled"
                  sx={{
                    width: { xs: "100%", sm: "100%" },
                    fontSize: "1rem",
                  }}
                  value={values.practiceName}
                  name="practiceName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Practice for this provider"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton onClick={() => setPracticeModal(true)}>
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
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
                  type="text"
                  size="small"
                  variant="filled"
                  sx={{
                    width: { xs: "100%", sm: "100%" },
                    fontSize: "1rem",
                  }}
                  value={values.billingProviderName}
                  name="billingProviderName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Bills Claims Under"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton
                          onClick={() => setBillingProviderModal(true)}
                        >
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
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
                  type="text"
                  size="small"
                  variant="filled"
                  sx={{
                    width: { xs: "100%", sm: "100%" },
                    fontSize: "1rem",
                  }}
                  value={values.eligibilityProviderName}
                  name="eligibilityProviderName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Check Eligibility Under"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton
                          onClick={() => setEligibilityProviderModal(true)}
                        >
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Box margin={"20px 0"}>
            <Button variant="contained" color="secondary" type="submit">
              Update
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default UpdateProvider;
