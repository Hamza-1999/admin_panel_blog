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
import { useDispatch } from "react-redux";
import { newPracticeAction } from "../../../features/actions/practiceAction";
import TaxonomyCategories from "./taxonomy/TaxonomyCategories";
import { useNavigate } from "react-router-dom";
import SearchNpi from "./npi/SearchNpi";
import CustomSearchField from "../../../components/CustomSearchField";
import CustomButton from "../../../components/CustomButton";

const NewPractice = () => {
  const dispatch = useDispatch();
  const [taxonomyName, setTaxonomyName] = useState("");
  const [taxonomyListModal, setTaxonomyListModal] = useState(false);
  const [searchNpiModal, setSearchNpiModal] = useState(false);
  const [organizationType, setOrganizationType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    practiceName: "",
    practiceNPINo: null,
    taxonomySpeciality: "",
    organizationTypeName: "",
    sequenceNo: null,
    referenceNo: null,
    tcnPrefix: "",
    code: "",
    primaryAddress: "",
    primaryCity: "",
    primaryState: "",
    primaryZipCode: null,
    primaryPhone: null,
    primaryFax: "",
    payToAddress: "",
    payToCity: "",
    payToState: "",
    payToZipCode: null,
    isPayToAddressSame: false,
  };
  const { handleChange, handleBlur, handleSubmit, values, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log(values, "practice data");
        try {
          dispatch(newPracticeAction(values));
        } catch (error) {
          console.error("Error creating patient:", error);
        }
        action.resetForm();
      },
    });

  const handleCheckboxChange = () => {
    setFieldValue("isPayToAddressSame", !values.isPayToAddressSame);

    if (values.isPayToAddressSame) {
      setFieldValue("payToAddress", "");
      setFieldValue("payToCity", "");
      setFieldValue("payToState", "");
      setFieldValue("payToZipCode", "");
    } else {
      setFieldValue("payToAddress", values.primaryAddress);
      setFieldValue("payToCity", values.primaryCity);
      setFieldValue("payToState", values.primaryState);
      setFieldValue("payToZipCode", values.primaryZipCode);
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
  }, []);

  const handleSelectTaxonomy = (taxonomyCode) => {
    setFieldValue("taxonomySpeciality", taxonomyCode);
  };

  const handleSelectNpi = (npiNum) => {
    setFieldValue("practiceNPINo", npiNum);
  };
  return (
    <>
      <CustomModal
        open={taxonomyListModal}
        handleClose={() => setTaxonomyListModal(false)}
      >
        <TaxonomyCategories
          handleSelectTaxonomy={handleSelectTaxonomy}
          setTaxonomyName={setTaxonomyName}
          handleClose={() => setTaxonomyListModal(false)}
        />
      </CustomModal>
      {/* npi modal */}
      <CustomModal
        open={searchNpiModal}
        handleClose={() => setSearchNpiModal(false)}
      >
        <SearchNpi
          handleSelectNpi={handleSelectNpi}
          handleClose={() => setSearchNpiModal(false)}
          setSearchNpiModal={setSearchNpiModal}
        />
      </CustomModal>

      <Box margin={"20px"} sx={{ width: { xs: "80%", sm: "70%", md: "60%" } }}>
        <Header title="Add New Practice" subtitle="" />

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
            <CustomSearchField
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
<div style={{marginTop:'4px'}}>
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
            </div>
          </Box>

          <Box
            display="grid"
            margin={"20px 0"}
            gap="30px"
            alignItems={"center"}
            sx={{
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(2, minmax(0, 1fr))",
              },
            }}
          >
            <CustomSearchField
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
            {taxonomyName && (
              <Typography variant="h4" component="h4">
                {taxonomyName}
              </Typography>
            )}
          </Box>
          <Box marginTop={"30px"}>
            <Typography variant="h3" fontWeight={'500'}>
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
            <AccordionSummary  expandIcon={<ExpandMore  sx={{fontSize:"25px", color:"#216FED", border:"1px solid #216FED", borderRadius:"50px"}}/>}>
              <Typography variant="h3" fontWeight={'600'}>
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
                  style={{ resize: "none", fontSize:"1.5rem",marginTop:'-10px'}}
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

          <Box marginTop={"20px"}>
            <label style={{fontSize:'1.4rem'}}>
              <input 
                type="checkbox"
                name="isPayToAddressSame"
                checked={values.isPayToAddressSame}
                onChange={handleCheckboxChange}
              />{" "}
              Pay-To address is the same as the primary office address
            </label>
          </Box>
          {!values.isPayToAddressSame && (
            <Accordion sx={{ marginTop: "10px" }}>
              <AccordionSummary  expandIcon={<ExpandMore  sx={{fontSize:"25px", color:"#216FED", border:"1px solid #216FED", borderRadius:"50px"}}/>}>
                <Typography variant="h3" fontWeight={'600'}>
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
                    style={{ resize: "none", fontSize:"1.5rem",marginTop:'-10px' }}
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
            <CustomButton  isBlue={true} type="submit">
              Save
            </CustomButton>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default NewPractice;
