import React from 'react';
import './skills.css'
import resumeInfo from '../../resumeInfo';

const technologies = resumeInfo.technology.languages
console.log(technologies)

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2 className="heading">Technologies</h2>
          </div>
          <div className="col-sm-8">
            <ul className="technology">
              {renderTechnologies(technologies)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderTechnologies = (technologies) => {
  return technologies.map(tech => {
    return (
      <li className="item">
        <img src={tech.imageUrl} alt={tech.alt} />
        <span>{tech.title}</span>
      </li>
    )
  })
}
 
export default Skills;