import { createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../config/axiosFunctions";
import path from "../../config/apiUrl";

export const createPaymentAction = createAsyncThunk(
  "createPayment",
  async (data) => {
    try {
      // data.payerId = 4;
      // data.paymentFrom = 4;
      // data.paymentDetailDto[0].claimInfoId = 115;

      // console.log(data, "data available to send");
      const response = await postData(`${path}/payment`, data);
      console.log(response, "action create payment response");
    } catch (error) {
      console.log(error);
    }
  }
);
