import React from 'react';

function Project({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <p>
        <a href={project.deployedLink}>Deployed Application</a> | 
        <a href={project.githubLink}>GitHub Repository</a>
      </p>
    </div>
  );
}

export default Project;