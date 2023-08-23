import { createSlice } from "@reduxjs/toolkit";
import {
  getProviderAction,
  newProviderAction,
  updateProviderAction,
} from "../actions/providerAction";
import { toast } from "react-toastify";

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
      toast.success("Provider has been created Successfully!");
    },
    [newProviderAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.success("Provider creation failed");
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
    [updateProviderAction.pending]: (state) => {
      state.loading = true;
    },
    [updateProviderAction.fulfilled]: (state, action) => {
      state.loading = false;
      const updatedProviderIndex = state.getProviders.result.findIndex(
        (user) => user.providerId === action.payload.providerId
      );
      if (updatedProviderIndex !== -1) {
        state.getProviders.result[updatedProviderIndex] = {
          ...state.getProviders.result[updatedProviderIndex],
          ...action.payload,
        };
      }
      toast.success("Provider Updated Successfully!");
    },
    [updateProviderAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("Provider Updation Failed");
    },
  },
});

export default providerSlice.reducer;
