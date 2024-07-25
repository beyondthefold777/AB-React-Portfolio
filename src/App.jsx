// App.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import marsSky from './assets/marssky.jpg';
import marsPlanet from './assets/marsplanet.jpg';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('About Me');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Cursor />
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <Parallax pages={2} style={{ top: '0', left: '0', width: '120%', height: '100vh' }}>
        <ParallaxLayer offset={0} speed={0.2} style={{ backgroundImage: `url(${marsSky})`, backgroundSize: 'cover', height: '90vh' }} />
        <ParallaxLayer offset={.95} speed={0.5} style={{ backgroundImage: `url(${marsPlanet})`, backgroundSize: 'cover', height: '90vh' }} />
        <ParallaxLayer offset={1} speed={0.5}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="content"
          >
            {activeSection === 'About Me' && <AboutMe />}
            {activeSection === 'Portfolio' && <Portfolio />}
            {activeSection === 'Contact' && <Contact />}
            {activeSection === 'Resume' && <Resume />}
          </motion.div>
        </ParallaxLayer>
      </Parallax>
      <Footer />
    </div>
  );
}

export default App;
