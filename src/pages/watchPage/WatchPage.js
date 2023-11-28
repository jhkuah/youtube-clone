import React, { useEffect } from "react";
import "./_watchPage.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetadata from "../../components/videoMetadata/VideoMetadata";
import CommentsSection from "../../components/Comments/CommentsSection";
import SuggestedVideo from "../../components/SuggestedVideo/SuggestedVideo";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideosById } from "../../redux/actions/video.action";

const WatchPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideosById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  return (
    <Row>
      <Col lg={8}>
        <div className="watchPage__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameborder="0"
            title={video?.snippet?.title}
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetadata video={video} videoId={id} />
        ) : (
          <h6>Loading...</h6>
        )}

        <CommentsSection
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
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
