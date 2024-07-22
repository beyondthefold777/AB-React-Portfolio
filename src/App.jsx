import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to my Portfolio!
      </motion.h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="box"
      />
    </div>
  );
}

export default App;
