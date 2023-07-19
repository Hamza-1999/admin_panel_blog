import { createSlice } from "@reduxjs/toolkit";
import { newPatientAction } from "../actions/createPatientAction";
import { toast } from "react-toastify";

const initialState = {
  patientData: {},
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
      console.log(action.payload, "slice payload data of create patient");
      state.patientData = action.payload;
      toast.success("patient has been created successfully!");
    },
    [newPatientAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("patient creation failed");
    },
  },
});

export default patientSlice.reducer;
