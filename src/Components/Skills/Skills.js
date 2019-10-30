import React from 'react';
import './skills.css'
import resumeInfo from '../../resumeInfo';

const languages = resumeInfo.technology.languages;
const frameworks = resumeInfo.technology.frameworks;
const datas = resumeInfo.technology.datas;
const tools = resumeInfo.technology.tools;

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2 className="heading">Languages</h2>
          </div>
          <div className="col-sm-8">
            <ul className="technology">
              {renderItems(languages)}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h2 className="heading">Frameworks</h2>
          </div>
          <div className="col-sm-8">
            <ul className="technology">
              {renderItems(frameworks)}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h2 className="heading">Data</h2>
          </div>
          <div className="col-sm-8">
            <ul className="technology">
              {renderItems(datas)}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h2 className="heading">Tools</h2>
          </div>
          <div className="col-sm-8">
            <ul className="technology">
              {renderItems(tools)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderItems = (items) => {
  return items.map((tech, i) => {
    return (
      <li className="item" key={i}>
        <img src={tech.imageUrl} alt={tech.alt} />
        <span>{tech.title}</span>
      </li>
    )
  })
}
 
export default Skills;