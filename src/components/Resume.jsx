// components/Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <section id="resume">
      <motion.a
        href="resume.pdf"
        download
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Download Resume
      </motion.a>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        {/* Add more proficiencies as needed */}
      </motion.ul>
    </section>
  );
}

export default Resume;
