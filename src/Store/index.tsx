import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ShowSlice from "./Slice/ShowSlice";
import EpisodesSlice from "./Slice/EpisodesSlice";

const rootReducer = combineReducers({
  show: ShowSlice,
  episodes: EpisodesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
//export type RootState = ReturnType<typeof store.getState>;

export default store;
