import React, { useState, useEffect } from "react";
import "./_videoMetadata.scss";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import ReactShowMoreText from "react-show-more-text";
import numeral from "numeral";
import moment from "moment";
import request from "../../api";

const VideoMetadata = ({ video }) => {
  const {
    snippet: { channelId, channelTitle, description, publishedAt, title },
    statistics: { viewCount, likeCount },
  } = video;

  const [subscribers, setSubscribers] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const formattedViews = numeral(viewCount).format("0.a").toUpperCase();
  const formattedLikesCount = numeral(likeCount).format("0.a").toUpperCase();
  const formattedSubscribersCount = numeral(subscribers)
    .format("0.a")
    .toUpperCase();
  const formattedPublishedAt = moment(publishedAt).fromNow();

  useEffect(() => {
    const fetchChannelDetails = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "statistics, snippet",
          id: channelId,
        },
      });
      setSubscribers(items[0].statistics.subscriberCount);
      setChannelIcon(items[0].snippet.thumbnails.default);
      console.log(items);
    };
    fetchChannelDetails();
  }, [channelId]);

  return (
    <div className="videoMetadata py-2">
      <div className="videoMetadata__details">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {formattedViews} views • {formattedPublishedAt}
          </span>
          <div>
            <span className="me-3">
              <MdThumbUp size={26} /> {formattedLikesCount}
            </span>
            <span>
              <MdThumbDown size={26} />
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetadata__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img src={channelIcon?.url} alt="" className="rounded-circle me-3" />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>{formattedSubscribersCount} subscribers</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>

      <div className="videoMetadata__desc">
        <ReactShowMoreText
          lines={2}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetadata;
