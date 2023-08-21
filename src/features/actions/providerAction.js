import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

export const newProviderAction = createAsyncThunk(
  "createProvider",
  async (data) => {
    try {
      const response = await postData(`${path}/provider`, data);
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

export const getProviderAction = createAsyncThunk("getProvider", async () => {
  try {
    const response = await getData(`${path}/provider`);
    if (response) {
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw new Error(error);
  }
});
