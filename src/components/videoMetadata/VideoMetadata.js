import React from "react";
import "./_videoMetadata.scss";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import ReactShowMoreText from "react-show-more-text";

const VideoMetadata = () => {
  return (
    <div className="videoMetadata py-2">
      <div className="videoMetadata__details">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>12 views • 1 day ago</span>
          <div>
            <span>
              <MdThumbUp size={26} /> 10000
            </span>
            <span>
              <MdThumbDown size={26} /> 200
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetadata__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://shorturl.at/dFSZ6"
            alt=""
            className="rounded-circle me-3"
            style={{ width: "36px", height: "36px" }}
          />
          <div className="d-flex flex-column">
            <span>JH KUAH</span>
            <span>10000 subscribers</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>

      <div className="videoMetadata__desc">
        <ReactShowMoreText
          lines={1}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
          dolores. Pariatur rerum tempora expedita soluta non illum nihil
          repellat eius, aperiam asperiores fugit facilis perferendis debitis
          vel minus doloremque neque.
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetadata;
