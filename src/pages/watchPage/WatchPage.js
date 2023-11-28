import React from "react";
import "./_watchPage.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetadata from "../../components/videoMetadata/VideoMetadata";
import CommentsSection from "../../components/Comments/CommentsSection";
import SuggestedVideo from "../../components/SuggestedVideo/SuggestedVideo";

const WatchPage = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchPage__player">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            frameborder="0"
            title="My Video"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
        <VideoMetadata />
        <CommentsSection />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <SuggestedVideo />
        ))}
      </Col>
    </Row>
  );
};

export default WatchPage;
