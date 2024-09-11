import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Weather Dashboard', image: './src/assets/images/weatherdashboard.png', deployedLink: 'https://boamarant.github.io/Weather-Dashboard/', githubLink: 'https://github.com/boamarant/Weather-Dashboard', titleClass: 'title-weather-dashboard' },
    { title: 'Note Taker Application', image: './src/assets/images/note-taker-application.png', deployedLink: 'https://note-taker-application-6lpo.onrender.com/', githubLink: 'https://github.com/boamarant/Note-Taker-Application', titleClass: 'title-note-taker' },
    { title: 'PWA Text Editor', image: './src/assets/images/texteditor.png', deployedLink: 'https://pwa-text-editor-project.onrender.com/', githubLink: 'https://github.com/boamarant/PWA-Text-Editor-Project', titleClass: 'title-pwa-text-editor' },
    { title: 'Personal Blog App', image: './src/assets/images/blogapp.png', deployedLink: 'https://boamarant.github.io/Personal-Blog-App/', githubLink: 'https://github.com/boamarant/Personal-Blog-App', titleClass: 'title-personal-blog' },
    { title: 'Melodybase', image: './src/assets/images/melodybase.png', deployedLink: 'https://jocoso.github.io/melodybase/', githubLink: 'https://github.com/jocoso/melodybase', titleClass: 'title-melodybase' },
    { title: 'Task Board Application', image: './src/assets/images/taskboard.png', deployedLink: 'https://boamarant.github.io/Module-5-Challenge/', githubLink: 'https://github.com/boamarant/Module-5-Challenge', titleClass: 'title-task-board' },
  ];

  return (
    <section>
      <h2 className="pageh2">Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;