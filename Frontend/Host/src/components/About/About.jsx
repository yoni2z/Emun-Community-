import React from "react";
import "./styles.css";
import i1 from "../../assets/About/1.svg";
import i2 from "../../assets/About/2.svg";
import i3 from "../../assets/About/3.svg";
import i4 from "../../assets/About/4.svg";
import { Link } from "react-router-dom";
import { Handshake, HeartHandshake, PiggyBank, Users } from "lucide-react"; 

export const About = () => {
  return (
    <div className="about">
      <div className="about-us">
        <div className="about-us-text">
          <h2>
            Story About <br className="mobile-hidden" />{" "}
            <span className="span1">What We Do</span>
          </h2>
          <p>
            Since the very beginning, our mission has been clear: empowering
            young
            <br /> minds through tutoring and skill-building. From educational
            support to <br />
            career guidance, everything we do aims to help teenagers and young{" "}
            <br />
            adults gain the knowledge and confidence they need to secure better
            opportunities.
          </p>
          <Link
            to="/about-us"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Know More
          </Link>
        </div>
      </div>
      <div className="about-logos">
        <div className="about-col1">
          <div className="block1">
            <span>
              <Handshake size={40} />
            </span>
            <h5>Leave a Legacy</h5>
            <p>
              Empower the next generation by <br />
              sharing knowledge and skills <br />
              that create lasting impact.
            </p>
          </div>
          <div className="block2">
            <span>
              <HeartHandshake size={40} />
            </span>
            <h5>Become a Fundraiser</h5>
            <p>
              Support education initiatives by <br /> helping raise funds to
              provide <br /> learning opportunities for young individuals.
            </p>
          </div>
        </div>
        <div className="about-col2">
          <div className="block3">
            <span>
              <PiggyBank size={40} />
            </span>
            <h5>Make a Donation</h5>
            <p>
              Contribute to educational programs <br /> that equip teens and
              young adults <br /> with valuable skills for their future careers.
            </p>
          </div>
          <div className="block4">
            <span>
              <Users size={40} />
            </span>
            <h5>Become a Volunteer</h5>
            <p>
              Share your expertise by tutoring and <br />
              mentoring young learners, helping <br /> them achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
