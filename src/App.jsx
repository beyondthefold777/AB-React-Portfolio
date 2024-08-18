// App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import marsSky from './assets/marssky.jpg';
import marsPlanet from './assets/marsplanet.jpg';
import dopemarspic from './assets/marsmission.jpg';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(true), 2000);
    const bioTimer = setTimeout(() => setShowBio(true), 4000); // Bio appears after welcome and journey animations
    return () => {
      clearTimeout(timer);
      clearTimeout(bioTimer);
    };
  }, []);

  return (
    <div className="App">
      <Header />

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

        {/* Stationary Welcome Text and Bio Description */}
        <div style={{ position: 'fixed', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
          <AnimatePresence>
            {showWelcome && (
              <motion.h2
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="gradient-text-welcome"
              >
                Welcome to my portfolio
              </motion.h2>
            )}
          </AnimatePresence>
        </div>

        <div style={{ position: 'fixed', top: '20%', left: '55%', transform: 'translateX(-50%)', zIndex: 1000 }}>
  <AnimatePresence>
    {showBio && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ color: '#b8390b', fontSize: '1.2em' }}
      >
        Explore the depths of the coding world with me! My name is Anthony Bell I'm a recent grad of UCF MERN Stack Bootcamp. My goals are to grow from learning everything about your company to creating masterful applications that solve complex issues, back businesses and change the world let's do it!
      </motion.p>
    )}
  </AnimatePresence>
</div>

        <ParallaxLayer offset={0.95} speed={0.4} style={{ backgroundImage: `url(${marsPlanet})`, backgroundSize: 'cover', height: '100vh' }} />

        <ParallaxLayer offset={0.8} speed={0.2}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="content"
          >
            <h2 style={{ color: '#b8390b', textAlign: 'center', marginBottom: '50px' }}>Portfolio</h2>
            <Portfolio id="portfolio" />
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.47} speed={0.2} style={{ backgroundImage: `url(${dopemarspic})`, backgroundSize: '100%', height: '100%' }} />
      </Parallax>
      <Footer />
    </div>
  );
}

export default App;
