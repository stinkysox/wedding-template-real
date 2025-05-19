import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import "./OurServices.css";

const services = [
  {
    title: "Wedding Photography",
    image: "https://i.postimg.cc/jd90NNYC/VNU04514.jpg",
  },
  {
    title: "Pre-wedding Photography",
    image: "https://i.postimg.cc/Jhv1zJ6N/1-2.jpg",
  },

  {
    title: "Baby Shoot",
    image:
      "https://i.pinimg.com/736x/47/3d/56/473d565e39596766d50e37e4c689abd2.jpg",
  },
];

const OurServices = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const toggleZoom = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <div className="our-services" id="services">
      <p className="subheading">OUR SERVICES</p>
      <h2 className="main-heading">
        Where every <span>picture</span> <br /> tells a story
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={service.image}
              alt={service.title}
              onClick={() => toggleZoom(index)}
              className={zoomedIndex === index ? "zoomed" : ""}
            />
            <p>{service.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
