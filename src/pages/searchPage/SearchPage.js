import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchVideosBySearch } from "../../redux/actions/video.action";
import { Container } from "react-bootstrap";
import SuggestedVideo from "../../components/SuggestedVideo/SuggestedVideo";
const SearchPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideosBySearch(query));
  }, [query, dispatch]);
  console.log(query);

  const { videos, loading } = useSelector((state) => state.searchVideos);
  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <SuggestedVideo video={video} key={video.id.videoId} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

export default SearchPage;
