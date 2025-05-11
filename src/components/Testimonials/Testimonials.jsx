import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Chiranjeevi",
    feedback:
      "100% satisfied! Amazing candid pics, committed to delivering more than expected. Experienced crew with top equipment. Highly recommended for capturing good moments!",
  },
  {
    name: "Saketh",
    feedback:
      "Beautiful photos, beautiful candid pics, beautiful prewedding shoot and everything is beautiful.. Thanx for making our memories more more moreee beautiful.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>
        What our customers say
        <br />
        about us
      </h2>
      <div className="testimonial-list">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <p className="feedback">{t.feedback}</p>
            <p className="name">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
