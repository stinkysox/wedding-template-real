import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LatestWork.css";
import { FaInstagram } from "react-icons/fa"; // ✅ Import Instagram icon

const categories = {
  Engagement: [
    "https://i.pinimg.com/736x/8f/33/5c/8f335ca141afbe0bab770caf8a7dc541.jpg",
    "https://i.pinimg.com/736x/2b/84/10/2b841012eb81edc58801e82d680751ba.jpg",
    "https://i.pinimg.com/736x/48/20/01/482001fc73e0468b773ef40581497b8c.jpg",
    "https://i.pinimg.com/736x/34/68/1e/34681e793221bc82ec5bcdece43910b2.jpg",
  ],
  "Pre-wedding": [
    "https://i.pinimg.com/736x/cc/ad/32/ccad32362b224d1351d2063ee1fa224d.jpg",
    "https://i.pinimg.com/736x/7f/b8/2a/7fb82a10221e778280b94fc6400f380e.jpg",
    "https://i.pinimg.com/736x/40/13/2a/40132a79d7927e552319e0cc921194d8.jpg",
  ],
  Haldi: [
    "https://i.pinimg.com/736x/2d/25/ad/2d25adb76ceacef936435e57fd1e1e59.jpg",
    "https://i.pinimg.com/736x/01/40/c5/0140c553fbbcc4168d2e074399c3cddc.jpg",
    "https://i.pinimg.com/736x/29/88/9f/29889f04708b5102273bdac057e12405.jpg",
    "https://i.pinimg.com/736x/41/2d/71/412d71f791792234c8418e059008496e.jpg",
  ],
  Wedding: [
    "https://i.pinimg.com/736x/91/64/ab/9164ab1592409cf187962b1dfd3c26cf.jpg",
    "https://i.pinimg.com/736x/91/05/a8/9105a8c8ee80abff386925db2861a114.jpg",
    "https://i.pinimg.com/736x/02/9d/69/029d69c72bacaa2ca9fed30d3560c61b.jpg",
    "https://i.pinimg.com/736x/7f/b8/2a/7fb82a10221e778280b94fc6400f380e.jpg",
    "https://i.pinimg.com/736x/12/45/70/124570cb15e2fa0215ba74111f7b6685.jpg",
  ],
  "Baby Shoot": [
    "https://i.pinimg.com/736x/25/e7/07/25e70734e5787dcfe24ee42ac16bfe0e.jpg",
    "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
    "https://i.pinimg.com/736x/08/8d/8e/088d8e79917f888d6bc07dac07c44321.jpg",
    "https://i.pinimg.com/736x/35/7a/55/357a55baf93b13e7f5f640edb6d36c1a.jpg",
  ],
};

// Animation configurations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // Smoother staggered appearance
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Smaller distance for subtler animation
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Shorter duration for smoother animation
      ease: "easeOut",
    },
  },
};

const LatestWork = () => {
  const [activeCategory, setActiveCategory] = useState("Engagement");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Handle image preloading when category changes
  useEffect(() => {
    // Reset loaded state when category changes
    setImagesLoaded(false);

    // Preload images for current category
    const imagesToLoad = categories[activeCategory].length;
    let loadedCount = 0;

    // Create image elements to preload
    categories[activeCategory].forEach((src) => {
      const img = new Image();
      img.src = src;

      // Track when each image loads
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad) {
          setImagesLoaded(true);
        }
      };

      // Count errors as loaded to prevent hanging
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad) {
          setImagesLoaded(true);
        }
      };
    });

    // If no images in category, mark as loaded
    if (imagesToLoad === 0) {
      setImagesLoaded(true);
    }
  }, [activeCategory]);

  return (
    <div className="latest-work">
      <h2>Our Latest Work</h2>

      {/* Category selection buttons */}
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

      {/* Image grid with animations */}
      <AnimatePresence mode="wait">
        <motion.div
          className="image-grid"
          variants={containerVariants}
          initial="hidden"
          animate={imagesLoaded ? "visible" : "hidden"}
          key={activeCategory}
        >
          {categories[activeCategory].map((imageUrl, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              variants={itemVariants}
              style={{ overflow: "hidden" }}
            >
              <img
                src={imageUrl}
                alt={`${activeCategory} ${index + 1}`}
                className="gallery-img"
                onClick={() => setSelectedImage(imageUrl)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox modal for selected image */}
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
          href="https://www.instagram.com/your_username" // Replace with your actual IG handle
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
