import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gptEnabled: false,
  gptSuggestedMovies: [],
};

const gptSlice = createSlice({
  name: "gptSlice",
  initialState,
  reducers: {
    toggleGpt: (state) => {
      state.gptEnabled = !state.gptEnabled;
    },
    addGptSuggestedMovies: (state, action) => {
      state.gptSuggestedMovies = action.payload;
    },
  },
});

export const { toggleGpt, addGptSuggestedMovies } = gptSlice.actions;
export default gptSlice.reducer;
