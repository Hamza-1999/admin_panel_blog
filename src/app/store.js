import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "../features/slice/patientSlice";

 const store = configureStore({
    reducer: {
        patient: patientSlice
    }
})
export default store;