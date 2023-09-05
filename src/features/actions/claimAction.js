import { createAsyncThunk } from "@reduxjs/toolkit";
import path from "../../config/apiUrl";
import { getData, postData } from "../../config/axiosFunctions";

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

export const getClaimAction = createAsyncThunk("getClaim", async () => {
  try {
    const response = await getData(`${path}/claim`);
    if (response) {
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw new Error(error);
  }
});
