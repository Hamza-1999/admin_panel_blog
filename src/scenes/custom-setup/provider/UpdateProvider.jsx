import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  Stack,
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

  console.log(findProvValues?.ein, "is ein");
  const [selectBill, setSelectBill] = useState({
    billProv: findProvValues?.billingProviderName || "",
    seqNo: findProvValues?.providerSequenceNo || null,
  });

  const [selectEligibility, setSelectElibility] = useState({
    eligProv: findProvValues?.eligibilityProviderName || "",
    seqNo: findProvValues?.providerSequenceNo || null,
  });

  const [selectPractice, setSelectPractice] = useState({
    pracName: findProvValues?.practiceName || "",
    seqNo: findProvValues?.practiceSequenceNo || null,
  });

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
    practiceId: findProvValues?.practiceId || null,
    ssn: findProvValues?.ssn || "",
    ein: findProvValues?.ein || "",
    billingProviderName: findProvValues?.billingProviderName || "",
    eligibilityProviderName: findProvValues?.eligibilityProviderName || "",
    isIndividual: findProvValues?.isIndividual || null,
    isIdNo: findProvValues?.isIdNo || null,
  };
  const { handleBlur, handleChange, handleSubmit, values, setFieldValue } =
    useFormik({
      enableReinitialize: true,
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

  useEffect(() => {
    dispatch(getProviderAction());
  }, []);

  useEffect(() => {
    setSelectBill({
      billProv: findProvValues?.billingProviderName || "",
      seqNo: findProvValues?.providerSequenceNo || null,
    });

    setSelectElibility({
      eligProv: findProvValues?.eligibilityProviderName || "",
      seqNo: findProvValues?.providerSequenceNo || null,
    });

    setSelectPractice({
      pracName: findProvValues?.practiceName || "",
      seqNo: findProvValues?.practiceSequenceNo || null,
    });
  }, []);

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
          setSelectPractice={setSelectPractice}
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
          setSelectBill={setSelectBill}
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
          setSelectElibility={setSelectElibility}
        />
      </CustomModal>

      <Box margin={"20px"} sx={{ width: { xs: "80%", sm: "70%", md: "60%" } }}>
        <Header title="Update Provider" subtitle="" />

        <form onSubmit={handleSubmit}>
          {values.isIndividual ? (
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
          ) : (
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
          )}

          <Stack flexDirection={"row"} alignItems={"center"}>
            <FormControlLabel
              label="Individual"
              control={
                <Radio
                  value="individual"
                  variant="soft"
                  label="Individual"
                  name="radio-buttons"
                  checked={values.isIndividual}
                  onChange={() => setFieldValue("isIndividual", true)}
                />
              }
            />

            <FormControlLabel
              label="Organization"
              control={
                <Radio
                  value="organization"
                  variant="soft"
                  label="Organization"
                  name="radio-buttons"
                  checked={!values.isIndividual}
                  onChange={() => setFieldValue("isIndividual", false)}
                />
              }
            />
          </Stack>

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
                  type="number"
                  value={values.practiceId}
                  name="practiceId"
                  sx={{ display: "none" }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled
                />
                <TextField
                  type="text"
                  size="small"
                  variant="filled"
                  sx={{
                    width: { xs: "100%", sm: "100%" },
                    fontSize: "1rem",
                    display: "none",
                  }}
                  value={values.practiceName}
                  name="practiceName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Practice for this provider"
                />

                <TextField
                  type="text"
                  size="small"
                  variant="filled"
                  sx={{
                    width: { xs: "100%", sm: "100%" },
                    fontSize: "1rem",
                  }}
                  value={
                    selectPractice.pracName &&
                    `${selectPractice.pracName} (${selectPractice.seqNo})`
                  }
                  name="pracName"
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
              {/* billing provider name */}
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
                  variant="outlined"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.billingProviderName}
                  name="billingProviderName"
                  id="billingProviderName"
                  // error={!!touched.firstName && !!errors.firstName}
                  // helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 1", display: "none" }}
                />

                <TextField
                  type="text"
                  size="small"
                  variant="filled"
                  sx={{
                    width: { xs: "100%", sm: "100%" },
                    fontSize: "1rem",
                  }}
                  value={
                    selectBill.billProv &&
                    `${selectBill.billProv} (${selectBill.seqNo})`
                  }
                  name="billProv"
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

              {/* eligibility provider */}
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
                  variant="outlined"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.eligibilityProviderName}
                  name="eligibilityProviderName"
                  id="eligibilityProviderName"
                  // error={!!touched.firstName && !!errors.firstName}
                  // helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 1", display: "none" }}
                />
                <TextField
                  type="text"
                  size="small"
                  variant="filled"
                  sx={{
                    width: { xs: "100%", sm: "100%" },
                    fontSize: "1rem",
                  }}
                  value={
                    selectEligibility.eligProv &&
                    `${selectEligibility.eligProv} (${selectEligibility.seqNo})`
                  }
                  name="eligProv"
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
                {values.isIdNo ? (
                  <TextField
                    type="text"
                    size="small"
                    variant="filled"
                    value={values.ssn}
                    name="ssn"
                    label="Use which id ?"
                    placeholder="SSN"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                ) : (
                  <TextField
                    type="text"
                    size="small"
                    variant="filled"
                    value={values.ein}
                    name="ein"
                    label="Use which id ?"
                    placeholder="EIN"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}

                <Stack flexDirection={"row"} alignItems={"center"}>
                  <FormControlLabel
                    label="Social Security# (SSN)"
                    control={
                      <Radio
                        value="ssn"
                        variant="soft"
                        name="ssn"
                        checked={values.isIdNo}
                        onChange={() => setFieldValue("isIdNo", true)}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Employer Identification# (EIN)"
                    control={
                      <Radio
                        value="ein"
                        variant="soft"
                        name="ein"
                        checked={!values.isIdNo}
                        onChange={() => setFieldValue("isIdNo", false)}
                      />
                    }
                  />
                </Stack>
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
