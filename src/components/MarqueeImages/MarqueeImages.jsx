import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  // Images that scroll from left-to-right
  const rightArrowImages = [
    "https://i.pinimg.com/736x/61/a9/89/61a9896f7c8dd8a61a9b41df6c78604d.jpg",
    "https://i.pinimg.com/736x/8c/cf/93/8ccf93e3db4be41df083f59dc2b5b6f4.jpg",
    "https://i.pinimg.com/736x/3d/49/d3/3d49d320c5fcbecf58241211a9bd98ea.jpg",
    "https://i.pinimg.com/736x/bb/9c/c4/bb9cc4f9af9ceaa8c85e93e52d6a1b51.jpg",
    "https://i.pinimg.com/736x/08/66/20/08662043c1db2f3e6dde87466c9875e2.jpg",
  ];

  // Images that scroll from right-to-left
  const leftArrowImages = [
    "https://i.pinimg.com/736x/ff/4d/57/ff4d57a7dcc6eb218b4ac16d49afe59b.jpg",
    "https://i.pinimg.com/736x/ca/5d/be/ca5dbefe0afdf4518257c5d7d47cf425.jpg",
    "https://i.pinimg.com/736x/c0/c1/d7/c0c1d7feb7e41448fd386344705f9da0.jpg",
    "https://i.pinimg.com/736x/e3/11/5f/e3115f41e14f7b2b811a4de01991b2ad.jpg",
    "https://i.pinimg.com/736x/28/0c/de/280cde8598cd2033a8cd82593caa8a9a.jpg",
  ];

  return (
    <>
      {/* Left-to-Right Marquee */}
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {rightArrowImages.map((src, idx) => (
            <img
              key={`right-${idx}`}
              className="marquee-img"
              src={src}
              alt={`Right Slide ${idx + 1}`}
            />
          ))}
        </Marquee>
      </div>

      {/* Right-to-Left Marquee */}
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {leftArrowImages.map((src, idx) => (
            <img
              key={`left-${idx}`}
              className="marquee-img"
              src={src}
              alt={`Left Slide ${idx + 1}`}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
