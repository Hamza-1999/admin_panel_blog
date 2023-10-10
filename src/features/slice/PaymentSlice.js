import { createSlice } from "@reduxjs/toolkit";
import { createPaymentAction } from "../actions/PaymentAction";

const initialState = {
  paymentData: {},
  loading: false,
  error: null,
  selectedClaim: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  reducers: {
    addSelectedClaim: (state, action) => {
      console.log(action.payload, "payment data");
      // state.selectedClaim.push(action.payload);
      state.selectedClaim = action.payload;
    },
  },
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

export const { addSelectedClaim } = paymentSlice.actions;
export default paymentSlice.reducer;
