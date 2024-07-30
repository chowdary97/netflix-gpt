import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
