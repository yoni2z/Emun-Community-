import React from 'react';
import style from './About.module.css';
import {Link} from 'react-router-dom';
import TitleBanner from '../../components/blog/TitleBanner';
import VolenteerCard from '../../Components/volenteer-with-us/VolenteerCard';
import AboutBg from "../../assets/all-bg.jpg";
import About01 from "../../assets/career.jpg";
import About02 from "../../assets/vision.jpg";
import Members from "../../components/Members/Members";
import { useState,useEffect } from 'react';

const About = () => {
  const [membersList, setMembersList] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/board-members")
      .then((response) => response.json())
      .then((data) => setMembersList(data))
      .catch((error) => console.error("Error fetching member list", error));
  }, []);
  return (
    <>
      <TitleBanner title={"ABOUT EMUN"} backgroundImage={AboutBg} />
      <div className={style.about_container}>
        <div className={style.abt_topdiv}>
          <div className={style.abt_desc}>
            <h1>
              Empowering <span>Community</span>
            </h1>
            <p>
              We are dedicated to equipping teenagers and young adults with the
              skills and knowledge they need to succeed. Through tutoring,
              mentorship, and career guidance, we help create opportunities for
              a brighter future. Join us in making a lasting impact on the
              community.
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
              We have a strong <span>Mission</span>
            </h1>
            <p>
              Our mission is to empower teenagers and young adults through
              education, mentorship, and skill-building. By providing access to
              tutoring programs, career guidance, and community support, we help
              individuals unlock their potential and create opportunities for a
              better future.
            </p>
            <button className={style.readMoreButton}>
              Read More
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex gap-40 p-10 mt-20 mb-40 ${style["scrollbar-custom"]}`}
      >
        {membersList.map((member, index) => (
          <Members
            key={index}
            photo={member.image}
            name={member.name}
            discription={member.role}
          />
        ))}
      </div>
      <VolenteerCard />
    </>
  );
};

export default About;