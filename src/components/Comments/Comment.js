import React from "react";
import "./_comment.scss";

const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://shorturl.at/dFSZ6"
        alt=""
        className="me-3 rounded-circle"
      />
      <div className="comment__body">
        <p className="comment__header mb-1">Jian Ho 12 days ago</p>
        <p className="mb-0">Amazing video!</p>
      </div>
    </div>
  );
};

export default Comment;
