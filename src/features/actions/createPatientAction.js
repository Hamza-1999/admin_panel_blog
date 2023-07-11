import { createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

// create patient action creator
export const newPatientAction = createAsyncThunk('createPatient', async (data, {rejectWithValue}) => {
    try{
        const response = await postData(`${path}/api/Patient`, data)
        console.log(response, "checking create patient action data response")
        return response
    }catch (error) {
        return rejectWithValue(error)
    }
})