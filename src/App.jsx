// App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(true), 2000);
    const bioTimer = setTimeout(() => setShowBio(true), 4000); 
    return () => {
      clearTimeout(timer);
      clearTimeout(bioTimer);
    };
  }, []);

  return (
    <div className="App">
      <Header />

      <Parallax pages={3} style={{ top: '0', left: '0', width: '100%', height: '100vh' }}>
        <ParallaxLayer offset={0} speed={0.15} style={{ backgroundImage: `url(/assets/marssky.jpg)`, backgroundSize: 'cover', height: '100vh' }} className="animate-glow" />

        {/* S */}
        <div style={{ position: 'absolute', top: '10%', left: '57%', transform: 'translateX(-50%)', zIndex: 1000 }}>
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

        <div style={{ position: 'fixed', top: '15%', left: '60%', transform: 'translateX(-50%)', zIndex: 1000 }}>
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

        <ParallaxLayer offset={0.95} speed={0.4} style={{ backgroundImage: `url(/assets/marsplanet.jpg)`, backgroundSize: 'cover', height: '100vh' }} />

        <ParallaxLayer offset={1.2} speed={0.4}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="content"
          >
            <h2 className="gradient-text-portfolio" style={{ textAlign: 'center', marginBottom: '10px', fontSize: '2em' }}>Portfolio</h2>
            <Portfolio id="Portfolio" />
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.47} speed={0.2} style={{ backgroundImage: `url(/assets/marsoasis2.png)`, backgroundSize: 'cover', backgroundRepeat: 'no repeat', height: '60%' }} />


        {/* Contact Section */}
        <ParallaxLayer offset={1.7} speed={0.5}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="content"
            style={{ marginTop: '500px' }} 
          >
            <h2 className="gradient-text-portfolio" style={{ textAlign: 'center', marginBottom: '10px', fontSize: '2em' }}>Contact</h2>
            <Contact />
          </motion.div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
