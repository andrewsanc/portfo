import React from "react";
import "./skills.css";
import resumeInfo from "../../resumeInfo";

const Skills = () => {
  return (
    <div className='skills'>
      <div className='container'>
        <div className='col-sm-12'>
          <h2 className='heading'>Tools I Use</h2>
          <div className='row row-evenly'>
            {renderItems(Object.values(resumeInfo.technology).flat())}
          </div>
        </div>
      </div>
    </div>
  );
};

const renderItems = (items) => {
  return items.map((tech, i) => {
    return (
      <div className='techItemsContainer'>
        <div className='techItems'>
          <img src={tech.imageUrl} alt={tech.imageAlt} />
        </div>
        <div className='techItemsHeader'>{tech.title}</div>
      </div>
    );
  });
};

export default Skills;
