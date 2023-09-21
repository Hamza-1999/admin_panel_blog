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
      toast.success("Patient Has Been Created Successfully!");
    },
    [newPatientAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("Patient Not Successfully Created");
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
    // Update the patient data in the list
    [updatePatientAction.fulfilled]: (state, action) => {
      state.loading = false;
      const updatedPatientIndex = state.getAllPatients.result.findIndex(
        (user) => user.accountNo === action.payload.accountNo
      );
      if (updatedPatientIndex !== -1) {
        const updatedPatientData = {
          ...state.getAllPatients.result[updatedPatientIndex],
          ...action.payload,
        };
        // Create a new array with the updated patient data
        const updatedPatientArray = [...state.getAllPatients.result];
        updatedPatientArray[updatedPatientIndex] = updatedPatientData;

        // Update the state with the new array
        state.getAllPatients.result = updatedPatientArray;
      }
      // Assuming you are returning the updated data in the action payload
      state.patientData = action.payload;
      toast.success("Patient Has Been Updated Successfully!");
    },

    [updatePatientAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("Patient Not Successfully Updated");
    },
  },
});

export default patientSlice.reducer;
