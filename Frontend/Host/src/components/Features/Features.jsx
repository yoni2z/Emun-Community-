import React from "react";
import "./styles.css";
import { FeaturesCard } from "../Features-Card/Features-Card";
import i1 from "../../assets/Features/1.jpg";

export const Features = () => {
  return (
    <div className="features">
      <div className="features-container">
        <div className="features-container-texts">
          <h2>
            Featured <span className="feature-span">Causes</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia
            hitecto. <br /> Quas quia hitecto.
          </p>
        </div>
        <div className="features-news">
          <FeaturesCard
            image={i1}
            title={"Many different ways today to find"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident aut ipsum suscipit"
            }
          />
          <FeaturesCard
            image={i1}
            title={"Many different ways today to find"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident aut ipsum suscipit"
            }
          />
          <FeaturesCard
            image={i1}
            title={"Many different ways today to find"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident aut ipsum suscipit"
            }
          />
        </div>
      </div>
    </div>
  );
};
