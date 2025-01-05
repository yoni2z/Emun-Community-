import React, { useState, useEffect } from "react";
import "./styles.css";
import image1 from "../../assets/Hero/1.jpg";
import image2 from "../../assets/Hero/2.jpg";
import image3 from "../../assets/Hero/3.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const backgrounds = [
    { image: `url(${image1})`, className: "background-1" },
    { image: `url(${image2})`, className: "background-2" },
    { image: `url(${image3})`, className: "background-3" },
  ];

  useEffect(() => {
    let start;
    const changeBackground = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // Change the image every 10 seconds
      if (elapsed >= 10000) {
        setCurrentImage((prevImage) => (prevImage + 1) % backgrounds.length);
        start = timestamp;
      }

      // Continue the animation loop
      requestAnimationFrame(changeBackground);
    };

    // Start the animation
    const animationId = requestAnimationFrame(changeBackground);

    // Cleanup function to cancel the animation
    return () => cancelAnimationFrame(animationId);
  }, [backgrounds.length]);

  return (
    <div
      className={`hero-container ${backgrounds[currentImage].className}`}
      style={{
        backgroundImage: backgrounds[currentImage].image,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title fade-in-text">Hope For <br /> Humanity</h1>
        <p className="hero-subtitle fade-in-text">
          GIVE A HELPING HAND TO THOSE WHO NEED IT!
        </p>
        <div className="hero-button">
          <Link to="/about-us" className="fade-in-button">
            Get Started
          </Link>
          <Link to="/donate" className="fade-in-button yellow-button">
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
