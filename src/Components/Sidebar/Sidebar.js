import React from "react";
import "./sidebar.css";
import me from "../../static/me.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <img src={me} alt="me" />
        <h1>Andrew Sanchez</h1>
        <h2>Software Engineer</h2>
        <a
          href="https://drive.google.com/uc?export=download&id=1vf4npHAZn_8TiMlp0N3JgGVM1ycTmIfi"
          className="btn-rounded-white"
        >
          Download Resume
        </a>
        <ul className="social">
          <li>
            <a href="https://www.linkedin.com/in/andrewsanc">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/andrewsanc">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/druusanchez">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-overlay"></div>
    </div>
  );
};

export default Sidebar;
