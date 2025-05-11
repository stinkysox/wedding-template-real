import React from "react";
import "./Navbar.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <section className="navbar">
      {/* Animate h2 */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Wit Photography
      </motion.h2>

      {/* Social icons */}
      <div className="navbar-socials">
        <motion.div
          className="nav-social-media-icon instagram"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            rotate: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.4 },
          }}
        >
          <IoLogoInstagram />
        </motion.div>

        <motion.div
          className="nav-social-media-icon facebook"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{
            rotate: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.4 },
          }}
        >
          <FaFacebookF />
        </motion.div>
      </div>
    </section>
  );
};

export default Navbar;
