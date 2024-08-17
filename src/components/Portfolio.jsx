import React from 'react';
import { motion } from 'framer-motion';

function Portfolio() {
  const projects = [
    { title: 'Project 1', image: 'project1.jpg', deployed: '#', github: '#' },
    { title: 'Project 2', image: 'project2.jpg', deployed: '#', github: '#' },
    { title: 'Project 3', image: 'project3.jpg', deployed: '#', github: '#' },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          whileHover={{ rotateY: 180 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <div className="project-card-inner">
            <div className="project-card-front">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-back">
              <a href={project.deployed}>Deployed</a>
              <a href={project.github}>GitHub Repo</a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Portfolio;
