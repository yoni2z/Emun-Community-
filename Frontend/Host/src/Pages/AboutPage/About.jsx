import React from 'react';
import style from './About.module.css';
import {Link} from 'react-router-dom';
import TitleBanner from '../../components/blogs/TitleBanner';
import VolenteerCard from '../../Components/volenteer-with-us/VolenteerCard';

const About = () => {
  return (
    <>
    <TitleBanner title={"About Hope"} backgroundImage={"https://demo.joomshaper.com/2017/hope/images/demo/page-title-bg.jpg"}/>
    <div className={style.about_container}>
       
        <div className={style.abt_topdiv}>
            <div className={style.abt_desc}>
                <h1>We are non Profit <span>Team</span></h1>
                <p>We’re passionate about creating sustainable solutions for those less fortunate, using private donations to fund our projects, and sharing the true life changing stories that were made possible by your support.</p>
                <button >Read More</button>
            </div>
            <div className={style.abt_photo}>
                <img src="https://demo.joomshaper.com/2017/hope/images/2017/09/13/about-01.jpg"/>
            </div>
        </div>
        <div className={style.abt_bottomdiv}>
            <div className={style.abt_photo}>
                <div className={style.playIcon}>
                    <a href='#'>
                        <i class='fas fa-play'></i>
                    </a>
                </div>
                <img src="https://demo.joomshaper.com/2017/hope/images/2017/09/13/about-02.jpg"/>
            </div>
            <div className={style.abt_desc}>
                <h1>We have a
                        strong
                            <span> Mission</span></h1>
                <p>We’re passionate about creating sustainable solutions for those less fortunate, using private donations to fund our projects, and sharing the true life changing stories that were made possible by your support.</p>
                <button >Read More</button>
            </div>
        </div>
    </div>
    <VolenteerCard/>
    </>
  )
}

export default About