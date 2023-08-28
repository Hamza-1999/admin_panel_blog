import { createSlice } from "@reduxjs/toolkit";
import { getFacilityAction } from "../actions/facilityAction";

const initialState = {
  getFacilityData: [],
  error: null,
  loading: false,
};
const facilitySlice = createSlice({
  name: "facility",
  initialState: initialState,

  extraReducers: {
    [getFacilityAction.pending]: (state) => {
      state.loading = true;
    },
    [getFacilityAction.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload, "facility payload");
      state.getFacilityData = action.payload;
    },
    [getFacilityAction.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default facilitySlice.reducer;
