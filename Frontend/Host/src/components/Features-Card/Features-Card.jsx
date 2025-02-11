import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./styles.css";

export const FeaturesCard = ({ image, title, description, link }) => {
  return (
    <Link
      to={link}
      className="card-link"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="card-container">
        <img src={image} alt="" />
        <div className="card-container-texts">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="">
            Read More
            <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </Link>
  );
};
