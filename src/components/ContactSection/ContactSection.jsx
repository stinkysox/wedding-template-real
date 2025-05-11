import React from "react";
import { MdEmail } from "react-icons/md";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">
        Lets talk about your <br /> event!
      </h2>

      <button className="book-now-btn">Book Now</button>

      <div className="icon-grid">
        <a href="mailto:booknow@vjrishiphotography" className="icon-btn email">
          <MdEmail size={30} />
        </a>
        <a href="#" className="icon-btn youtube">
          <FaYoutube size={30} />
        </a>
        <a href="#" className="icon-btn instagram">
          <FaInstagram size={30} />
        </a>
        <a href="#" className="icon-btn whatsapp">
          <FaWhatsapp size={30} />
        </a>
      </div>

      <p className="contact-text">booknow@vjrishiphotography</p>
      <p className="contact-text">+91 7659988244</p>
    </div>
  );
};

export default ContactSection;
