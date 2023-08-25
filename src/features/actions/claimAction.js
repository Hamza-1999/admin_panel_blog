import { createAsyncThunk } from "@reduxjs/toolkit";
import path from "../../config/apiUrl";
import { postData } from "../../config/axiosFunctions";

export const newClaimAction = createAsyncThunk("createClaim", async (data) => {
  try {
    const response = await postData(`${path}/claim`, data);
    if (response) {
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw error;
  }
});
