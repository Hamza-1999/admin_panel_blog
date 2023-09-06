import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getClaimAction,
  newClaimAction,
  updateClaimAction,
} from "../actions/claimAction";

const initialState = {
  createClaimData: {},
  getClaims: [],
  loading: false,
  error: null,
};
const claimSlice = createSlice({
  name: "claim",
  initialState: initialState,
  extraReducers: {
    [newClaimAction.pending]: (state) => {
      state.loading = true;
    },
    [newClaimAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.createClaimData = action.payload;
      toast.success("Claim has been created Successfully!");
    },
    [newClaimAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("Claim creation failed");
    },
    [getClaimAction.pending]: (state) => {
      state.loading = true;
    },
    [getClaimAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.getClaims = action.payload;
      console.log(action.payload, "claim slice get payload");
    },
    [getClaimAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateClaimAction.pending]: (state) => {
      state.loading = true;
    },
    [updateClaimAction.fulfilled]: (state, action) => {
      state.loading = false;
      const updatedClaimIndex = state.getClaims.result.findIndex(
        (el) => el.claimNumber === action.payload.claimNumber
      );
      if (updatedClaimIndex !== -1) {
        state.getClaims.result[updatedClaimIndex] = {
          ...state.getClaims.result[updatedClaimIndex],
          ...action.payload,
        };
      }
      toast.success("Claim Updated Successfully!");
    },
    [updateClaimAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("Claim Updation Failed");
    },
  },
});

export default claimSlice.reducer;
