import { configureStore } from "@reduxjs/toolkit";
import hackathonsReducer from "./hackathonSlice";
import topicsReducer from "./topicsSlice";

export const store = configureStore({
  reducer: {
    hackathons: hackathonsReducer,
    topics: topicsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
