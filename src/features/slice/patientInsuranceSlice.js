// import { createSlice } from "@reduxjs/toolkit";

// import { toast } from "react-toastify";
// import {
//   getInsuranceAction,
//   updateInsuranceAction,
// } from "../actions/patientInsuranceAction";

// const initialState = {
//   getPatientInsuranceData: [],
//   loading: false,
//   error: null,
// };
// const patientInsuranceSlice = createSlice({
//   name: "patientInsurance",
//   initialState: initialState,
//   extraReducers: {
//     // [newInsuranceAction.pending]: (state) => {
//     //   state.loading = true;
//     // },
//     // [newInsuranceAction.fulfilled]: (state, action) => {
//     //   state.loading = false;
//     //   state.insuranceData = action.payload;
//     //   toast.success("Insurance has been created successfully!");
//     // },
//     // [newInsuranceAction.rejected]: (state, action) => {
//     //   state.loading = false;
//     //   state.error = action.payload;
//     //   toast.error("Insurance creation failed");
//     // },
//     [getInsuranceAction.pending]: (state) => {
//       state.loading = true;
//     },
//     [getInsuranceAction.fulfilled]: (state, action) => {
//       state.loading = false;
//       console.log(action.payload, "insurance payload");
//       state.getPatientInsuranceData = action.payload;
//     },
//     [getInsuranceAction.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     [updateInsuranceAction.pending]: (state) => {
//       state.loading = true;
//     },
//     [updateInsuranceAction.fulfilled]: (state, action) => {
//       // state.loading = false;
//       // const updatedPatientIndex = state.getAllPatients.result?.findIndex(
//       //   (user) => user.patientId === action.payload.PatientId
//       // );
//       // if (updatedPatientIndex !== -1) {
//       //   state.getAllPatients[updatedPatientIndex] = action.payload;
//       // }

//       state.loading = false;
//       const updatedInsuranceIndex =
//         state.getPatientInsuranceData.result?.findIndex(
//           (user) => user.patientId === action.payload.patientId
//         );
//       if (updatedInsuranceIndex !== -1) {
//         const updatedInsuranceData = {
//           ...state.getPatientInsuranceData.result[updatedInsuranceIndex],
//           ...action.payload,
//         };
//         state.getPatientInsuranceData.result[updatedInsuranceIndex] =
//           updatedInsuranceData;
//       }
//     },
//     [updateInsuranceAction.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export default patientInsuranceSlice.reducer;
