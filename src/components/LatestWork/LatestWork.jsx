import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import "./LatestWork.css";

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

const initialCategories = {
  Wedding: [
    {
      imageUrl: "https://i.postimg.cc/RZrCmwYw/VNU04577.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/4dr43tdC/VNU04534.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/cJz0DYfK/VNU04580.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/jdhTpBzY/VNU04649.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/CMmJ9Nz6/VNU04547.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/C1wHQBYg/VNU04499.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/KcHBnsKF/VNU04529.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/FRndV7HG/VNU04771.jpg",
      category: "Wedding",
    },

    {
      imageUrl: "https://i.postimg.cc/jd90NNYC/VNU04514.jpg",
      category: "Wedding",
    },
  ],

  Prewedding: [
    {
      imageUrl: "https://i.postimg.cc/d34CX46R/VNU00906.jpg",
      category: "Prewedding",
    },
    {
      imageUrl: "https://i.postimg.cc/B6mRvGQd/VNU05081.jpg",
      category: "Prewedding",
    },
    {
      imageUrl: "https://i.postimg.cc/DwQjZKxB/VNU05075.jpg",
      category: "Prewedding",
    },
    {
      imageUrl: "https://i.postimg.cc/9QV31bSg/VNU05058.jpg",
      category: "Prewedding",
    },
    {
      imageUrl: "https://i.postimg.cc/HLV6t7pP/VNU05034.jpg",
      category: "Prewedding",
    },
    {
      imageUrl: "https://i.postimg.cc/fTC5nvyr/VNU05189.jpg",
      category: "Prewedding",
    },

    {
      imageUrl: "https://i.postimg.cc/Jhv1zJ6N/1-2.jpg",
      category: "Prewedding",
    },
  ],
  Engagement: [
    {
      imageUrl: "https://i.postimg.cc/0ygXPCqG/VSK01931.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/TwyHTNh9/VSK01893.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/7YrQyV43/VSK01699.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/jj1Z36vJ/VSK00223.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/sf7wKhWv/VSK00489.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/mDMNdvt0/VSK00444.jpg",
      category: "Engagement",
    },
  ],

  Haldi: [
    {
      imageUrl: "https://i.postimg.cc/jdXkXTrm/0-25.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/7hDr5Ng2/0-13.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/4yXjfxgv/0-12.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/FHkCQLS5/0-6.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/vHc3WV3g/0-2.jpg",
      category: "Haldi",
    },

    {
      imageUrl: "https://i.postimg.cc/7PgTjYhs/DSC02782.jpg",
      category: "Haldi",
    },

    {
      imageUrl: "https://i.postimg.cc/SRqjmCRZ/DSC02759.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/nzxnmZxr/DSC02613.jpg",
      category: "Haldi",
    },
  ],

  "Baby Shoot": [
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/28/47/d6/2847d640a6f7a3eb98244e98e0a171b3.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/7d/95/6a/7d956a18a2e4fa572a95206efc4fe3a0.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/a6/33/db/a633db1344685ae434bb7672f5a84d52.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/a9/12/35/a91235fbbbeae6a77447cf339b6c3491.jpg",
      category: "Baby Shoot",
    },
  ],
};

const LatestWork = () => {
  const categoryKeys = Object.keys(initialCategories);
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0] || "");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(false);
    const imagesToLoad = initialCategories[activeCategory]?.length || 0;
    let loadedCount = 0;

    if (imagesToLoad > 0) {
      initialCategories[activeCategory].forEach((imageObj) => {
        const img = new Image();
        img.src = imageObj.imageUrl;
        img.onload = img.onerror = () => {
          loadedCount++;
          if (loadedCount === imagesToLoad) {
            setImagesLoaded(true);
          }
        };
      });
    } else {
      setImagesLoaded(true);
    }
  }, [activeCategory]);

  return (
    <div className="latest-work">
      <h2>Our Latest Work</h2>

      <div className="category-buttons">
        {categoryKeys.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {!imagesLoaded && <p className="loading-message">Loading images...</p>}

      <AnimatePresence mode="wait">
        <motion.div
          className="image-grid"
          variants={containerVariants}
          initial="hidden"
          animate={imagesLoaded ? "visible" : "hidden"}
          key={activeCategory}
        >
          {initialCategories[activeCategory] &&
          initialCategories[activeCategory].length > 0 ? (
            initialCategories[activeCategory].map((imageObj, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={imageObj.imageUrl}
                  alt={`${activeCategory} photo ${index + 1}`}
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
              onClick={(e) => e.stopPropagation()}
              className="modal-image"
            />
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="instagram-icon">
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-icon"
          aria-label="Instagram Profile"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default LatestWork;
