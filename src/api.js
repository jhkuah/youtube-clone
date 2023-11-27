import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCZ-5guS5lO022dIM5IMMhBkpghDPGNvIg",
  },
});

export default request