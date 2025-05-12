import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <p className="banner-text">
        We don’t just photograph people we capture connections,{" "}
        <span className="highlight">joy</span>, and the{" "}
        <span className="highlight">warmth</span> of being together.
      </p>
      <div className="banner-button-container">
        <button>Book Now</button>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default Banner;
