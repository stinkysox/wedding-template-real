import React from "react";
import Marquee from "react-fast-marquee";
import { useImageContext } from "../../Context/ImagesContext";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const { images } = useImageContext();

  const rightArrowImages = images["Right Images"] || [];
  const leftArrowImages = images["Left Images"] || [];

  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  const renderImages = (imageArray, direction) => {
    return imageArray.length > 0
      ? imageArray.map((src, idx) => (
          <img
            key={`${direction}-${idx}`}
            className="marquee-img"
            src={src.imageUrl}
            alt={`${direction === "right" ? "Right" : "Left"} Slide ${idx + 1}`}
          />
        ))
      : generateEmptyImages();
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightArrowImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftArrowImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
