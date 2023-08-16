import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

export const getTaxonomyAction = createAsyncThunk("getTaxonomy", async () => {
  try {
    const response = await getData(`${path}/taxonomy`);

    if (response) {
      console.log(response, "taxonomy getaction response");
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw error;
  }
});
