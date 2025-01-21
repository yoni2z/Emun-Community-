
import React from 'react'
import { Link } from "react-router-dom";
import BecomeVolunteerBg from "../../assets/become-a-volunteer-bg.png";

const VolenteerCard = () => {
  return (
    <div
      className="w-full h-[64vh]  flex items-center justify-center bg-cover bg-center relative bg-[#ffd012] "
      style={{
        backgroundImage: `url(${BecomeVolunteerBg})`,
        flexDirection: "column",
        gap: "20px",
        paddingTop: "100px",
        paddingBottom: "70px",
      }}
    >
      <h1 className="relative z-10 text-white text-center text-[4rem]  font-black tracking-tight leading-snug">
        Become a Volunteer
      </h1>
      <h4
        className=" relative z-10 text-white text-center text-[1.6rem]  font-black tracking-tight leading-snug"
        style={{ fontWeight: "400" }}
      >
        Join us for a better life and beautiful future
      </h4>
      <Link
        to="/volunteers"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <button
          className="relative z-10 text-black text-center text-[1.1rem] font-black tracking-tight leading-snug bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
          style={{
            padding: "15px 38px",
            fontWeight: "700",
            marginTop: "40px",
            borderRadius: "4px",
          }}
        >
          Join Us Now
        </button>
      </Link>
    </div>
  );
}

export default VolenteerCard;