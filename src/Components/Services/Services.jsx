import React from 'react';
import { motion } from "motion/react";
import './Services.css';

const Services = () => {
  return (
    <div id='services' className='section'>
        <h1>My Services</h1>
        <div className="services">
            <motion.div className="service" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <div className="service-header">Web Design</div>
                <div className="service-body">I design and develop clean, responsive interfaces that feel intuitive across devices</div>
                <ul>
                    <li>Figma to Code</li>
                    <li>HTML, CSS, JavaScript</li>
                </ul>
            </motion.div>
            <motion.div className="service" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <div className="service-header">Frontend Development</div>
                <div className="service-body">I design and develop clean, responsive interfaces that feel intuitive across devices.</div>
                <ul>
                    <li>React, NextJs, Angular</li>
                </ul>
            </motion.div>
            <motion.div className="service" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <div className="service-header">Hybrid App</div>
                <div className="service-body">I design and develop clean, responsive interfaces that feel intuitive across devices.</div>
                <ul>
                    <li>React native, Ionic</li>
                </ul>
            </motion.div>
            <motion.div className="service" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <div className="service-header">Accessability</div>
                <div className="service-body">I design and develop clean, responsive interfaces that feel intuitive across devices.</div>
                <ul>
                    <li>Aria-label, Alt tags</li>
                </ul>
            </motion.div>
            <motion.div className="service" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <div className="service-header">SEO</div>
                <div className="service-body">I design and develop clean, responsive interfaces that feel intuitive across devices.</div>
                <ul>
                    <li>Title, Meta tags, Alt tag</li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Services