import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

export const createNewPayerAction = createAsyncThunk(
  "createNewPayer",
  async (data) => {
    try {
      const response = await postData(`${path}/payer`, data);
      console.log(response, "action create payer response");
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPayerAction = createAsyncThunk("getPayer", async () => {
  try {
    const response = await getData(`${path}/payer`);
    if (response) {
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw new Error(error);
  }
});
