import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gptEnabled: false,
};

const gptSlice = createSlice({
  name: "gptSlice",
  initialState,
  reducers: {
    toggleGpt: (state) => {
      state.gptEnabled = !state.gptEnabled;
    },
  },
});

export const { toggleGpt } = gptSlice.actions;
export default gptSlice.reducer;
