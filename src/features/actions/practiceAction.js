import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, updateData } from "../../config/axiosFunctions";
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
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const updatePracticeAction = createAsyncThunk(
  "updatePractice",
  async (data) => {
    console.log(data, "update data prac");
    try {
      const response = await updateData(
        `${path}/practice/${data.practiceId}`,
        data
      );
      console.log(response, "update prac action response");
      return response;
    } catch (error) {
      throw error;
    }
  }
);
