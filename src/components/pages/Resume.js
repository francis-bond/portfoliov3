import React from 'react';
import Resumepdf from '../assets/Resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a className="nav-item nav-link" href={Resumepdf} target="_blank" rel="noreferrer"
        download="FrancisBondResume">Download Resume</a>
    </div>
  );
}
