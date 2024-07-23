// components/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Portfolio() {
  const projects = [
    { title: 'Project 1', image: 'project1.jpg', deployed: '#', github: '#' },
    { title: 'Project 2', image: 'project2.jpg', deployed: '#', github: '#' },
   
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.deployed}>Deployed App</a>
          <a href={project.github}>GitHub Repo</a>
        </motion.div>
      ))}
    </section>
  );
}

export default Portfolio;
