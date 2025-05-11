import React from "react";
import "./TeasersSection.css";
import { FaYoutube } from "react-icons/fa"; // ✅ Import YouTube icon

const videos = [
  "https://www.youtube.com/embed/xFM0cPcIoyY",
  "https://www.youtube.com/embed/hRaefriN7GA",
  "https://www.youtube.com/embed/mmHAJJQUz0c",
  "https://www.youtube.com/embed/WWeooGChDT4",
];

const TeasersSection = () => {
  return (
    <div className="teasers-section">
      <h2>Teasers</h2>
      <div className="video-grid">
        {videos.map((src, index) => (
          <div className="video-container" key={index}>
            <iframe
              src={src}
              title={`Teaser ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      <div className="youtube-icon">
        <a
          href="https://www.youtube.com/@your_channel" // Replace with your actual YouTube channel URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="glow-youtube" />
        </a>
      </div>
    </div>
  );
};

export default TeasersSection;
