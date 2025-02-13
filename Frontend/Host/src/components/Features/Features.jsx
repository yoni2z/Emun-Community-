import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import { FeaturesCard } from "../Features-Card/Features-Card";
import i1 from "../../assets/Features/6.jpg";
import i2 from "../../assets/Features/4.jpg";
import i3 from "../../assets/Features/5.jpg";

export const Features = () => {
  return (
    <div className="features">
      <div className="features-container">
        <div className="features-container-texts">
          <h2>
            FEATURED <span className="feature-span">CAUSES</span>
          </h2>
          <p>
            Join our featured cause to create lasting change and empower people
            in need.
          </p>
        </div>
        <div className="features-news">
          <FeaturesCard
            image={i1}
            title={"Embracing Community: The Power of Helping Others"}
            description={
              "In a world that often feels divided, the simple act of helping others can bridge gaps and foster connection"
            }
            link={"/resource-details/2"}
          />
          <FeaturesCard
            image={i2}
            title={"Job Readiness and Skill Development"}
            description={
              "Access resources that prepare you for the job market, including resume building, interview preparation, and skill development courses tailored to various industries."
            }
            link={"/blogs/2"}
          />
          <FeaturesCard
            image={i3}
            title={"Emun Community Hosts 7-Day Training on Math and English"}
            description={
              "A comprehensive 7-day training program focusing on math and English was organized by the E-Mun Community in collaboration"
            }
            link={"/blogs/1"}
          />
        </div>
      </div>
    </div>
  );
};
