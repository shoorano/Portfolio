import React from 'react';
import Projects from "../Projects/Projects.js"

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <h1>ProjectList Section.</h1>
      <ul>
        <li><Projects /></li>
        <li><Projects /></li>
        <li><Projects /></li>
        <li><Projects /></li>
      </ul>
    </div>
  );
}

export default ProjectList;
