import React, { useState } from "react";
import { useImageContext } from "../../Context/ImagesContext";
import "./AdminPanel.css";

const AdminPanel = () => {
  const { images, addImage, removeImage } = useImageContext();
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteImageId, setDeleteImageId] = useState(null);
  const [deleteCategory, setDeleteCategory] = useState(null);

  const categories = [
    "Right Images",
    "Left Images",
    "Baby Shoot",
    "Engagement",
    "Wedding",
    "Haldi", // Add Haldi category
    "Prewedding", // Add Prewedding category
  ];

  const handleRemoveImage = (id, category) => {
    setIsDeleting(true);
    setDeleteImageId(id);
    setDeleteCategory(category);
  };

  const confirmDelete = () => {
    if (deleteImageId && deleteCategory) {
      removeImage(deleteImageId, deleteCategory);
      setIsDeleting(false);
      setDeleteImageId(null);
      setDeleteCategory(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleting(false);
    setDeleteImageId(null);
    setDeleteCategory(null);
  };

  const handleAddImage = () => {
    if (!newImageUrl.trim()) {
      alert("Please provide a valid image URL.");
      return;
    }

    const isValidUrl = /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(newImageUrl);
    if (!isValidUrl) {
      alert("Please provide a valid image URL.");
      return;
    }

    if (!newCategory) {
      alert("Please select a category.");
      return;
    }

    addImage(newImageUrl, newCategory);
    setNewImageUrl("");
    setNewCategory("");
  };

  const handleRedirect = () => {
    window.open("https://www.postimages.org/", "_blank");
  };

  return (
    <div className="admin-panel">
      <h2 className="admin-panel-title">Admin Panel</h2>

      <div className="add-image-section">
        <h3>Add New Image</h3>
        <input
          type="text"
          placeholder="Image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={handleAddImage}>Add Image</button>
      </div>

      <h3>All Images</h3>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h4>{category}</h4>
          <div className="image-gallery">
            {(images[category] || []).map((image) => (
              <div key={image.id} className="image-item">
                <img src={image.imageUrl} alt={`${category}`} />
                <button onClick={() => handleRemoveImage(image.id, category)}>
                  Remove
                </button>
              </div>
            ))}
            {(images[category] || []).length === 0 && (
              <p className="no-images">No images in this category</p>
            )}
          </div>
        </div>
      ))}

      {isDeleting && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this image?</p>
          <div className="dialog-buttons">
            <button onClick={confirmDelete}>Yes, Delete</button>
            <button onClick={cancelDelete}>Cancel</button>
          </div>
        </div>
      )}

      <div className="tool-section">
        <h3>Upload Tools</h3>
        <button onClick={handleRedirect}>Go to Post Images Website</button>
      </div>
    </div>
  );
};

export default AdminPanel;
