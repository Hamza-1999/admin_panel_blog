import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "../features/slice/patientSlice";
import payerSlice from "../features/slice/payerSlice";

const store = configureStore({
  reducer: {
    patient: patientSlice,
    payer: payerSlice,
  },
});
export default store;
