import { createSlice } from "@reduxjs/toolkit";
import { getTaxonomyAction } from "../actions/taxonomyAction";

const initialState = {
  getTaxonomyData: [],
  loading: false,
  error: null,
};

const taxonomySlice = createSlice({
  name: "taxonomy",
  initialState: initialState,
  extraReducers: {
    [getTaxonomyAction.pending]: (state) => {
      state.loading = true;
    },
    [getTaxonomyAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.getTaxonomyData = action.payload;
    },
    [getTaxonomyAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default taxonomySlice.reducer;
