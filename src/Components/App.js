import React from "react";
import Main from "./Main";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

export default function App() {
  return (
    <div className='ui container' style={{ marginBottom: "10px" }}>
      <Main />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
