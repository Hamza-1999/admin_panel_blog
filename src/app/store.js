import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "../features/slice/patientSlice";
import payerSlice from "../features/slice/payerSlice";
import practiceSlice from "../features/slice/practiceSlice";
import taxonomySlice from "../features/slice/taxonomySlice";
import providerSlice from "../features/slice/providerSlice";
import claimSlice from "../features/slice/claimSlice";
import facilitySlice from "../features/slice/facilitySlice";
import PaymentSlice from "../features/slice/PaymentSlice";

const store = configureStore({
  reducer: {
    patient: patientSlice,
    payer: payerSlice,
    // patientInsurance: patientInsuranceSlice,
    practices: practiceSlice,
    taxonomy: taxonomySlice,
    provider: providerSlice,
    claim: claimSlice,
    facility: facilitySlice,
    payment: PaymentSlice,
  },
});
export default store;
