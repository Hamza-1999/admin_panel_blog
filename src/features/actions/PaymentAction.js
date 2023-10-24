import { createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

export const createPaymentAction = createAsyncThunk(
  "createPayment",
  async (data) => {
    try {
      const response = await postData(`${path}/Updatedpayment`, data);  
      console.log(response, "action create payment response");
    } catch (error) {
      console.log(error);
    }
  }
);
