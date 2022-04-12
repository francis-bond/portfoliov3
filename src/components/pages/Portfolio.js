import React from 'react';
import weatherdash from '../assets/IMG2.png';
import './Portfolio.css'

const projects = [
  {
    id: 1,
    name: "Weather Dashboard",
    imageSource: "assets/IMG2.png",
    description: "View Weather forecast of your city",
    githubLink: "https://github.com/francis-bond/weatherdashboard",
    deployedLink: "https://francis-bond.github.io/weatherdashboard/"
  },
  {
    id: 2,
    name: "Note Taker",
    imageSource: "assets/IMG.png",
    description: "Take notes and save them to your browser",
    githubLink: "https://github.com/francis-bond/notetaker",
    deployedLink: "https://francis-bond.github.io/notetaker/"
  },
  {
    id: 3,
    name: "Gif-initions",
    imageSource: "assets/Gif-initions.png",
    description: "Learn new words with Gif association",
    githubLink: "https://github.com/leoguerr/Gif-initions",
    deployedLink: "https://leoguerr.github.io/Gif-initions/"
  },
  {
    id: 4,
    name: "React Portfolio",
    imageSource: "assets/reactportfolio.png",
    description: "Display of my work created with React",
    githubLink: "https://github.com/francis-bond/portfoliov3",
    deployedLink: ""
  }
];

export default function Portfolio() {
  return (
    <div className="mx-4">
      <h1 className="mt-2">Projects</h1>
      <div className="row justify-content-around">
      {projects.map(project => (
        <div className="img imgShadow mt-2 col-12 col-sm-5" key={project.id}>
        <img className="imgImage img-fluid" src={require(`../${project.imageSource}`)} alt={project.name}/>
      <a href={project.deployedLink} target="_blank" rel="noreferrer"><div className="imgOverlay">
        <div className="imgTitle">{project.name}</div>
        <p className="imgDescription">{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noreferrer"><img className="github" src={require(`../assets/githublogo.png`)} width="10" height="10"></img></a>
      </div></a>
      </div>
      ))}  
      </div>
    </div>
  );
}
