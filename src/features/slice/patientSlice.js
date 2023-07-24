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
      state.loading = false;
      console.log(state.getAllPatients, "update patients in slice");
      const updatedPatientIndex = state.getAllPatients.result?.findIndex(
        (user) => user.patientId === action.payload.PatientId
      );
      if (updatedPatientIndex !== -1) {
        state.getAllPatients[updatedPatientIndex] = action.payload;
      }
    },
    [updatePatientAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default patientSlice.reducer;
