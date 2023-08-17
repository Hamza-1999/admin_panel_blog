import { createSlice } from "@reduxjs/toolkit";
import {
  getPracticeAction,
  newPracticeAction,
  updatePractice,
  updatePracticeAction,
} from "../actions/practiceAction";
import { toast } from "react-toastify";

const initialState = {
  createPracticeData: {},
  getPractices: [],
  loading: false,
  error: null,
};

const practiceSlice = createSlice({
  name: "practices",
  initialState: initialState,
  extraReducers: {
    [newPracticeAction.pending]: (state) => {
      state.loading = true;
    },
    [newPracticeAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.createPracticeData = action.payload;
      toast.success("Practice has been created successfully!");
    },
    [newPracticeAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("Practice creation failed!");
    },
    [getPracticeAction.pending]: (state) => {
      state.loading = true;
    },
    [getPracticeAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.getPractices = action.payload;
      console.log(action.paylaod, "practice slice get payload");
    },
    [getPracticeAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updatePracticeAction.pending]: (state) => {
      state.loading = true;
    },
    [updatePracticeAction.fulfilled]: (state, action) => {
      state.loading = false;
      const updatedPracticeIndex = state.getPractices.result.findIndex(
        (user) => user.practiceId === action.payload.practiceId
      );
      if (updatedPracticeIndex !== -1) {
        state.getPractices.result[updatedPracticeIndex] = {
          ...state.getPractices.result[updatedPracticeIndex],
          ...action.payload,
        };
      }
      toast.success("Practice Updated Successfully");
    },
    [updatePracticeAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("Practice Updation Failed");
    },
  },
});

export default practiceSlice.reducer;
