// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer>
      <motion.a
        href="https://github.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        GitHub
      </motion.a>
      <motion.a
        href="https://linkedin.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        LinkedIn
      </motion.a>
      <motion.a
        href="https://stackoverflow.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Stack Overflow
      </motion.a>
    </footer>
  );
}

export default Footer;
