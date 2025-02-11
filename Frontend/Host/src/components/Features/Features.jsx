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
            title={"Tutoring and Mentorship Programs"}
            description={
              "Explore a range of tutoring and mentorship programs designed to help teenagers and young adults build essential skills. Get guidance from experienced mentors to boost your learning and career prospects."
            }
            link={"/resource-details/1"}
          />
          <FeaturesCard
            image={i2}
            title={"Job Readiness and Skill Development"}
            description={
              "Access resources that prepare you for the job market, including resume building, interview preparation, and skill development courses tailored to various industries."
            }
            link={"/resource-details/3"}
          />
          <FeaturesCard
            image={i3}
            title={"Entrepreneurship and Career Growth"}
            description={
              "Learn about business development, freelancing opportunities, and career growth strategies to help young individuals start their own ventures or secure meaningful employment."
            }
            link={"/resource-details/4"}
          />
        </div>
      </div>
    </div>
  );
};
