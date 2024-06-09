import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HackathonState } from "../types/types";
import axios from "axios";
import { API_URL } from "../App";

interface HackathonsState {
  hackathons: HackathonState[];
  loading: boolean;
  error: string | null;
}

const initialState: HackathonsState = {
  hackathons: [],
  loading: false,
  error: null
};

export const fetchHackathons = createAsyncThunk<HackathonState[]>(
  "hackathons/fetchHackathons",
  async () => {
    const response = await axios.get<HackathonState[]>(API_URL + "/hackathons");
    return response.data;
  }
);

const hackathonsSlice = createSlice({
  name: "hackathons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHackathons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchHackathons.fulfilled,
        (state, action: PayloadAction<HackathonState[]>) => {
          state.loading = false;
          state.hackathons = action.payload;
        }
      )
      .addCase(fetchHackathons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch hackathons";
      });
  }
});

export default hackathonsSlice.reducer;
