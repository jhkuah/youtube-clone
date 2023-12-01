import axios from "axios";

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: apiKey,
  },
});

export default request;
