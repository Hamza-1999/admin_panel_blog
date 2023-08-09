import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "../features/slice/patientSlice";
import payerSlice from "../features/slice/payerSlice";
// import patientInsuranceSlice from "../features/slice/patientInsuranceSlice";

const store = configureStore({
  reducer: {
    patient: patientSlice,
    payer: payerSlice,
    // patientInsurance: patientInsuranceSlice,
  },
});
export default store;
