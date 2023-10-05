import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../Status";

export const getEpisodes = createAsyncThunk("episodes", async () => {
  const data = await fetch("https://api.tvmaze.com/shows/46213/episodes");
  const result = await data.json();
  return result;
});

const initialState = {
  episodeList: [],
  status: "idle",
};

const EpisodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    getEpisodesRejected: (state) => {
      state.status = StatusCode.ERROR_EPS;
    },
    getEpisodesPending: (state) => {
      state.status = StatusCode.LOADING_EPS;
    },
    getEpisodesFulfilled: (state, action) => {
      state.status = StatusCode.SUCCESS_EPS;
      state.episodeList = action.payload;
    },
  },
});

export const { getEpisodesRejected, getEpisodesPending, getEpisodesFulfilled } =
  EpisodesSlice.actions;

export default EpisodesSlice.reducer;
