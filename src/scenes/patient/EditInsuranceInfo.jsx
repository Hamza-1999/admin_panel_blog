// import { Box, Button, TextField, Typography } from "@mui/material";
// import React from "react";
// import CustomSelectBox from "../../components/CustomSelectBox";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { useEffect } from "react";
// import { getData } from "../../config/axiosFunctions";
// import path from "../../config/apiUrl";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { useFormik } from "formik";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import {
//   getPatientAction,
//   updatePatientAction,
// } from "../../features/actions/createPatientAction";
// import {
//   getInsuranceAction,
//   updateInsuranceAction,
// } from "../../features/actions/patientInsuranceAction";
// import dayjs from "dayjs";

// const EditInsuranceInfo = ({ handleClose }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [genderOptions, setGenderOptions] = useState([]);
//   const [employeementOptions, setEmployeementOptions] = useState([]);
//   const [cityOptions, setCityOptions] = useState([]);
//   const [countryOptions, setCountryOptions] = useState([]);
//   const [stateOptions, setStateOptions] = useState([]);
//   const [patienRelationOpt, setPatientRelationOpt] = useState([]);
//   const [priorityOptions, setPriorityOptions] = useState([]);

//   const { accountNo } = useParams();
//   const dispatch = useDispatch();
//   const { getAllPatients, loading } = useSelector((state) => state.patient);

//   console.log(getAllPatients, "getAll Patients");
//   useEffect(() => {
//     if (!getAllPatients?.result?.length) {
//       dispatch(getPatientAction()).then(() => setIsLoading(false));
//     } else {
//       setIsLoading(false);
//     }
//   }, [dispatch]);

//   const findPatient = getAllPatients.result?.find(
//     (el) => el.accountNo === accountNo
//   );
//   console.log(findPatient, "find editble patient");

//   //   const { loading, getPatientInsuranceData } = useSelector(
//   //     (state) => state.patientInsurance
//   //   );

//   //   useEffect(() => {
//   //     dispatch(getAllPatients());
//   //   }, [dispatch]);

//   //   finding insurance fields
//   //   const findInsuranceArr = getPatientInsuranceData.result?.find(
//   //     (el) => el.accountNo === accountNo
//   //   );
//   //   const findInsuranceFields = findInsuranceArr.insuredPartyDtos?.find(
//   //     (el) => el.patientAccountNo === accountNo
//   //   );
//   //   finding patient data for initial fields

//   // initial formik values
//   // const initialValues = {
//   //   // Insured Information Data
//   //   insuredFirstName: findInitialInsurance?.insuredFirstName || "",
//   //   insuredLastName: findInitialInsurance?.insuredLastName || "",
//   //   insuredDateOfBirth: findInitialInsurance?.insuredDateOfBirth
//   //     ? dayjs(findInitialInsurance?.insuredDateOfBirth)
//   //     : null,
//   //   insuredAddress: findInitialInsurance?.insuredAddress || "",
//   //   insuredSSN: findInitialInsurance?.insuredSSN || "",
//   //   insuredZipCode: findInitialInsurance?.insuredZipCode || "",
//   //   insuredHomePhone: findInitialInsurance?.insuredHomePhone || null,
//   //   insuredCellPhone: findInitialInsurance?.insuredCellPhone || null,
//   //   // patientAccountNo: findInitialInsurance?.patientAccountNo || null,
//   //   insuredWorkPhone: findInitialInsurance?.insuredWorkPhone || null,
//   //   insuredExt: findInitialInsurance?.insuredExt || null,
//   //   insuredEmail: findInitialInsurance?.insuredEmail || "",
//   //   insuredCityName: findInitialInsurance?.insuredCityName || "",
//   //   insuredStateName: findInitialInsurance?.insuredStateName || "",
//   //   insuredCountryName: findInitialInsurance?.insuredCountryName || "",
//   //   insuredRelationShipToPatientName:
//   //     findInitialInsurance?.insuredRelationShipToPatientName || "",
//   //   insuredGenderIdentityName:
//   //     findInitialInsurance?.insuredGenderIdentityName || "",
//   //   insuredPriorityType: findInitialInsurance?.insuredPriorityType || "",
//   //   // employe details
//   //   employeeName: findInitialInsurance?.employeeName || "",
//   //   empAddress: findInitialInsurance?.empAddress || "",
//   //   empCityName: findInitialInsurance?.empCityName || "",
//   //   empStateName: findInitialInsurance?.empStateName || "",
//   //   insuredPartyName: findInitialInsurance?.insuredPartyName || "",
//   //   empZipCode: findInitialInsurance?.empZipCode || "",
//   //   empEmploymentStatusName:
//   //     findInitialInsurance?.empEmploymentStatusName || "",
//   // };

//   // const handleFormSubmit = (values, actions) => {
//   //   try {
//   //     dispatch(
//   //       updatePatientAction({
//   //         accountNo: findInitialInsurance?.accountNo,
//   //         ...values,
//   //       })
//   //     );
//   //     console.log(values, "checking submit values of update patient");
//   //     // actions.setSubmitting(false);
//   //     handleClose();
//   //     // navigate("/managepatient");
//   //   } catch (error) {
//   //     console.error("Error updating patient:", error);
//   //     // actions.setSubmitting(false);
//   //   }
//   // };

//   const {
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     values,
//     setFieldValue,
//     setFieldTouched,
//   } = useFormik({
//     // initialValues: initialValues,
//     onSubmit: (values, action) => {
//       // handleFormSubmit(values);
//       // action.resetForm();
//     },
//   });

//   // Define data fetching URLs
//   const dataFetchUrls = {
//     genderTypes: `${path}/ct-genderIdentity`,
//     employmentStatus: `${path}/ct-employmentStatus`,
//     relationToPatient: `${path}/ct-relationToPatient`,
//     priorityType: `${path}/ct-priorityType`,
//     cities: `${path}/city`,
//     countries: `${path}/country`,
//     states: `${path}/state`,
//   };

//   // Define a reusable function to fetch data for a given URL
//   const fetchDataOptions = async (url, setter) => {
//     try {
//       const response = await getData(url);
//       setter(response.result);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchDataOptions(dataFetchUrls.cities, setCityOptions);
//     fetchDataOptions(dataFetchUrls.countries, setCountryOptions);
//     fetchDataOptions(dataFetchUrls.employmentStatus, setEmployeementOptions);
//     fetchDataOptions(dataFetchUrls.genderTypes, setGenderOptions);
//     fetchDataOptions(dataFetchUrls.relationToPatient, setPatientRelationOpt);
//     fetchDataOptions(dataFetchUrls.priorityType, setPriorityOptions);

//     fetchDataOptions(dataFetchUrls.states, setStateOptions);
//   }, [dispatch]);

//   //   if (isLoading) {
//   //     return <div>Loading...</div>;
//   //   }

//   return (
//     <Box display="flex" flexDirection="column" gap={5}>
//       <form onSubmit={handleSubmit}>
//         <Typography
//           variant="h5"
//           component={"h2"}
//           fontSize={{ xs: ".9rem", sm: "1.1rem", md: "1.4rem" }}
//         >
//           Primary Insurance:
//         </Typography>
//         <Box
//           display="grid"
//           gap="30px"
//           sx={{
//             gridTemplateColumns: {
//               xs: "repeat(1, minmax(0, 1fr))",
//               sm: "repeat(2, minmax(0, 1fr))",
//               md: "repeat(4, minmax(0, 1fr))",
//             },
//           }}
//         >
//           <TextField
//             size="small"
//             fullWidth
//             variant="filled"
//             type="text"
//             label="First Name"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.insuredFirstName}
//             name="insuredFirstName"
//             id="insuredFirstName"
//             // error={!!touched.firstName && !!errors.firstName}
//             // helperText={touched.firstName && errors.firstName}
//             sx={{ gridColumn: "span 1" }}
//           />
//           <TextField
//             size="small"
//             fullWidth
//             variant="filled"
//             type="text"
//             label="Last Name"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.insuredLastName}
//             name="insuredLastName"
//             id="insuredLastName"
//             // error={!!touched.lastName && !!errors.lastName}
//             // helperText={touched.lastName && errors.lastName}
//             sx={{ gridColumn: "span 1" }}
//           />

//           {/* priority type */}
//           <CustomSelectBox
//             value={values.insuredPriorityType}
//             name="insuredPriorityType"
//             dropdownOptions={priorityOptions?.map((opt) => ({
//               value: opt.priorityType,
//               id: opt.priorityTypeId,
//             }))}
//             label="Priority Type"
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />
//           <TextField
//             size="small"
//             fullWidth
//             variant="filled"
//             type="text"
//             label="Email"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.insuredEmail}
//             name="insuredEmail"
//             id="insuredEmail"
//             // error={!!touched.email && !!errors.email}
//             // helperText={touched.email && errors.email}
//             sx={{ gridColumn: "span 1" }}
//           />

//           <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
//             <DatePicker
//               label="Date of Birth"
//               value={values.insuredDateOfBirth}
//               onChange={(value) => setFieldValue("insuredDateOfBirth", value)}
//               onBlur={() => setFieldTouched("insuredDateOfBirth", true)}
//               renderInput={(params) => <TextField {...params} />}
//               inputFormat="MM/DD/YYYY"
//               clearable
//             />
//           </LocalizationProvider>

//           <CustomSelectBox
//             name="insuredGenderIdentityName"
//             value={values.insuredGenderIdentityName}
//             dropdownOptions={genderOptions?.map((opt) => ({
//               value: opt.genderIdentityName,
//               id: opt.genderIdentityId,
//             }))}
//             label="Gender"
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />

//           {/* relation to patient */}
//           <CustomSelectBox
//             value={values.insuredRelationShipToPatientName}
//             name="insuredRelationShipToPatientName"
//             dropdownOptions={patienRelationOpt?.map((opt) => ({
//               value: opt.relationShipToPatientName,
//               id: opt.relationShipToPatientId,
//             }))}
//             label="Relation to Patient"
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />

//           <TextField
//             size="small"
//             fullWidth
//             variant="filled"
//             type="number"
//             label="Phone Number"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.insuredCellPhone}
//             id="insuredCellPhone"
//             name="insuredCellPhone"
//             // error={!!touched.cellPhone && !!errors.cellPhone}
//             // helperText={touched.cellPhone && errors.cellPhone}
//             sx={{ gridColumn: "span 1" }}
//           />
//           <TextField
//             size="small"
//             fullWidth
//             variant="filled"
//             type="number"
//             label="Home Number"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.insuredHomePhone}
//             id="insuredHomePhone"
//             name="insuredHomePhone"
//             // error={!!touched.cellPhone && !!errors.cellPhone}
//             // helperText={touched.cellPhone && errors.cellPhone}
//             sx={{ gridColumn: "span 1" }}
//           />

//           <TextField
//             size="small"
//             fullWidth
//             variant="filled"
//             type="number"
//             label="Work Phone"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.insuredWorkPhone}
//             id="insuredWorkPhone"
//             name="insuredWorkPhone"
//             // error={!!touched.cellPhone && !!errors.cellPhone}
//             // helperText={touched.cellPhone && errors.cellPhone}
//             sx={{ gridColumn: "span 1" }}
//           />
//           <TextField
//             size="small"
//             fullWidth
//             variant="filled"
//             type="number"
//             label="Ext"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.insuredExt}
//             id="insuredExt"
//             name="insuredExt"
//             // error={!!touched.cellPhone && !!errors.cellPhone}
//             // helperText={touched.cellPhone && errors.cellPhone}
//             sx={{ gridColumn: "span 1" }}
//           />

//           <TextField
//             size="small"
//             fullWidth
//             variant="filled"
//             type="text"
//             label="SSN"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.insuredSSN}
//             id="insuredSSN"
//             name="insuredSSN"
//             // error={!!touched.cellPhone && !!errors.cellPhone}
//             // helperText={touched.cellPhone && errors.cellPhone}
//             sx={{ gridColumn: "span 1" }}
//           />

//           {/* country types */}

//           <CustomSelectBox
//             value={values.insuredCountryName}
//             name="insuredCountryName"
//             dropdownOptions={countryOptions?.map((opt) => ({
//               value: opt.countryName,
//               id: opt.countryId,
//             }))}
//             label="Country"
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />
//           {/* state options */}
//           <CustomSelectBox
//             value={values.insuredStateName}
//             name="insuredStateName"
//             dropdownOptions={stateOptions?.map((opt) => ({
//               value: opt.stateName,
//               id: opt.stateId,
//             }))}
//             label="State"
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />
//           {/* city types */}
//           <CustomSelectBox
//             value={values.insuredCityName}
//             name="insuredCityName"
//             dropdownOptions={cityOptions?.map((opt) => ({
//               value: opt.cityName,
//               id: opt.cityId,
//             }))}
//             label="City"
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />
//           <TextField
//             size="small"
//             fullWidth
//             variant="filled"
//             type="text"
//             label="Zipcode"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.insuredZipCode}
//             id="insuredZipCode"
//             name="insuredZipCode"
//             // error={!!touched.zipCode && !!errors.zipCode}
//             // helperText={touched.zipCode && errors.zipCode}
//             sx={{ gridColumn: "span 1" }}
//           />
//         </Box>
//         {/*Employee details  */}
//         <div>
//           <Typography variant="h5" component={"h4"} marginBottom="8px">
//             Employee Details :
//           </Typography>
//           <Box
//             display="grid"
//             gap="30px"
//             sx={{
//               gridTemplateColumns: {
//                 xs: "repeat(1, minmax(0, 1fr))",
//                 sm: "repeat(2, minmax(0, 1fr))",
//                 md: "repeat(4, minmax(0, 1fr))",
//               },
//             }}
//           >
//             <TextField
//               size="small"
//               fullWidth
//               variant="filled"
//               type="text"
//               label="Employee Name"
//               onBlur={handleBlur}
//               onChange={handleChange}
//               value={values.employeeName}
//               name="employeeName"
//               id="employeeName"
//               // error={!!touched.firstName && !!errors.firstName}
//               // helperText={touched.firstName && errors.firstName}
//               sx={{ gridColumn: "span 1" }}
//             />

//             {/* employeement status */}
//             <CustomSelectBox
//               value={values.empEmploymentStatusName}
//               name="empEmploymentStatusName"
//               dropdownOptions={employeementOptions?.map((opt) => ({
//                 value: opt.employmentStatusName,
//                 id: opt.employmentStatusId,
//               }))}
//               label="Employement Status"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//             />

//             <TextField
//               size="small"
//               fullWidth
//               variant="filled"
//               type="text"
//               label="Address"
//               onBlur={handleBlur}
//               onChange={handleChange}
//               value={values.empAddress}
//               name="empAddress"
//               id="empAddress"
//               // error={!!touched.firstName && !!errors.firstName}
//               // helperText={touched.firstName && errors.firstName}
//               sx={{ gridColumn: "span 1" }}
//             />

//             {/* city types */}
//             <CustomSelectBox
//               value={values.empCityName}
//               name="empCityName"
//               dropdownOptions={cityOptions?.map((opt) => ({
//                 value: opt.cityName,
//                 id: opt.cityId,
//               }))}
//               label="City"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//             />

//             {/* state options */}
//             <CustomSelectBox
//               value={values.empStateName}
//               name="empStateName"
//               dropdownOptions={stateOptions?.map((opt) => ({
//                 value: opt.stateName,
//                 id: opt.stateId,
//               }))}
//               label="State"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//             />
//           </Box>
//         </div>
//         <Box
//           display="flex"
//           justifyContent="end"
//           mt="20px"
//           paddingBottom={"20px"}
//         >
//           <Button
//             type="submit"
//             color="secondary"
//             variant="contained"
//             disabled={loading}
//           >
//             {loading ? "Updating..." : "Update"}
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default EditInsuranceInfo;
