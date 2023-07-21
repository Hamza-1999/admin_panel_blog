import { createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

// create patient action creator
export const newPatientAction = createAsyncThunk(
  "createPatient",
  async (data) => {
    try {
      const response = await postData(`${path}/test-patient`, data);
      if (response) {
        return response;
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      throw error;
    }
  }
);
