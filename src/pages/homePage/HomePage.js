import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Category from "../../components/Category/Category";
import Video from "../../components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularVideos } from "../../redux/actions/video.action";

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPopularVideos())
  }, [dispatch])

  const {videos} = useSelector(state=> state.homeVideos)
  return (
    <Container>
      <Category />
      <Row>
        {videos.map((video) => (
          <Col key={video.id} lg={3} md={4}>
            <Video video = {video}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
