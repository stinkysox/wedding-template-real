import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const categories = {
    "Right Images": [
      {
        imageUrl: "https://i.postimg.cc/3NNvp2jt/VSK02380.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/3wrS6c3N/0-20.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/fTKYFTy7/0-27.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/rFnKxdzH/0-57.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/DwxdWyKf/0-2.jpg",
      },
    ],
    "Left Images": [
      {
        imageUrl: "https://i.postimg.cc/pT6dw48B/VSK01839.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/43F50482/0-13.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/5yJF7ZMk/0-11.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/HxdpfHV5/0-2-1.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/Gtz9MtKH/0-8.jpg",
      },
    ],
  };

  const rightImages = categories["Right Images"];
  const leftImages = categories["Left Images"];

  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return generateEmptyImages();

    return imagesArray.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
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
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
