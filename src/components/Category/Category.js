import React, { useState } from "react";
import "./_category.scss";
import { useDispatch } from "react-redux";
import {
  fetchPopularVideos,
  fetchVideosByCategory,
} from "../../redux/actions/video.action";

const keywords = [
  "All",
  "ReactJS",
  "JavaScript",
  "CSS",
  "HTML",
  "Web Development",
  "Front-end Development",
  "Coldplay",
  "BLACKPINK",
  "Manchester United",
];

const Category = () => {
  const [active, setActive] = useState("All");

  const dispatch = useDispatch();
  const clickHandler = (value) => {
    setActive(value);
    if (value === "All") {
      dispatch(fetchPopularVideos());
    } else {
      dispatch(fetchVideosByCategory(value));
    }
  };

  return (
    <div className="category">
      {keywords.map((value, i) => (
        <span
          onClick={() => clickHandler(value)}
          key={i}
          className={active === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Category;
