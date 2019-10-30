import React from 'react';
import About from '../About/About'
import Skills from '../Skills/Skills'
import './main.css';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';

const Main = () => {
  return (
    <div className="main">
      <About />
      <div className="background-alt">
        <Skills />
      </div>
      <Education />
      <div className="background-alt">
        <Experience />
      </div>
    </div>
  );
}
 
export default Main;