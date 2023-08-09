import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, updateData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

// create patient action creator
export const newPatientAction = createAsyncThunk(
  "createPatient",
  async ({ endpoint, data }) => {
    try {
      const response = await postData(endpoint, data);
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

export const getPatientAction = createAsyncThunk("getPatient", async () => {
  try {
    const response = await getData(`${path}/test-patient`);
    if (response) {
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const updatePatientAction = createAsyncThunk(
  "updatePatient",
  async (data) => {
    try {
      const response = await updateData(
        `${path}/test-patient/${data.accountNo}`,
        data
      );
      console.log(response, "edit action response");
      console.log(data, "edit data patient 55");
      return response.result;
    } catch (error) {
      throw error;
    }
  }
);
