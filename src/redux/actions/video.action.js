import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  LIKE_VIDEO,
  DISLIKE_VIDEO,
  LIKED_VIDEO_REQUEST,
  LIKED_VIDEO_SUCCESS,
  LIKED_VIDEO_FAIL,
} from "../actionType";
import request from "../../api";

export const fetchPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "MY",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const fetchVideosByCategory =
  (keywords) => async (dispatch, getState) => {
    try {
      dispatch({
        type: HOME_VIDEOS_REQUEST,
      });
      const { data } = await request("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
          q: keywords,
          type: "video",
        },
      });

      dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
          category: keywords,
        },
      });
    } catch (error) {
      dispatch({
        type: HOME_VIDEOS_FAIL,
        payload: error.message,
      });
    }
  };

export const fetchVideosById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_VIDEO_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: SELECTED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const likeVideo = (id) => async (dispatch, getState) => {
  try {
    await request.post(
      `/videos/rate`,
      {
        id: id,
        rating: "like",
      },
      {
        params: {
          access_token: getState().auth?.accessToken,
        },
      }
    );

    dispatch({
      type: LIKE_VIDEO,
    });
  } catch (error) {
    console.error("Error liking video:", error.message);
  }
};

export const dislikeVideo = (id) => async (dispatch, getState) => {
  try {
    await request.post(
      `/videos/rate`,
      {
        id: id,
        rating: "dislike",
      },
      {
        params: {
          access_token: getState().auth?.accessToken,
        },
      }
    );

    dispatch({
      type: DISLIKE_VIDEO,
    });
  } catch (error) {
    console.error("Error liking video:", error.message);
  }
};

export const fetchLikedVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIKED_VIDEO_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        myRating: "like",
        maxResults: 20,
        pageToken: getState().likedVideos.nextPageToken,
      },
      headers: {
        Authorization: `Bearer ${getState().auth?.accessToken}`,
      },
    });

    dispatch({
      type: LIKED_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken || null,
      },
    });
  } catch (error) {
    dispatch({
      type: LIKED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
