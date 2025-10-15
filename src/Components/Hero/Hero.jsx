import React from 'react';
import { motion } from "motion/react";
import profile_img from '../../assets/danish.png';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        {/* <motion.img 
        initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        src={profile_img} alt="" className='banner'  /> */}
        <h1><span>I'm Danish Khan,</span> frontend developer based in India.</h1>
        <h2>I am a frontend developer from Delhi, India, with 10 years of experience, having worked on numerous projects across different domains.</h2>
        <div className="hero-buttons">
            <motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} href="#">Connect with me</motion.a>
            <motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} href="#">My resume</motion.a>
        </div>
    </div>
  )
}

export default Hero