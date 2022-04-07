import React from 'react';
import Resumepdf from '../assets/Resume.pdf'

export default function Resume() {
  return (
    <div className="mx-4">
      <h1 className="mt-1">Resume</h1>
      <a className="nav-item nav-link mt-1" href={Resumepdf} target="_blank" rel="noreferrer"
        download="FrancisBondResume">Download Resume</a>
    </div>
  );
}
