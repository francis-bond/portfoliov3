import React from 'react';
import weatherdash from '../assets/IMG2.png';
import './Portfolio.css'

export default function Portfolio(props) {
  return (
    <div className="mx-4">
      <h1 className="mt-2">Projects</h1>
      <div className="img imgShadow mt-2">
        <img className="imgImage" src={weatherdash} alt="Weather Dashboard"/>
      <div className="imgOverlay">
        <div className="imgTitle">Weather Dashboard</div>
        <p className="imgDescription">Describing things</p>
      </div>
      </div>
    </div>
  );
}
