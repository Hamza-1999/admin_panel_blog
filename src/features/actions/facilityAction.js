import { createAsyncThunk } from "@reduxjs/toolkit";
import path from "../../config/apiUrl";
import { getData } from "../../config/axiosFunctions";

export const getFacilityAction = createAsyncThunk("getFacility", async () => {
  try {
    const response = await getData(`${path}/facility`);

    if (response) {
      console.log(response, "facility getaction response");
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw error;
  }
});
