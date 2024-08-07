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
import marsSky from './assets/marssky.jpg';
import marsPlanet from './assets/marsplanet.jpg';
import dopemarspic from './assets/marsmission.jpg'; // Import the new image
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('About Me');

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section.toLowerCase().replace(' ', '-')).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      <Parallax pages={3} style={{ top: '0', left: '0', width: '100%', height: '100vh' }}>
        {/* Mars Sky Layer */}
        <ParallaxLayer offset={0} speed={0.15} style={{ backgroundImage: `url(${marsSky})`, backgroundSize: 'cover', height: '100vh' }} className="animate-glow" />

        {/* Gradient Text Animation Layer */}
        <ParallaxLayer offset={0} speed={0.1} className="gradient-text-layer">
          <motion.h1
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="gradient-text"
          >
            Journey with me
          </motion.h1>
        </ParallaxLayer>

        {/* Mars Planet Layer */}
        <ParallaxLayer offset={0.95} speed={0.4} style={{ backgroundImage: `url(${marsPlanet})`, backgroundSize: 'cover', height: '100vh' }} />

        {/* Content Layer */}
        <ParallaxLayer offset={1} speed={0.2}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="content"
          >
            <AboutMe id="about-me" />
            <Portfolio id="portfolio" />
            <Contact id="contact" />
            <Resume id="resume" />
          </motion.div>
        </ParallaxLayer>

        {/* Astronaut on Mars Layer */}
        <ParallaxLayer offset={2} speed={0.1} style={{ backgroundImage: `url(${dopemarspic})`, backgroundSize: 'cover', height: '100vh' }} />
      </Parallax>
      <Footer />
    </div>
  );
}

export default App;
