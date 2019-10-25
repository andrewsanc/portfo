import React from 'react';
import './about.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2 className="heading">About Me</h2>
          </div>
          <div className="col-sm-8">
            <p>Welcome! <span role="img">👋</span>
              <br/>
              <br/>
              I'm Andrew Sanchez, a passionate individual about Computer Science and Software Development. 
              I grew up Hollister, CA and majored in Computer Science at California State University, Monterey Bay (CSUMB). 
              I enjoyed my time at CSUMB as it gave me foundational CS skills to dive into new technologies. 
              Today you can find me learning about new technologies, playing video games, and hanging out with my dog Luci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default About;