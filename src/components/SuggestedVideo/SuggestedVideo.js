import React, { useState, useEffect } from "react";
import "./_suggestedVideo.scss";
import { Row, Col } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import { useNavigate } from "react-router";
import moment from "moment/moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SuggestedVideo = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      description,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const videoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    videoDetails();
  }, [id]);

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

  const handleClick = () => {
    navigate(`/watch/${id.videoId}`);
  };

  const seconds = moment.duration(duration).asSeconds();
  const formattedDuration = moment.utc(seconds * 1000).format("mm:ss");
  const formattedViews = numeral(views).format("0.a").toUpperCase();
  const formattedPublishedAt = moment(publishedAt).fromNow();
  return (
    <Row
      className="suggestedVideo m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} md={4} className="suggestedVideo__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="rounded-circle suggestedVideo__thumbnail"
          wrapperClassName="suggestedVideo__thumbnail__wrapper"
        />
        <span className="suggestedVideo__duration">{formattedDuration}</span>
      </Col>
      <Col xs={6} md={8} className="suggestedVideo__right p-0">
        <p className="suggestedVideo__title mb-1">{title}</p>
        <div className="suggestedVideo__details">
          <span>
            <AiFillEye /> {formattedViews} views •
          </span>
          <span>{formattedPublishedAt}</span>
        </div>
        <p className="mt-1 videoHorizontal__desc">{description}</p>
        <div className="suggestedVideo__channel d-flex align-items-center my-1">
          <LazyLoadImage src={channelIcon?.url} effect="blur" />
          <p>{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default SuggestedVideo;
