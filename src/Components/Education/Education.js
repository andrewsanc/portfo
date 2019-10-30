import React from 'react';
import './education.css';
import resumeInfo from '../../resumeInfo';

const education = resumeInfo.education

const Education = () => {
  return (
    <div className="education">
      <h2 className="heading">Education</h2>
      {renderEducation(education)}
    </div>
  );
}

const renderEducation = (education) => {
  return education.map((school, i) => {
    return (
      <div className="education-block" key={i}>
        <h3>{school.schoolName}</h3>
        <span>{school.dateStart} - {school.dateEnd}</span>
        <h4>{school.schoolLocation}</h4>
        <ul>
          <li><strong>Degree: </strong>{school.degree}</li>
          <li><strong>Major: </strong>{school.major}</li>
          {school.emphasis && <li><strong>Emphasis: </strong>{school.emphasis}</li>}
        </ul>
      </div>
    )
  })
}
 
export default Education;