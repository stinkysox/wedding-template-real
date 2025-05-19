import React, { useState } from "react";
import "./FormSection.css";
import Navbar from "../Navbar/Navbar";

const FormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    message: "",
    social: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello! 👋
I'm ${formData.fullName}.
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📅 Event Date: ${formData.date}
📍 Event Location: ${formData.location}
📝 Message: ${formData.message}
🔗 Social Profile: ${formData.social}

Excited to connect with you!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919535440990?text=${encodedText}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Your Full Name *"
          required
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address *"
          required
          onChange={handleChange}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number *"
          required
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          placeholder="Event Date"
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Event Location"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Do you want to say something?"
          onChange={handleChange}
        />
        <input
          name="social"
          placeholder="Share your social media profile"
          onChange={handleChange}
        />

        <button className="submit-btn" type="submit">
          Send via WhatsApp
        </button>
      </form>
    </>
  );
};

export default FormSection;
