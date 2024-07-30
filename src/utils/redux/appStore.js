import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // Add your slice here
    movies: moviesReducer, // Add your slice here
  }, // Add your reducers here
});

export default appStore;
