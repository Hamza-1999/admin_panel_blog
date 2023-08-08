import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, updateData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

export const getInsuranceAction = createAsyncThunk(
  "getInsuredData",
  async () => {
    try {
      const response = await getData(`${path}/insuredParty`);
      if (response) {
        return response;
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updateInsuranceAction = createAsyncThunk(
  "updateInsuredData",
  async (data) => {
    try {
      const response = await updateData(
        `${path}/insuredParty/${data.accountNo}`,
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
