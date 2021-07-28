import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='col-sm-12'>
          {/* <h2 className='heading'>About Me</h2> */}
          <div className='row row-evenly'>
            <div>
              <h2 className='heading'>
                Welcome! <span role='img'>👋</span>
              </h2>
              <br />
              I'm Andrew Sanchez, a Software Engineer who has experience with a
              variety of frontend and backend technologies. My path began when I
              took my first CS course in Java and was instructed to build my
              first application. Since then, I've had a chance to explore
              everything in computer science; From doing data analysis with
              Python to building beautiful user interfaces with React to
              building scalable APIs with Node.js/Express. As an engineer, I'm
              always looking to learn new skill sets that allow me to become a
              more versatile and knowledgeable software engineer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
