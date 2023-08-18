import React, { useEffect, useState } from "react";
import CustomModal from "../../../components/CustomModal";
import Header from "../../../components/Header";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { ExpandMore, Search } from "@mui/icons-material";
import CustomSelectBox from "../../../components/CustomSelectBox";
import { useFormik } from "formik";
import path from "../../../config/apiUrl";
import { getData } from "../../../config/axiosFunctions";
import { useDispatch, useSelector } from "react-redux";
import {
  getPracticeAction,
  newPracticeAction,
  updatePracticeAction,
} from "../../../features/actions/practiceAction";
import TaxonomyCategories from "./taxonomy/TaxonomyCategories";
import { useNavigate, useParams } from "react-router-dom";
import { updatePatientAction } from "../../../features/actions/createPatientAction";
import SearchNpi from "./npi/SearchNpi";

const UpdatePractice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [taxonomyListModal, setTaxonomyListModal] = useState(false);
  const [searchNpiModal, setSearchNpiModal] = useState(false);
  const [organizationType, setOrganizationType] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  const { getPractices } = useSelector((state) => state.practices);
  console.log(getPractices.result, "getting pracices in update");
  const findPractice = getPractices.result?.find(
    (el) => el.practiceId === Number(id)
  );

  const initialValues = {
    practiceName: findPractice?.practiceName || "",
    practiceNPINo: findPractice?.practiceNPINo || null,
    taxonomySpeciality: findPractice?.taxonomySpeciality || "",
    organizationTypeName: findPractice?.organizationTypeName || "",
    sequenceNo: findPractice?.sequenceNo || null,
    referenceNo: findPractice?.referenceNo || null,
    tcnPrefix: findPractice?.tcnPrefix || "",
    code: findPractice?.code || "",
    primaryAddress: findPractice?.primaryAddress || "",
    primaryCity: findPractice?.primaryCity || "",
    primaryState: findPractice?.primaryState || "",
    primaryZipCode: findPractice?.primaryZipCode || null,
    primaryPhone: findPractice?.primaryPhone || null,
    primaryFax: findPractice?.primaryFax || "",
    payToAddress: findPractice?.payToAddress || "",
    payToCity: findPractice?.payToCity || "",
    payToState: findPractice?.payToState || "",
    payToZipCode: findPractice?.payToZipCode || null,
    sameAsPrimary: findPractice ? true : false,
  };
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      try {
        dispatch(
          updatePracticeAction({
            practiceId: findPractice?.practiceId,
            ...values,
          })
        );
      } catch (error) {
        console.error("Error creating patient:", error);
      }
      action.resetForm();
      navigate("/practice");
    },
  });

  const handleCheckboxChange = () => {
    setFieldValue("sameAsPrimary", !values.sameAsPrimary);

    if (!values.sameAsPrimary) {
      setFieldValue("payToAddress", values.primaryAddress);
      setFieldValue("payToCity", values.primaryCity);
      setFieldValue("payToState", values.primaryState);
      setFieldValue("payToZipCode", values.primaryZipCode);
    } else {
      setFieldValue("payToAddress", "");
      setFieldValue("payToCity", "");
      setFieldValue("payToState", "");
      setFieldValue("payToZipCode", "");
    }
  };

  // Define data fetching URLs
  const dataFetchUrls = {
    priorityType: `${path}/ct-organizationType`,
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
    fetchDataOptions(dataFetchUrls.priorityType, setOrganizationType);
  }, [dispatch]);

  useEffect(() => {
    setValues({
      practiceName: findPractice?.practiceName || "",
      practiceNPINo: findPractice?.practiceNPINo || null,
      taxonomySpeciality: findPractice?.taxonomySpeciality || "",
      organizationTypeName: findPractice?.organizationTypeName || "",
      sequenceNo: findPractice?.sequenceNo || null,
      referenceNo: findPractice?.referenceNo || null,
      tcnPrefix: findPractice?.tcnPrefix || "",
      code: findPractice?.code || "",
      primaryAddress: findPractice?.primaryAddress || "",
      primaryCity: findPractice?.primaryCity || "",
      primaryState: findPractice?.primaryState || "",
      primaryZipCode: findPractice?.primaryZipCode || null,
      primaryPhone: findPractice?.primaryPhone || null,
      primaryFax: findPractice?.primaryFax || "",
      payToAddress: findPractice?.payToAddress || "",
      payToCity: findPractice?.payToCity || "",
      payToState: findPractice?.payToState || "",
      payToZipCode: findPractice?.payToZipCode || null,
      sameAsPrimary: findPractice ? true : false,
    });
  }, [findPractice]);

  useEffect(() => {
    dispatch(getPracticeAction());
  }, [dispatch]);
  return (
    <>
      <CustomModal
        open={taxonomyListModal}
        handleClose={() => setTaxonomyListModal(false)}
      >
        <TaxonomyCategories
          setFieldValue={setFieldValue}
          handleClose={() => setTaxonomyListModal(false)}
        />
      </CustomModal>
      <CustomModal
        open={searchNpiModal}
        handleClose={() => setSearchNpiModal(false)}
      >
        <SearchNpi
          setFieldValue={setFieldValue}
          handleClose={() => setSearchNpiModal(false)}
          setSearchNpiModal={setSearchNpiModal}
        />
      </CustomModal>

      <Box margin={"20px"} sx={{ width: { xs: "80%", sm: "70%", md: "60%" } }}>
        <Header title="Update Practice" subtitle="" />

        <form onSubmit={handleSubmit}>
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
              label="Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.practiceName}
              name="practiceName"
              id="practiceName"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
          </Box>
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
              value={values.practiceNPINo}
              name="practiceNPINo"
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

            <CustomSelectBox
              value={values.organizationTypeName}
              name="organizationTypeName"
              dropdownOptions={organizationType?.map((opt) => ({
                value: opt.organizationTypeName,
                id: opt.organizationTypeId,
              }))}
              label="Organization Type"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Box>

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
              type="text"
              size="small"
              variant="filled"
              sx={{
                width: { xs: "100%", sm: "100%" },
                fontSize: "1rem",
              }}
              value={values.taxonomySpeciality}
              name="taxonomySpeciality"
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
          <Box marginTop={"30px"}>
            <Typography variant="h5" component="h5">
              Sequence
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
                md: "repeat(4, minmax(0, 1fr))",
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
              value={values.sequenceNo}
              name="sequenceNo"
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
              value={values.referenceNo}
              name="referenceNo"
              id="referenceNo"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              size="small"
              fullWidth
              variant="filled"
              type="text"
              label="TCN Prefix"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.tcnPrefix}
              name="tcnPrefix"
              id="tcnPrefix"
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
              value={values.code}
              name="code"
              id="code"
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 1" }}
            />
          </Box>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h5" component={"h4"}>
                Primary Office
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                display="grid"
                margin={"20px 0"}
                gap="10px"
                sx={{
                  gridTemplateColumns: {
                    xs: "repeat(1, minmax(0, 1fr))",
                    sm: "repeat(1, minmax(0, 1fr))",
                    md: "repeat(1, minmax(0, 1fr))",
                  },
                }}
              >
                <TextareaAutosize
                  placeholder="Address"
                  value={values.primaryAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="primaryAddress"
                  minRows={"5"}
                />
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
                  type="text"
                  label="City"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.primaryCity}
                  name="primaryCity"
                  id="primaryCity"
                  // error={!!touched.firstName && !!errors.firstName}
                  // helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 1" }}
                />

                <TextField
                  size="small"
                  fullWidth
                  variant="filled"
                  type="text"
                  label="State"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.primaryState}
                  name="primaryState"
                  id="primaryState"
                  // error={!!touched.firstName && !!errors.firstName}
                  // helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 1" }}
                />

                <TextField
                  size="small"
                  fullWidth
                  variant="filled"
                  type="number"
                  label="ZipCode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.primaryZipCode}
                  name="primaryZipCode"
                  id="primaryZipCode"
                  // error={!!touched.firstName && !!errors.firstName}
                  // helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 1" }}
                />
              </Box>
              <Box
                display="grid"
                margin={"20px 0"}
                gap="10px"
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
                  type="number"
                  label="Phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.primaryPhone}
                  name="primaryPhone"
                  id="primaryPhone"
                  // error={!!touched.firstName && !!errors.firstName}
                  // helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 1" }}
                />

                <TextField
                  size="small"
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Fax"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.primaryFax}
                  name="primaryFax"
                  id="primaryFax"
                  // error={!!touched.firstName && !!errors.firstName}
                  // helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 1" }}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Box marginTop={"30px"}>
            <label>
              <input
                type="checkbox"
                name="sameAsPrimary"
                checked={values.sameAsPrimary}
                onChange={handleCheckboxChange}
              />{" "}
              Pay-To address is the same as the primary office address
            </label>
          </Box>
          {!values.sameAsPrimary && (
            <Accordion sx={{ marginTop: "10px" }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h5" component={"h4"}>
                  Pay-To Address
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  display="grid"
                  margin={"20px 0"}
                  gap="10px"
                  sx={{
                    gridTemplateColumns: {
                      xs: "repeat(1, minmax(0, 1fr))",
                      sm: "repeat(1, minmax(0, 1fr))",
                      md: "repeat(1, minmax(0, 1fr))",
                    },
                  }}
                >
                  <TextareaAutosize
                    placeholder="Address"
                    value={values.payToAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="payToAddress"
                    minRows={"5"}
                  />
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
                    type="text"
                    label="City"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.payToCity}
                    name="payToCity"
                    id="payToCity"
                    // error={!!touched.firstName && !!errors.firstName}
                    // helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 1" }}
                  />

                  <TextField
                    size="small"
                    fullWidth
                    variant="filled"
                    type="text"
                    label="State"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.payToState}
                    name="payToState"
                    id="payToState"
                    // error={!!touched.firstName && !!errors.firstName}
                    // helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 1" }}
                  />

                  <TextField
                    size="small"
                    fullWidth
                    variant="filled"
                    type="number"
                    label="ZipCode"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.payToZipCode}
                    name="payToZipCode"
                    id="payToZipCode"
                    // error={!!touched.firstName && !!errors.firstName}
                    // helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 1" }}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          )}

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

export default UpdatePractice;
