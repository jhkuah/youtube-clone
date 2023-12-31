import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  LIKE_VIDEO,
  DISLIKE_VIDEO,
  LIKED_VIDEO_SUCCESS,
  LIKED_VIDEO_FAIL,
  LIKED_VIDEO_REQUEST,
  SEARCH_VIDEOS_REQUEST,
  SEARCH_VIDEOS_SUCCESS,
} from "../actionType";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const selectedVideoReducer = (
  state = {
    loading: true,
    video: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        video: payload,
      };
    case SELECTED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELECTED_VIDEO_FAIL:
      return {
        ...state,
        video: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const ratingReducer = (
  state = {
    isLiked: false,
    isDisliked: false,
  },
  action
) => {
  switch (action.type) {
    case LIKE_VIDEO:
      return {
        ...state,
        isLiked: !state.isLiked,
        isDisliked: false,
      };
    case DISLIKE_VIDEO:
      return {
        ...state,
        isLiked: false,
        isDisliked: !state.isDisliked,
      };
    default:
      return state;
  }
};

export const likedVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LIKED_VIDEO_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...payload.videos],

        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };

    case LIKED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case LIKED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const searchVideosReducer = (
  state = {
    videos: [],
    loading: true,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
