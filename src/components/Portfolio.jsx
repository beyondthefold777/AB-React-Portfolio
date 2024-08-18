import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Portfolio() {
  const allProjects = [
    { title: 'Project 1', image: 'hvac2go.png', deployed: '#', github: '#' },
    { title: 'Project 2', image: 'hitech.png', deployed: '#', github: '#' },
    { title: 'Project 3', image: 'blogtreepoetry.png', deployed: '#', github: '#' },
    { title: 'Project 4', image: 'notetaker.png', deployed: '#', github: '#' },
    { title: 'Project 5', image: 'project5.jpg', deployed: '#', github: '#' },
    { title: 'Project 6', image: 'project6.jpg', deployed: '#', github: '#' },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const pageCount = Math.ceil(allProjects.length / projectsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pageCount);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pageCount) % pageCount);
  };

  const currentProjects = allProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
              </div>
              <div className="project-card-back">
                <a href={project.deployed}>Deployed App</a>
                <a href={project.github}>GitHub Repo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrev} className="nav-button prev" style={{ left: '10px' }}>
          <span className="arrow left"></span>
        </button>
        <button onClick={handleNext} className="nav-button next" style={{ right: '10px' }}>
          <span className="arrow right"></span>
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
