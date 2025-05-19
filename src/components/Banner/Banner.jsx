import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate(); // Create navigate function

  const handleBookNowClick = () => {
    navigate("/form"); // Navigate to the /form route
  };

  const handleLearnMoreClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      // Smooth scroll to the section with id 'services'
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banner">
      <p className="banner-text">
        Pramod Photography — <strong>The Wedding Storyteller</strong>. Capturing
        love through cinematic wedding films and timeless photography. From
        planning to execution, we turn your big day into a beautiful story —
        anywhere in the world. We don’t just photograph people, we capture
        connections, <span className="highlight">joy</span>, and the{" "}
        <span className="highlight">warmth</span> of being together.
      </p>

      <div className="banner-button-container">
        <button onClick={handleBookNowClick}>Book Now</button>
        <button onClick={handleLearnMoreClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
