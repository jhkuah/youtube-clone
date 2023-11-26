import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Category from "../../components/Category/Category";
import Video from "../../components/Video/Video";

const HomeScreen = () => {
  return (
    <Container>
      <Category />
      <Row>
        {[...new Array(20)].map((_, index) => (
          <Col key={index} lg={3} md={4}>
            <Video id={`video_${index}`}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
