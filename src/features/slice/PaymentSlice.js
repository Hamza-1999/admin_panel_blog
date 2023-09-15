import { createSlice } from "@reduxjs/toolkit";
import { createPaymentAction } from "../actions/PaymentAction";

const initialState = {
  paymentData: {},
  loading: false,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  extraReducers: {
    [createPaymentAction.pending]: (state) => {
      state.loading = true;
    },
    [createPaymentAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.paymentData = action.payload;
    },
    [createPaymentAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default paymentSlice.reducer;
