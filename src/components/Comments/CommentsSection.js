import React, { useEffect, useState } from "react";
import "./_commentsSection.scss";
import Comment from "./Comment";
import numeral from "numeral";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoComments,
  addComment,
} from "../../redux/actions/comments.action";

const CommentsSection = ({ videoId, totalComments, channelId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoComments(videoId));
  }, [videoId, dispatch]);

  const comments = useSelector((state) => state.commentsList.comments);
  const [text, setText] = useState("");
  const { photoURL } = useSelector((state) => state.auth?.user);

  const topComments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const formattedCommentsCount = numeral(totalComments)
    .format("0.a")
    .toUpperCase();
  const commentHandler = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(channelId, videoId, text));

    setText("");
  };
  return (
    <div className="comments__section">
      <p>{formattedCommentsCount} comments</p>
      <div className="comments__section__form d-flex w-100 my-2">
        <img src={photoURL} alt="avatar" className="rounded-circle me-3" />
        <form onSubmit={commentHandler} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__section__list">
        {topComments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
