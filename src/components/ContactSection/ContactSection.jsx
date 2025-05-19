import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/form");
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">
        Let’s talk about your <br /> event!
      </h2>

      <button className="book-now-btn" onClick={handleBookNow}>
        Book Now
      </button>

      <div className="icon-grid">
        <a
          href="mailto:pramodphotography641@gmail.com"
          className="icon-btn email"
        >
          <MdEmail size={30} />
        </a>
        <a
          href="https://www.youtube.com/@pramodphotography-xe9gy"
          className="icon-btn youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} />
        </a>
        <a
          href="https://www.instagram.com/pramod.photogrphy/?igsh=MXVuM2N1eW9qOTgyaw%3D%3D#"
          className="icon-btn instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://wa.me/919535440990"
          className="icon-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>

      <p className="contact-text">+91 95354 40990</p>
    </div>
  );
};

export default ContactSection;
