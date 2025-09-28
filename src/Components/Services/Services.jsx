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
                <div className="service-body">Clean, responsive, and user-friendly designs tailored for all devices.</div>
                <ul>
                    <li>Figma to Code</li>
                    <li>HTML, CSS, JavaScript</li>
                </ul>
            </motion.div>
            <motion.div className="service" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <div className="service-header">Frontend Development</div>
                <div className="service-body">Building scalable, modern interfaces with powerful frameworks.</div>
                <ul>
                    <li>React, Next.js, Angular</li>
                </ul>
            </motion.div>
            <motion.div className="service" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <div className="service-header">Hybrid Apps</div>
                <div className="service-body">Cross-platform mobile apps with smooth performance and UI.</div>
                <ul>
                    <li>React Native, Ionic</li>
                </ul>
            </motion.div>
            <motion.div className="service" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <div className="service-header">Accessibility</div>
                <div className="service-body">Creating inclusive websites that meet accessibility standards.</div>
                <ul>
                    <li>ARIA labels, Alt tags</li>
                </ul>
            </motion.div>
            <motion.div className="service" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <div className="service-header">SEO</div>
                <div className="service-body">Optimized websites for higher visibility and better rankings.</div>
                <ul>
                    <li>Title, Meta tags, Alt tags</li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Services