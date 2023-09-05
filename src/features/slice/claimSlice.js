import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getClaimAction, newClaimAction } from "../actions/claimAction";

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
      console.log(action.paylaod, "claim slice get payload");
    },
    [getClaimAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default claimSlice.reducer;
