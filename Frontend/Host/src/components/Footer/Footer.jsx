import React from "react";
import i1 from "../../assets/Footer/emun.png";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="hope">
        <img src={i1} className="footer-emun" alt="Hope" />
        <div className="hope-address">
          <p>
            Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
      <div className="aboutus">
        <h3>ABOUT US</h3>
        <Link
          to="/about-us"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Who We Are
        </Link>
        <a href="">How We Work</a>
        <a href="">Financial</a>
      </div>
      <div className="help">
        <h3>YOUR HELP</h3>
        <a href="">Leave a Legacy</a>
        <a href="">Monthly Giving</a>
        <a href="">One-Time Donation</a>
      </div>
      <div className="impact">
        <h3>OUR IMPACT</h3>
        <a href="">Tutoring & Mentorship</a>
        <a href="">Skill Development</a>
        <a href="">Career Readiness</a>
      </div>

      <div className="follow">
        <h3>FOLLOW US</h3>
        <div className="follow-social">
          <a href="">
            <FontAwesomeIcon icon={faFacebook} color="#949494" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} color="#949494" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGooglePlus} color="#949494" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} color="#949494" />
          </a>
        </div>
      </div>
    </div>
  );
};
