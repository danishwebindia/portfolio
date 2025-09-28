import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";
import "./Home.css";
export const Home = () => {
  return (
    <div className="header">
      <div className="logo">Frontend Developer</div>
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
