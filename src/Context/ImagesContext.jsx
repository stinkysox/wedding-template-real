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

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState(() => {
    const storedImages = localStorage.getItem("gallery-images");
    const parsed = storedImages ? JSON.parse(storedImages) : {};

    // Ensure all categories from initialCategories exist
    const completeCategories = { ...initialCategories };
    for (const key in parsed) {
      completeCategories[key] = parsed[key];
    }

    return completeCategories;
  });

  // Save images to localStorage when they change
  useEffect(() => {
    localStorage.setItem("gallery-images", JSON.stringify(images));
  }, [images]);

  // Add a new image to a specific category
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

  // Remove an image by its ID from its category
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

  return (
    <ImageContext.Provider value={{ images, addImage, removeImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
export default ImageProvider;
