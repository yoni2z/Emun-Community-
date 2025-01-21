import React from "react";
import "./styles.css";
import { FaPlay } from "react-icons/fa";

export const Videos = () => {
  return (
    <div className="video">
      <span className="span">
        <a href="">
          <FaPlay  size={30}  />
        </a>
      </span>
    </div>
  );
};
