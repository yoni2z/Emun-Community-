import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import KidSmile from "../../assets/Donate/KidSmile.jpg";
export const Donate = () => {
  return (
    <div className="donate">
      <div className="donate-image">
        <img src={KidSmile} alt="" />
      </div>
      <div className="donate-text">
        <h2>
          A LIFE-CHANGING <br /> EXPERIENCE{" "}
          <span>
            FOR A <br /> GREATER CAUSE
          </span>
        </h2>
        <p>
          Your kindness has the power to change lives. <br />
          Even the smallest act of generosity can spark hope and create a
          lasting impact.
        </p>
        <div className="donations">
          <a href="">$10</a>
          <a href="">$50</a>
          <a href="">$100</a>
          <a href="">More</a>
        </div>
        <Link
          to="/donate"
          className="donate-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a href="">Donate Now</a>
        </Link>
      </div>
    </div>
  );
};
