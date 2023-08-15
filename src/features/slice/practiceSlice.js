import { createSlice } from "@reduxjs/toolkit";
import { newPracticeAction } from "../actions/practiceAction";

const initialState = {
  createPracticeData: {},
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
      console.log(action.paylaod, "practice slice payload");
    },
    [newPracticeAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default practiceSlice.reducer;
