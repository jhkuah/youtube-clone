import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  selectedVideoReducer,
} from "./reducers/video.reducer";
import { commentsReducer } from "./reducers/comments.reducer";

const rootReducer = {
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  commentsList: commentsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: composeWithDevTools(),
});

export default store;
