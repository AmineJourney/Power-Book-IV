import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../Status";

export const getShow = createAsyncThunk("show", async () => {
  const data = await fetch("https://api.tvmaze.com/shows/46213");
  const result = await data.json();
  console.log("show", result);
  return result;
});

const initialState = {
  show: {},
  statuss: "idle",
};

const ShowSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    getShowRejected: (state) => {
      state.statuss = StatusCode.ERROR_S;
    },
    getShowPending: (state) => {
      state.statuss = StatusCode.LOADING_S;
    },
    getShowFulfilled: (state, action) => {
      state.statuss = StatusCode.SUCCESS_S;
      state.show = action.payload;
    },
  },
});

export const { getShowRejected, getShowPending, getShowFulfilled } =
  ShowSlice.actions;

export default ShowSlice.reducer;
