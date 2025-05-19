import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  // Define images directly in the component
  const categories = {
    "Right Images": [
      {
        imageUrl:
          "https://i.pinimg.com/736x/24/3a/f3/243af3f924ab6846b1f2095af85bfed6.jpg",
        category: "Right Images",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/f2/f9/4b/f2f94b92e1048b45b372db321e042bce.jpg",
        category: "Right Images",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/f1/0f/22/f10f22327238583e66859a6514e4d62e.jpg",
        category: "Right Images",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/b7/43/ef/b743ef4649354cd5a45fcfe0f0609afb.jpg",
        category: "Right Images",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/05/38/c2/0538c243c1d3599fd7c37f81fdae7384.jpg",
        category: "Right Images",
      },
    ],
    "Left Images": [
      {
        imageUrl:
          "https://i.pinimg.com/736x/50/36/08/50360859203a51e5de8e30e934ab856d.jpg",
        category: "Left Images",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/55/a0/42/55a042ffebaf73b4367b0e78f3c5b08e.jpg",
        category: "Left Images",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/32/de/7c/32de7c6dea7a32733bbc4792dcde506e.jpg",
        category: "Left Images",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/5b/c5/e1/5bc5e1d1222c8c1d1aee9094140ba0ac.jpg",
        category: "Left Images",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/58/e7/9f/58e79f5f30226747fdb75e3db34d9a4a.jpg",
        category: "Left Images",
      },
    ],
  };

  const rightArrowImages = categories["Right Images"];
  const leftArrowImages = categories["Left Images"];

  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  const renderImages = (imageArray, direction) => {
    return imageArray.length > 0
      ? imageArray.map((image, idx) => (
          <img
            key={`${direction}-${idx}`}
            className="marquee-img"
            src={image.imageUrl}
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
