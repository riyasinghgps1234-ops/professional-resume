import React from 'react';

function Skills({ skills }) {
  return (
    <ul className="skills-list">
      {skills && skills.map((skill, index) => (
        <li key={index} className="skill-tag">{skill}</li>
      ))}
    </ul>
  );
}

export default Skills;