import React from "react";
import "./styles.css";
import i1 from "../../assets/Donate/1.jpg";

export const Donate = () => {
  return (
    <div className="donate">
      <div className="donate-image">
        <img src={i1} alt="" />
      </div>
      <div className="donate-text">
        <h2>
          An Important <br /> Event{" "}
          <span>
            For <br /> Charity
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Voluptatem adipisci ut provident laboriosam recusandae, <br />
          rerum doloremque unde at officiis ea qui suscipit est
        </p>
        <div className="donations">
          <a href="">$10</a>
          <a href="">$50</a>
          <a href="">$100</a>
          <a href="">More</a>
        </div>
        <a href="">Donate Now</a>
      </div>
    </div>
  );
};
