import React from 'react';
import { motion } from 'framer-motion';

function Header({ activeSection, onNavClick }) {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header className="navbar">
      {sections.map(section => (
        <motion.a
          key={section}
          href={`#${section.toLowerCase().replace(' ', '-')}`}
          onClick={() => onNavClick(section)}
          className={activeSection === section ? 'active' : ''}
          whileHover={{ scale: 1.1, color: '#FFA500' }}
          whileTap={{ scale: 0.9 }}
        >
          {section}
        </motion.a>
      ))}
    </header>
  );
}

export default Header;
