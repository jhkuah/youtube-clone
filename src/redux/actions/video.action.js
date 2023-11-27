import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS} from "../reducers/actionType"
import request from "../../api"

export const fetchPopularVideos = () => async dispatch => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const {data} = await request("/videos",{
            params: {
                part:"snippet, contentDetails, statistics",
                chart: "mostPopular",
                regionCode: "MY",
                maxResults: 20,
                pageToken: "",
            }
        })

        dispatch({
          type: HOME_VIDEOS_SUCCESS,
          payload: {
            videos: data.items,
            nextPageToken: data.nextPageToken,
          },
        });

    } catch (error) {
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message
        })
    }
}