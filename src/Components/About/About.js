import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2 className="heading">About Me</h2>
          </div>
          <div className="col-sm-8">
            <p>
              <strong>Welcome! </strong>
              <span role="img">👋</span>
              <br />
              <br />
              Hi! I'm Andrew Sanchez. A Full-Stack Software Engineer who has
              experience with various Front End and Backend Technologies. The
              path that has led me to become a software engineer began when I
              was attending school at California State University, Monterey Bay.
              Throughout my time at CSUMB I've had a chance to explore
              everything in computer science; From exploring multiple
              programming languages to working with diverse
              frameworks/libraries. Since graduating I have had the chance to
              build and deploy various applications using the latest
              technologies. As an engineer, I'm always looking to learn new
              skill sets that allow me become a more versatile and knowledgeable
              software engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
