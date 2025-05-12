import React, { useState } from "react";
import { useImageContext } from "../../Context/ImagesContext";
import "./AdminPanel.css";

const AdminPanel = () => {
  const { images, videos, addImage, removeImage, addVideo, removeVideo } =
    useImageContext();
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState(""); // For adding videos
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteImageId, setDeleteImageId] = useState(null);
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [deleteVideoUrl, setDeleteVideoUrl] = useState(null); // For deleting videos

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
    } else if (deleteVideoUrl) {
      removeVideo(deleteVideoUrl);
      setIsDeleting(false);
      setDeleteVideoUrl(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleting(false);
    setDeleteImageId(null);
    setDeleteCategory(null);
    setDeleteVideoUrl(null);
  };

  const handleAddImage = () => {
    if (!newImageUrl.trim()) {
      alert("Please provide a valid image URL.");
      return;
    }

    // Validate URL (basic check for image extension)
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

  const handleAddVideo = () => {
    if (!newVideoUrl.trim()) {
      alert("Please provide a valid YouTube video URL.");
      return;
    }

    const isValidUrl =
      /^(https:\/\/www\.youtube\.com\/watch\?v=[a-zA-Z0-9_-]+|https:\/\/youtu\.be\/[a-zA-Z0-9_-]+)(\?[\S]+)?$/.test(
        newVideoUrl
      );
    if (!isValidUrl) {
      alert("Please provide a valid YouTube URL.");
      return;
    }

    addVideo(newVideoUrl);
    setNewVideoUrl("");
  };

  const handleRedirect = () => {
    window.open("https://www.postimages.org/", "_blank");
  };

  return (
    <div className="admin-panel">
      <h2 className="admin-panel-title">Admin Panel</h2>

      {/* Add New Image Section */}
      <div className="add-image-section">
        <h3 className="add-image-title">Add New Image</h3>
        <input
          type="text"
          className="image-url-input"
          placeholder="Image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
        />
        <select
          className="image-category-select"
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
        <button className="add-image-btn" onClick={handleAddImage}>
          Add Image
        </button>
      </div>

      <h3 className="all-images-title">All Images</h3>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h4 className="category-title">{category}</h4>
          <div className="image-gallery">
            {(images[category] || []).map((image) => (
              <div key={image.id} className="image-item">
                <img
                  src={image.imageUrl}
                  alt={`${category}`}
                  className="image-thumbnail"
                />
                <button
                  className="remove-image-btn"
                  onClick={() => handleRemoveImage(image.id, category)}
                >
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

      {/* Add New Video Section */}
      <div className="add-video-section">
        <h3 className="add-video-title">Add New Video (YouTube)</h3>
        <input
          type="text"
          className="video-url-input"
          placeholder="YouTube Video URL"
          value={newVideoUrl}
          onChange={(e) => setNewVideoUrl(e.target.value)}
        />
        <button className="add-video-btn" onClick={handleAddVideo}>
          Add Video
        </button>
      </div>

      <h3 className="all-videos-title">All Videos</h3>
      <div className="video-gallery">
        {videos.length === 0 ? (
          <p className="no-videos">No videos to show</p>
        ) : (
          videos.map((videoUrl, index) => (
            <div key={index} className="video-item">
              <iframe
                src={videoUrl}
                title={`Teaser Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
              <button
                className="remove-video-btn"
                onClick={() => setDeleteVideoUrl(videoUrl)}
              >
                Remove Video
              </button>
            </div>
          ))
        )}
      </div>

      {/* Confirmation Dialog for Deletion */}
      {isDeleting && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this?</p>
          <div className="dialog-buttons">
            <button className="confirm-btn" onClick={confirmDelete}>
              Yes, Delete
            </button>
            <button className="cancel-btn" onClick={cancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="tool-section">
        <h3 className="tool-title">Upload Tools</h3>
        <button className="redirect-btn" onClick={handleRedirect}>
          Go to Post Images Website
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
