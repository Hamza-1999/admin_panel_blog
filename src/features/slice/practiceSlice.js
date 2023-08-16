import { createSlice } from "@reduxjs/toolkit";
import {
  getPracticeAction,
  newPracticeAction,
} from "../actions/practiceAction";

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
    },
    [newPracticeAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
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
  },
});

export default practiceSlice.reducer;
