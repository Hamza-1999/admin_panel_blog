import { createSlice } from "@reduxjs/toolkit";
import { createNewPayerAction, getPayerAction } from "../actions/payerAction";

const initialState = {
  payerData: {},
  getAllPayer: [],
  loading: false,
  error: null,
};

const payerSlice = createSlice({
  name: "payer",
  initialState: initialState,
  extraReducers: {
    [createNewPayerAction.pending]: (state) => {
      state.loading = true;
    },
    [createNewPayerAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.payerData = action.payload;
    },
    [createNewPayerAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPayerAction.pending]: (state) => {
      state.loading = true;
    },
    [getPayerAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.getAllPayer = action.payload;
    },
    [getPayerAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default payerSlice.reducer;
