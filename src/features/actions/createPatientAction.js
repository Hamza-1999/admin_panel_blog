import { createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../config/axiosFunctions";

// create patient action creator
export const newPatientAction = createAsyncThunk(
  "createPatient",
  async (data) => {
    try {
      const response = await postData(
        "http://192.168.3.73:86/api/test",
        { mode: "cors" },
        data
      );
      console.log(response, "create patient action creator checking data");
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
