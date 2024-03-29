import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, updateData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

// create patient action creator
export const newPatientAction = createAsyncThunk(
  "createPatient",
  async (data) => {
    try {
      const response = await postData(`${path}/test-patient`, data);
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
      return response.result; // Return the updated patient data
    } catch (error) {
      throw error;
    }
  }
);
