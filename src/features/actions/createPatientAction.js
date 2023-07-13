import { createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../config/axiosFunctions";

// create patient action creator
export const newPatientAction = createAsyncThunk(
  "createPatient",
  async (data) => {
    try {
      const response = await postData(
        `https://192.168.1.25:7102/api/Patient`,
        data
      );
      console.log(response, "create patient action creator checking data");
      return response;
    } catch (error) {
      throw error;
    }
  }
);
