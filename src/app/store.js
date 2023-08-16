import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "../features/slice/patientSlice";
import payerSlice from "../features/slice/payerSlice";
import patientInsuranceSlice from "../features/slice/patientInsuranceSlice";
import practiceSlice from "../features/slice/practiceSlice";
import taxonomySlice from "../features/slice/taxonomySlice";

const store = configureStore({
  reducer: {
    patient: patientSlice,
    payer: payerSlice,
    // patientInsurance: patientInsuranceSlice,
    practices: practiceSlice,
    taxonomy: taxonomySlice,
  },
});
export default store;
