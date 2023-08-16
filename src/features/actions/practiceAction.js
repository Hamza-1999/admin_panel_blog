import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

export const newPracticeAction = createAsyncThunk(
  "createPractice",
  async (data) => {
    try {
      const response = await postData(`${path}/practice`, data);
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

export const getPracticeAction = createAsyncThunk("getPractice", async () => {
  try {
    const response = await getData(`${path}/practice`);
    if (response) {
      console.log(response, "getpracticeaction response11");
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw new Error(error);
  }
});
