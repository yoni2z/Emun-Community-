import React from 'react';
import style from './About.module.css';
import {Link} from 'react-router-dom';
import TitleBanner from '../../components/blog/TitleBanner';
import VolenteerCard from '../../Components/volenteer-with-us/VolenteerCard';
import AboutBg from "../../assets/all-bg.jpg";
import About01 from "../../assets/about-01.jpg";
import About02 from "../../assets/about-02.jpg";

const About = () => {
  return (
    <>
      <TitleBanner title={"ABOUT EMUN"} backgroundImage={AboutBg} />
      <div className={style.about_container}>
        <div className={style.abt_topdiv}>
          <div className={style.abt_desc}>
            <h1>
              We are non Profit <span>Team</span>
            </h1>
            <p>
              We’re passionate about creating sustainable solutions for those
              less fortunate, using private donations to fund our projects, and
              sharing the true life changing stories that were made possible by
              your support.
            </p>
            <button className={style.readMoreButton}>
              Read More
              <i className="fas fa-arrow-right ml-2"></i>{" "}
              {/* FontAwesome arrow */}
            </button>
          </div>
          <div className={style.abt_photo}>
            <img src={About01} />
          </div>
        </div>
        <div className={style.abt_bottomdiv}>
          <div className={style.abt_photo}>
            <div className={style.playIcon}>
              <a href="#">
                <i className="fas fa-play"></i>
              </a>
            </div>
            <img src={About02} />
          </div>
          <div className={style.abt_desc}>
            <h1>
              We have a strong
              <span> Mission</span>
            </h1>
            <p>
              We’re passionate about creating sustainable solutions for those
              less fortunate, using private donations to fund our projects, and
              sharing the true life changing stories that were made possible by
              your support.
            </p>
            <button className={style.readMoreButton}>
              Read More
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
      <VolenteerCard />
    </>
  );
};

export default About;