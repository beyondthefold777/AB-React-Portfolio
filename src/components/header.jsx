// components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Header({ activeSection, onNavClick }) {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header>
      <h1>Anthony Bell</h1>
      <nav>
        {sections.map(section => (
          <motion.a
            key={section}
            href={`#${section.toLowerCase().replace(' ', '-')}`}
            onClick={() => onNavClick(section)}
            className={activeSection === section ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {section}
          </motion.a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
