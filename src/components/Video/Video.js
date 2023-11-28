import React, { useEffect, useState } from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";

import moment from "moment/moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router";

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const formattedDuration = moment.utc(seconds * 1000).format("mm:ss");
  const formattedViews = numeral(views).format("0.a").toUpperCase();
  const formattedPublishedAt = moment(publishedAt).fromNow();
  const videoId = id?.videoId || id;
  const navigate = useNavigate();

  useEffect(() => {
    const videoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    videoDetails();
  }, [videoId]);

  useEffect(() => {
    const fetchChannelIcon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    fetchChannelIcon();
  }, [channelId]);

  const videoClickHandler = () => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <div className="video" onClick={videoClickHandler}>
      <div className="video__thumbnail">
        {/* <img src={medium.url} alt="" /> */}
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video__thumbnail__duration">{formattedDuration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {formattedViews} views •
        </span>
        <span>{formattedPublishedAt}</span>
      </div>
      <div className="video__channel">
        {/* <img
          // src={channelIcon?.url}
          
          alt=""
        /> */}
        <LazyLoadImage src={channelIcon?.url} effect="blur" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
