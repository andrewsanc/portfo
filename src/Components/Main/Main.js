import React from 'react';
import About from '../About/About'
import Skills from '../Skills/Skills'
import './main.css';

const Main = () => {
  return (
    <div className="main">
      <About />
      <div className="background-alt">
        <Skills />
      </div>
    </div>
  );
}
 
export default Main;