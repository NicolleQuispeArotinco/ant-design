import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: "status",
  initialState: {
    loadingFail: false,
    loadingSuccess: false,
  },
  reducers: {
    loadingFailStopped: (state) => {
      state.loadingFail = false;
    },
    loadingFailStarted: (state) => {
      state.loadingFail = true;
    },
    loadingSuccessStopped: (state) => {
      state.loadingSuccess = false;
    },
    loadingSuccessStarted: (state) => {
      state.loadingSuccess = true;
    },
  },
});

export const { loadingFailStopped, loadingFailStarted, loadingSuccessStopped, loadingSuccessStarted } = statusSlice.actions;

export default statusSlice.reducer;