import React from "react";
import "./projects.css";
import resumeInfo from "../../resumeInfo";

const projects = resumeInfo.projects;

const Projects = () => {
  return (
    <div className='projects'>
      <h2 className='heading'>Projects</h2>
      {renderProjects(projects)}
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
