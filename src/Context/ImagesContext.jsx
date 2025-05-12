/* eslint-disable no-prototype-builtins */
import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ImageContext = createContext();

// Default categories with initial images
const initialCategories = {
  "Right Images": [],
  "Left Images": [],
  Engagement: [],
  "Baby Shoot": [],
  Wedding: [],
  Haldi: [],
  Prewedding: [],
};

// Convert a standard YouTube URL to an embeddable URL
const convertToEmbedUrl = (url) => {
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    return null;
  } catch (err) {
    return null;
  }
};

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState(() => {
    const storedImages = localStorage.getItem("gallery-images");
    const parsed = storedImages ? JSON.parse(storedImages) : {};

    const completeCategories = { ...initialCategories };
    for (const key in parsed) {
      completeCategories[key] = parsed[key];
    }
    return completeCategories;
  });

  const [videos, setVideos] = useState(() => {
    const storedVideos = localStorage.getItem("gallery-videos");
    return storedVideos ? JSON.parse(storedVideos) : [];
  });

  // Sync localStorage
  useEffect(() => {
    localStorage.setItem("gallery-images", JSON.stringify(images));
  }, [images]);

  useEffect(() => {
    localStorage.setItem("gallery-videos", JSON.stringify(videos));
  }, [videos]);

  // Image Functions
  const addImage = (imageUrl, category) => {
    if (!images.hasOwnProperty(category)) {
      alert("Invalid category selected.");
      return;
    }

    const newImage = {
      id: uuidv4(),
      imageUrl,
      category,
    };

    setImages((prevImages) => {
      const updatedCategoryImages = [...(prevImages[category] || []), newImage];
      return {
        ...prevImages,
        [category]: updatedCategoryImages,
      };
    });
  };

  const removeImage = (id, category) => {
    setImages((prevImages) => {
      const updatedCategoryImages = prevImages[category].filter(
        (img) => img.id !== id
      );
      return {
        ...prevImages,
        [category]: updatedCategoryImages,
      };
    });
  };

  // Video Functions
  const addVideo = (youtubeUrl) => {
    const embedUrl = convertToEmbedUrl(youtubeUrl);
    if (!embedUrl) {
      alert("Invalid YouTube URL.");
      return;
    }

    setVideos((prev) => [...prev, embedUrl]);
  };

  const removeVideo = (embedUrl) => {
    setVideos((prev) => prev.filter((url) => url !== embedUrl));
  };

  return (
    <ImageContext.Provider
      value={{ images, videos, addImage, removeImage, addVideo, removeVideo }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
export default ImageProvider;
