import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { useImageContext } from "../../Context/ImagesContext"; // Import the context
import "./LatestWork.css";

// Make sure these category keys exactly match what's used in your context
const categories = {
  Engagement: [],
  Prewedding: [],
  Haldi: [],
  Wedding: [],
  "Baby Shoot": [],
};

// Animation configurations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const LatestWork = () => {
  const { images } = useImageContext(); // Get images from context
  const [activeCategory, setActiveCategory] = useState("Engagement");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(false);
    const imagesToLoad = images[activeCategory]?.length || 0;
    let loadedCount = 0;

    if (imagesToLoad > 0) {
      images[activeCategory].forEach((imageObj) => {
        const img = new Image();
        img.src = imageObj.imageUrl;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imagesToLoad) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === imagesToLoad) {
            setImagesLoaded(true);
          }
        };
      });
    } else {
      setImagesLoaded(true);
    }
  }, [activeCategory, images]);

  return (
    <div className="latest-work">
      <h2>Our Latest Work</h2>

      <div className="category-buttons">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="image-grid"
          variants={containerVariants}
          initial="hidden"
          animate={imagesLoaded ? "visible" : "hidden"}
          key={activeCategory}
        >
          {images[activeCategory] && images[activeCategory].length > 0 ? (
            images[activeCategory].map((imageObj, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={imageObj.imageUrl}
                  alt={`${activeCategory} ${index + 1}`}
                  className="gallery-img"
                  onClick={() => setSelectedImage(imageObj.imageUrl)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="empty-images"
              key="empty"
              variants={itemVariants}
            >
              <p>No images available in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="instagram-icon">
        <a
          href="https://www.instagram.com/your_username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="glow-icon" />
        </a>
      </div>
    </div>
  );
};

export default LatestWork;
