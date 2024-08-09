// App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import marsSky from './assets/marssky.jpg';
import marsPlanet from './assets/marsplanet.jpg';
import dopemarspic from './assets/marsmission.jpg';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('About Me');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section.toLowerCase().replace(' ', '-')).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      <Parallax pages={3} style={{ top: '0', left: '0', width: '100%', height: '100vh' }}>
        <ParallaxLayer offset={0} speed={0.15} style={{ backgroundImage: `url(${marsSky})`, backgroundSize: 'cover', height: '100vh' }} className="animate-glow" />

        <ParallaxLayer offset={0} speed={0.1} className="flex justify-center items-center">
          <motion.h1
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="gradient-text"
          >
            Journey with me
          </motion.h1>
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={0.3} className="flex justify-center items-start">
          <AnimatePresence>
            {showWelcome && (
              <motion.h2
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="gradient-text-welcome"
              >
                Welcome to my portfolio
              </motion.h2>
            )}
          </AnimatePresence>
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={0.3} className="flex justify-center items-start">
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="bio-box p-4 rounded-lg text-center max-w-xs font-normal bg-gradient-to-r from-red-500 to-white"
              >
                <p>Your bio text goes here. Briefly introduce yourself and your professional background.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} speed={0.4} style={{ backgroundImage: `url(${marsPlanet})`, backgroundSize: 'cover', height: '100vh' }} />

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

        <ParallaxLayer offset={1.47} speed={0.2} style={{ backgroundImage: `url(${dopemarspic})`, backgroundSize: '100%', height: '100%' }} />
      </Parallax>
      <Footer />
    </div>
  );
}

export default App;
