import React from 'react';
import Resumepdf from '../assets/Resume.pdf'
import "./Resume.css"

export default function Resume() {
  return (
    <div className="mx-4">
      <h1 className="mt-2">Resume</h1>
      <a className="nav-item nav-link mt-1" href={Resumepdf} target="_blank" rel="noreferrer"
        download="FrancisBondResume">Download Resume</a>
      <h3 className="mx-5">Skills</h3>
      <ul className="skills mx-5">
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>JQuery</li>
        <li>MySQL</li>
        <li>SQL</li>
        <li>Bootstrap</li>
      </ul>
    </div>
  );
}
