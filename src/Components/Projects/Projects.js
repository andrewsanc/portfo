import React from "react";
import "./projects.css";
import resumeInfo from "../../resumeInfo";

const projects = resumeInfo.projects;

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="heading">Projects</h2>
      {renderProjects(projects)}
    </div>
  );
};

const renderProjects = projects => {
  return projects.map((project, i) => {
    return (
      <div className="project-block shadow-large" key={i}>
        <div className="project-image">
          <img src={project.projectImage} alt={project.imageAlt} />
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.repository}>View Project</a>
          {project.deployment && (
            <a href={project.deployment}>View Deployment</a>
          )}
        </div>
      </div>
    );
  });
};

export default Projects;
