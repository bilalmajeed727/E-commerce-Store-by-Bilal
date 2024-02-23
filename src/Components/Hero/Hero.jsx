import React from "react";
import "./Hero.css";
import handIcon from "../Assets/hand-icon.png";
import heroIcon from "../Assets/hero-new.png";
import arrow from "../Assets/arrow-white.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hello-section">
          <h2>NEW COLLECTIONS</h2>
          <img src={handIcon} alt="hi" />
        </div>
        <div className="head">
          <p>collections</p>
          <p>for everyone</p>
        </div>

        <div className="hero-latest-btn">
          <p>NEW ARRIVALS HERE</p>
          <img src={arrow} alt="hi" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroIcon} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
