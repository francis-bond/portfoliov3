import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="">
        <div className="card bg-dark text-white">
          <img className="card-img" src="public/Gif-initions.png" alt="Code Refractor"></img>
          <a href="https://leoguerr.github.io/Gif-initions/" target="_blank" rel="noreferrer">
          <div className ="card-img-overlay">
          <h5 className ="card-title">Gif-initions</h5>
          <p className ="card-text">An interactive application to learn vocabulary easily through
          the use of Gifs
          </p>
          </div>
          </a>
        </div>
        <div className="row justify-content-around">
          <div className="card w-45" style="width: 18rem;">
            <img className="card-img-top" src="Assets/images/IMG.png" alt="Notetaker Homepage"></img>
            <div className ="card-body lightblue">
            <h5 className ="card-title">Notetaker</h5>
            <p className ="card-text">Write and save notes in your browser.</p>
            <a href="https://fb-notetaker.herokuapp.com/" target="_blank" class ="btn dark" rel="noreferrer">View
            Project</a>
            </div>
          </div>
          <div className="card w-45" style="width: 18rem;">
            <img className="card-img-top" src="Assets/images/IMG2.png" alt="Weather Dashboard"></img>
            <div className ="card-body lightblue">
            <h5 className ="card-title">Weather Dashboard</h5>
            <p className ="card-text">An application that uses the weather API to show weather data
            by
            City</p>
            <a href="https://francis-bond.github.io/weatherdashboard/" target="_blank"
            className ="btn dark" rel="noreferrer">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
