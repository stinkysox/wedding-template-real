import React from "react";
import "./TeasersSection.css";
import { FaYoutube } from "react-icons/fa";

const TeasersSection = () => {
  // Dummy embedded YouTube video URLs
  const videos = [
    "https://www.youtube.com/embed/oGtEyDZWt6A",
    "https://www.youtube.com/embed/CJ_pP5LzaNM",
  ];

  return (
    <div className="teasers-section">
      <h2>Teasers</h2>

      {videos.length === 0 ? (
        <p>No videos to show</p>
      ) : (
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
      )}

      <div className="youtube-icon">
        <a
          href="https://www.youtube.com/@pramodphotography-xe9gy"
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
