import React, { useEffect } from "react";
import "./_watchPage.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetadata from "../../components/videoMetadata/VideoMetadata";
import CommentsSection from "../../components/Comments/CommentsSection";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideosById } from "../../redux/actions/video.action";
import { Helmet } from "react-helmet";

const WatchPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideosById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  return (
    <Row>
      <Helmet>
        <title>{video?.snippet?.title}</title>
      </Helmet>
      <Col lg={12} className="px-3">
        <div className="watchPage__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
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
          channelId={video?.snippet?.channelId}
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
    </Row>
  );
};

export default WatchPage;
