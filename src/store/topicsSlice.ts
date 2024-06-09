import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TopicState } from "../types/types";
import axios from "axios";
import { API_URL } from "../App";

interface TopicsState {
  topics: TopicState[];
  loading: boolean;
  error: string | null;
}

const initialState: TopicsState = {
  topics: [],
  loading: false,
  error: null
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTopics.fulfilled,
        (state, action: PayloadAction<TopicState[]>) => {
          state.loading = false;
          state.topics = action.payload;
        }
      )
      .addCase(fetchTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch topics";
      });
  }
});

interface Topic {
  name: string;
}

interface TopicResponse {
  status: string;
  message: string;
  data: Topic[];
}

export const fetchTopics = createAsyncThunk<TopicState[]>(
  "topics/fetchTopics",
  async () => {
    const response = await axios.get<TopicResponse>(API_URL + "/topics");
    return response.data.data;
  }
);

export default topicsSlice.reducer;
