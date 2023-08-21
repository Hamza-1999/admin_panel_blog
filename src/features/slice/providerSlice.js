import { createSlice } from "@reduxjs/toolkit";
import {
  getProviderAction,
  newProviderAction,
} from "../actions/providerAction";

const initialState = {
  createProviderData: {},
  getProviders: [],
  leading: false,
  error: null,
};
const providerSlice = createSlice({
  name: "provider",
  initialState: initialState,
  extraReducers: {
    [newProviderAction.pending]: (state) => {
      state.loading = true;
    },
    [newProviderAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.createProviderData = action.payload;
    },
    [newProviderAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getProviderAction.pending]: (state) => {
      state.loading = true;
    },
    [getProviderAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.getProviders = action.payload;
    },
    [getProviderAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default providerSlice.reducer;
