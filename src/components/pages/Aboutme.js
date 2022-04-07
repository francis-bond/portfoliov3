import React from 'react'
import headshot from '../assets/IMG_2299-2.jpg'
import './Aboutme.css'

export default function Aboutme() {
  return (
    <div className="mx-4">
      <h1 className="mt-2">About Me</h1>
      <div>
        <img src={headshot} alt="Headshot of Francis Bond" height="200px"
          className="rounded mt-1"></img>
      </div>
      <div className="col-9 mt-4 mx-5">
      <p>
        Welcome to my Portfolio! My name is Francis Bond and I have recently become a web developer.
        Full stack web developer with a Certificate in Full Stack Web Development from the
        University of Texas Bootcamp, where I gained skills in JavaScript, CSS, HTML and React.js. I
        am a detailed oriented coder who has contributed to past projects by finding ways to write
        efficient code. For example, I helped classmates identify bugs in their code and was
        consistently approached by project teammates to help break down steps needed to get our code
        functional.
      </p>
      <p>
        My last project was an interactive image annotator tool for scholars to share
        information. In our team of five, I was responsible for learning and implementing a new
        technology to upload images and store them to our database. A tool to easily share
        information through annotations that will be used in a meeting of scholars. I’m excited to
        leverage my skills and knowledge as part of a team to build and improve applications.
      </p>
      </div>
    </div>
  );
}
