import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import "./main.css";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Main = () => {
  return (
    <div className='main'>
      <About />
      <div className='background-alt'>
        <Skills />
      </div>
      <Education />
      {/* <div className="background-alt">
        <Experience />
      </div> */}
      <div className='background-alt'>
        <Projects />
      </div>
      <Contact />
    </div>
  );
};

export default Main;
