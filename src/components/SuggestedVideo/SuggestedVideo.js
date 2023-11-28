import React from "react";
import "./_suggestedVideo.scss";
import { Row, Col } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
// import request from "../../api";

import moment from "moment/moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SuggestedVideo = () => {
  const seconds = moment.duration("100").asSeconds();
  const formattedDuration = moment.utc(seconds * 1000).format("mm:ss");
  const formattedViews = numeral("100000").format("0.a").toUpperCase();
  const formattedPublishedAt = moment("2020-05-12").fromNow();
  return (
    <Row className="suggestedVideo m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="suggestedVideo__left">
        <LazyLoadImage
          src="https://shorturl.at/dFSZ6"
          effect="blur"
          className="rounded-circle suggestedVideo__thumbnail"
          wrapperClassName="suggestedVideo__thumbnail__wrapper"
        />
        <span className="suggestedVideo__duration">{formattedDuration}</span>
      </Col>
      <Col xs={6} md={8} className="suggestedVideo__right p-0">
        <p className="suggestedVideo__title mb-1">Lala Land</p>
        <div className="suggestedVideo__details">
          <span>
            <AiFillEye /> {formattedViews} views •
          </span>
          <span>{formattedPublishedAt}</span>
        </div>
        <div className="suggestedVideo__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage src="https://shorturl.at/dFSZ6" effect="blur" /> */}
          <p>JH KUAH</p>
        </div>
      </Col>
    </Row>
  );
};

export default SuggestedVideo;
