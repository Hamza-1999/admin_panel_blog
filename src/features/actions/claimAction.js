import { createAsyncThunk } from "@reduxjs/toolkit";
import path from "../../config/apiUrl";
import { getData, postData, updateData } from "../../config/axiosFunctions";

export const newClaimAction = createAsyncThunk("createClaim", async (data) => {
  try {
    const response = await postData(`${path}/claim/AddUpdatedClaim`, data);
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
    console.log(response, "action calim res0");
    if (response) {
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const updateClaimAction = createAsyncThunk(
  "updateClaim",
  async (data) => {
    console.log(data, "update data claim");
    try {
      const response = await updateData(
        `${path}/claim/${data.claimNumber}`,
        data
      );
      console.log(response, "update claim action response");
      return response;
    } catch (error) {
      throw error;
    }
  }
);
