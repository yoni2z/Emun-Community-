import React from "react";
import LandingBackground from "../assets/LandingPage/LandingBackground.jpg";

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${LandingBackground})`,
        minHeight: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col bg-yellow-300/25">
        <h1>AYZON FOUNDATION</h1>
        <p>Be the Change: Make it Happen!</p>
        <div className="flex flex-row">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
