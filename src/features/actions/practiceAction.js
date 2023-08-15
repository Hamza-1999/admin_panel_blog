import { createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

export const newPracticeAction = createAsyncThunk(
  "createPractice",
  async (data) => {
    try {
      const response = await postData(`${path}/practice`, data);
      if (response) {
        console.log(response, "practice action response data1.1");
        return response;
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      throw error;
    }
  }
);
