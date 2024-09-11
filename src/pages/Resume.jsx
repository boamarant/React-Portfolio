import React from 'react';
import '../index.css'; // Import the CSS file

function Resume() {
  return (
    <section className="resume-container">
      <h2 className="pageh2">Resume</h2>
      <p>
        <a href="./src/assets/resume/Bo_Amarant_Resume.pdf" download>Download My Resume</a>
      </p>
      <h3 className="black">Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NodeJS</li>
        <li>MongoDB</li>
        <li>SQL</li>
      </ul>
    </section>
  );
}

export default Resume;