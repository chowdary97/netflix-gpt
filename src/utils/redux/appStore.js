import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptReducer from "./slices/gptSlice";
import configReducer from "./slices/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // Add your slice here
    movies: moviesReducer, // Add your slice here
    gpt: gptReducer,
    config: configReducer,
  }, // Add your reducers here
});

export default appStore;
