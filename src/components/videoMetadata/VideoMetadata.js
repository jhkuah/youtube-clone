import React, { useEffect } from "react";
import "./_videoMetadata.scss";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import ReactShowMoreText from "react-show-more-text";
import numeral from "numeral";
import moment from "moment";
import { likeVideo, dislikeVideo } from "../../redux/actions/video.action";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchChannelDetails,
  checkSubscriptionStatus,
} from "../../redux/actions/channel.action";

const VideoMetadata = ({ video, videoId }) => {
  const {
    snippet: { channelId, channelTitle, description, publishedAt, title },
    statistics: { viewCount, likeCount },
  } = video;

  const dispatch = useDispatch();
  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);
  const { isLiked, isDisliked } = useSelector((state) => state.ratingDetails);
  const formattedViews = numeral(viewCount).format("0.a").toUpperCase();
  const formattedLikesCount = numeral(likeCount).format("0.a").toUpperCase();
  const formattedSubscribersCount = numeral(channelStatistics?.subscriberCount)
    .format("0.a")
    .toUpperCase();
  const formattedPublishedAt = moment(publishedAt).fromNow();

  useEffect(() => {
    dispatch(fetchChannelDetails(channelId));
  }, [dispatch, channelId]);

  const handleLikeClick = () => {
    dispatch(likeVideo(videoId));
  };

  const handleDislikeClick = () => {
    dispatch(dislikeVideo(videoId));
  };

  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  useEffect(() => {
    dispatch(fetchChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoMetadata py-2">
      <div className="videoMetadata__details">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {formattedViews} views • {formattedPublishedAt}
          </span>
          <div className="me-1">
            <span className="me-3" onClick={handleLikeClick}>
              <MdThumbUp size={26} color={isLiked ? "white" : "gray"} />{" "}
              {formattedLikesCount}
            </span>
            <span onClick={handleDislikeClick}>
              <MdThumbDown size={26} color={isDisliked ? "white" : "gray"} />
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetadata__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-circle me-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>{formattedSubscribersCount} subscribers</span>
          </div>
        </div>
        <button
          className={`p-2 m-2 border-0 btn ${subscriptionStatus && "btn-gray"}`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
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
