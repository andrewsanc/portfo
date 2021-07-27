import React from "react";
import "./projects.css";
import resumeInfo from "../../resumeInfo";

const projects = resumeInfo.projects;

const Projects = () => {
  return (
    <div className='projects'>
      <div className='container'>
        <div className='col-sm-12'>
          <h2 className='heading'>Projects</h2>
          <div className='row row-evenly'>{renderProjectCards(projects)}</div>
        </div>
      </div>
    </div>
  );
};

const renderProjects = (projects) => {
  return projects.map((project, i) => {
    return (
      <div className='project-block shadow-large' key={i}>
        <div className='project-image'>
          <img src={project.projectImage} alt={project.imageAlt} />
        </div>
        <div className='project-info'>
          <h3>{project.title}</h3>
          <div className='project-tags'>{renderProjectTags(project.tags)}</div>
          <a href={project.repository}>View Project</a>
          {project.deployment && (
            <a href={project.deployment}>View Deployment</a>
          )}
        </div>
      </div>
    );
  });
};

const renderProjectCards = (projects) => {
  return projects.map((project, i) => {
    return (
      <div className='project-card shadow-large'>
        <h5 className='project-card-header'>{project.title}</h5>
        <div className='project-card-image'>
          <img src={project.projectImage} alt={project.imageAlt} />
        </div>
        <div className='project-card-container'>
          {renderProjectTags(project.tags)}
        </div>
        <div className='project-card-container-bottom'>
          <a href={project.repository}>View Project</a>
          {project.deployment && (
            <a href={project.deployment}>View Deployment</a>
          )}
        </div>
      </div>
    );
  });
};

const renderProjectTags = (tags) => {
  return tags.map((tag) => {
    return (
      <div key={tag} className='project-tag'>
        {tag}
      </div>
    );
  });
};

export default Projects;
