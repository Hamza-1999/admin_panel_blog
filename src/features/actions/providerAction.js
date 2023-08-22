import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, updateData } from "../../config/axiosFunctions";
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

export const updateProviderAction = createAsyncThunk(
  "updateProvider",
  async (data) => {
    console.log(data, "update data provider action response");
    try {
      const response = await updateData(
        `${path}/provider/${data.providerId}`,
        data
      );
      console.log(response, "update prac action response");
      return response;
    } catch (error) {
      throw error;
    }
  }
);
