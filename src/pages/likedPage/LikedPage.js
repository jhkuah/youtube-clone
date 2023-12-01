import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikedVideos } from "../../redux/actions/video.action";
import InfiniteScroll from "react-infinite-scroll-component";
import { Helmet } from "react-helmet";

const LikedPage = () => {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.likedVideos);
  useEffect(() => {
    dispatch(fetchLikedVideos());
  }, [dispatch]);

  const fetchData = () => {
    dispatch(fetchLikedVideos());
  };
  return (
    <Container>
      <Helmet>
        <title>Liked Videos</title>
      </Helmet>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={videos.length > 20 ?? true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        <Row>
          {!loading &&
            videos.map((video) => (
              <Col key={video.id} lg={3} md={4}>
                <Video video={video} />
              </Col>
            ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default LikedPage;
