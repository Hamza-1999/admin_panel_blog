import { createSlice } from "@reduxjs/toolkit";
import { createNewPayerAction, getPayerAction } from "../actions/payerAction";
import { toast } from "react-toastify";

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
      toast.success("Payment Created Successfully!");
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
