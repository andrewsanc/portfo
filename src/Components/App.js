import React from "react";
import Main from "./Main";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";

export default function App() {
  return (
    <div className='ui container'>
      <Main />
      <About />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
}
