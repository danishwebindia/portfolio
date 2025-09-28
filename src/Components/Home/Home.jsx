import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";
import "./Home.css";
export const Home = () => {
  return (
    <div className="header">
      <motion.div
      className="logo"
      animate={{
        y: [0, -5, 0],       // slight vertical bounce
        opacity: [0.8, 1, 0.8], // gentle fade
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      style={{ display: "inline-block" }}
    >
      Frontend Developer
    </motion.div>
      <div className="navigation">
        <ul className="nav-links">
          <motion.li className="nav-link" whileHover={{ scale: 1.1, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}><AnchorLink className="anchar-link" href="">Home</AnchorLink></motion.li>
          <motion.li className="nav-link" whileHover={{ scale: 1.1, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}><AnchorLink className="anchar-link" href="#about">About</AnchorLink></motion.li>
          <motion.li className="nav-link" whileHover={{ scale: 1.1, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}><AnchorLink className="anchar-link" href="#services">Services</AnchorLink></motion.li>
          <motion.li className="nav-link" whileHover={{ scale: 1.1, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}><AnchorLink className="anchar-link" href="#works">Works</AnchorLink></motion.li>
          <motion.li className="nav-link" whileHover={{ scale: 1.1, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}><AnchorLink className="anchar-link" href="#contact">Contact</AnchorLink></motion.li>
        </ul>
      </div>
    </div>
  );
};
