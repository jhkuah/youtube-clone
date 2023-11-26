import React from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/Sv4w-nMt268/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNJI53HyF8axhrlCis4mgxunNUAQ"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video__title">Dummy Video</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5.2m views •
        </span>
        <span>1 day ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/MarOXJU0WEqT1NDnQI-OYQ-IJqIWvQ5v8-OO6tHsZCtbokWN4FiDpwxNwHLElqV0ypSO93Po=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Jr Web Dev</p>
      </div>
    </div>
  );
}

export default Video