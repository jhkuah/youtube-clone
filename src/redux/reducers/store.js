import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./auth.reducer";
import { homeVideosReducer, selectedVideoReducer } from "./video.reducer";

const rootReducer = {
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: composeWithDevTools(),
});

export default store;
