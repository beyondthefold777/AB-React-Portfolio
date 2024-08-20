import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Header({ activeSection, onNavClick }) {
  const sections = ['About Me', 'Portfolio', 'Contact'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
      <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <motion.a
          href="#resume"
          onClick={() => onNavClick('Resume')}
          className={activeSection === 'Resume' ? 'active' : ''}
          whileHover={{ scale: 1.1, color: '#FFA500' }}
          whileTap={{ scale: 0.9 }}
        >
          Resume
        </motion.a>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="resume.pdf" download>Download</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
