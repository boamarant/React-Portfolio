import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    // Fill these out later
    { title: 'Project 1', image: '/path/to/image1.jpg', deployedLink: '#', githubLink: '#' },
    { title: 'Project 2', image: '/path/to/image2.jpg', deployedLink: '#', githubLink: '#' },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}

export default Portfolio;