import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <p className="banner-text">
        We don’t just photograph people we capture connections, joy, and the
        warmth of being together.
      </p>
      <div className="banner-button-container">
        <button>Book Now</button>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default Banner;
