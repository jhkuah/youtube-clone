import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Category from "../../components/Category/Category";
import Video from "../../components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import {
  fetchPopularVideos,
  fetchVideosByCategory,
} from "../../redux/actions/video.action";
import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory } = useSelector((state) => state.homeVideos);
  const fetchData = () => {
    if (activeCategory === "All") dispatch(fetchPopularVideos());
    else {
      dispatch(fetchVideosByCategory(activeCategory));
    }
  };
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Category />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {videos.map((video) => (
          <Col lg={3} md={4}>
            <Video video={video} key={video.id} />
          </Col>
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomePage;
