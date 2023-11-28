import React from "react";
import "./_commentsSection.scss";
import Comment from "./Comment";

const Comments = () => {
  const commentHandler = () => {};
  return (
    <div className="comments__section">
      <p>1234 comments</p>
      <div className="comments__section__form d-flex w-100 my-2">
        <img
          src="https://shorturl.at/dFSZ6"
          alt=""
          className="rounded-circle me-3"
        />
        <form onSubmit={commentHandler} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__section__list">
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
