import { createSlice } from "@reduxjs/toolkit";
import { newPatientAction } from "../actions/createPatientAction";


const initialState = {
    patientData: [],
    loading: false,
}
const patientSlice = createSlice({
    name:"patient",
    initialState: initialState,
    extraReducers: {
        [newPatientAction.pending]: (state) => {
            state.loading = true
        },
        [newPatientAction.fulfilled]: (state, action) => {
            state.loading = false
            state.patientData = action.payload
        },
        [newPatientAction.pending]: (state, action) => {
            state.loading = false
            state.message = action.payload
        },
    }
})

export default patientSlice.reducer;