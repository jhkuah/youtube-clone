import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  selectedVideoReducer,
  ratingReducer,
} from "./reducers/video.reducer";
import { commentsReducer } from "./reducers/comments.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";

const rootReducer = {
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  commentsList: commentsReducer,
  channelDetails: channelDetailsReducer,
  ratingDetails: ratingReducer,
};

const middleware = [
  ...getDefaultMiddleware(),
  thunk, // Add the thunk middleware
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: composeWithDevTools(),
});

export default store;
