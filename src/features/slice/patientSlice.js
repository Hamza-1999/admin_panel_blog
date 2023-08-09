import { createSlice } from "@reduxjs/toolkit";
import {
  getPatientAction,
  newPatientAction,
  updatePatientAction,
} from "../actions/createPatientAction";
import { toast } from "react-toastify";

const initialState = {
  patientData: {},
  getAllPatients: [],
  loading: false,
  error: null,
};
const patientSlice = createSlice({
  name: "patient",
  initialState: initialState,
  extraReducers: {
    [newPatientAction.pending]: (state) => {
      state.loading = true;
    },
    [newPatientAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.patientData = action.payload;
      toast.success("patient has been created successfully!");
    },
    [newPatientAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("patient creation failed");
    },
    [getPatientAction.pending]: (state) => {
      state.loading = true;
    },
    [getPatientAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.getAllPatients = action.payload;
    },
    [getPatientAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updatePatientAction.pending]: (state) => {
      state.loading = true;
    },
    [updatePatientAction.fulfilled]: (state, action) => {
      // state.loading = false;
      // const updatedPatientIndex = state.getAllPatients.result?.findIndex(
      //   (user) => user.patientId === action.payload.PatientId
      // );
      // if (updatedPatientIndex !== -1) {
      //   state.getAllPatients[updatedPatientIndex] = action.payload;
      // }

      state.loading = false;
      const updatedPatientIndex = state.getAllPatients.result?.findIndex(
        (user) => user.accountNo === action.payload.accountNo
      );
      if (updatedPatientIndex !== -1) {
        const updatedPatientData = {
          ...state.getAllPatients.result[updatedPatientIndex],
          ...action.payload,
        };
        state.getAllPatients.result[updatedPatientIndex] = updatedPatientData;
      }
    },
    [updatePatientAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default patientSlice.reducer;
