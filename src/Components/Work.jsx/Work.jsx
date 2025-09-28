import React from 'react';
import { motion } from "motion/react";
import './Work.css';
import project_jazi from '../../assets/jazi.png';
import project_img from '../../assets/project-1.png';
import project_tst from '../../assets/TST.png';
import project_lexi from '../../assets/Lexibuds.png';
import project_glass from '../../assets/glass.png';
import project_crystal from '../../assets/crystal.png';

const Work = () => {
  return (
    <div id='works' className="section">
    <h1>My latest work</h1>
    <div className="projects">
        <motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="project">
            <a href="https://jazi.com/" target="_blank">
            <img src={project_jazi} alt="" /></a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="project">
            <a href="https://manage-landing-page-eta-beryl.vercel.app/" target="_blank">
            <img src={project_img} alt="" /></a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="project">
            <a href="http://timessquaretech.nyc/" target="_blank">
            <img src={project_tst} alt="" /></a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="project">
            <a href="https://lexibuds.com/login" target="_blank">
            <img src={project_lexi} alt="" /></a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="project">
            <a href="https://sevesglassblockinc.com/" target="_blank">
            <img src={project_glass} alt="" /></a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="project">
            <a href="https://www.crystalvconsultants.com/" target="_blank">
            <img src={project_crystal} alt="" /></a>
        </motion.div>
        
    </div>
    </div>
  )
}

export default Work