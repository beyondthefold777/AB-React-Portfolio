// components/AboutMe.jsx
import React from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <section id="about-me">
      <motion.img
        src="avatar.jpg"
        alt="Developer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        ill write a bio here soon
      </motion.p>
    </section>
  );
}

export default AboutMe;
