import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import { FeaturesCard } from "../Features-Card/Features-Card";
import i1 from "../../assets/Features/6.jpeg";
import i2 from "../../assets/Features/4.jpg";
import i3 from "../../assets/Features/5.png";

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
            title={"Rehabilitation Centers and Support Groups"}
            description={
              "Access a directory of stroke rehabilitation centers, clinics, and support groups across Ethiopia and Africa. These centers offer specialized therapy services to aid in recovery, from physical therapy to cognitive rehabilitation."
            }
            link={"/resource-details/1"}
          />
          <FeaturesCard
            image={i2}
            title={"Stroke Recovery Monitoring Tools"}
            description={
              "Download free tools and worksheets that help stroke survivors and caregivers monitor progress during rehabilitation. These tools are designed to track physical, emotional, and cognitive recovery milestones."
            }
            link={"/resource-details/3"}
          />
          <FeaturesCard
            image={i3}
            title={"Stroke Care and Rehabilitation Guidelines"}
            description={
              "A resource for healthcare professionals that outlines the latest clinical guidelines for stroke care, including emergency response protocols, rehabilitation best practices, and post-stroke management."
            }
            link={"/resource-details/4"}
          />
        </div>
      </div>
    </div>
  );
};
