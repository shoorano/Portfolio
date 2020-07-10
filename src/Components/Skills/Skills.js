import React from 'react';

const div = {
  fontSize: "9vh",
  color: "#008080",
  maxWidth: "700px",
  marginBottom: "40px"
}

const h = {
   color: "Black",
   fontFamily: "sans-serif",
   fontSize: "5vw"
}

const Skills = () => {
  return (
    <div className="Skills pa4 w-100" style={{ background: "linear-gradient(90deg, gray , white)" }}>
      <p className="pa2" style={h}>Technology Stack</p>
      <div className="center pa0 w-80" style={div}>
        <i className="devicon-python-plain-wordmark pa2 ma2 dib"></i>
        <i className="devicon-css3-plain-wordmark pa2 ma2 dib"></i>
        <i className="devicon-html5-plain-wordmark pa2 ma2 dib"></i>
        <i className="devicon-javascript-plain pa2 ma2 dib"></i>
        <i className="devicon-react-plain-wordmark pa2 ma2 dib"></i>
        <i className="devicon-nodejs-plain-wordmark pa2 ma2 dib"></i>
        <i className="devicon-express-original-wordmark pa2 ma2 dib"></i>
        <i className="devicon-postgresql-plain-wordmark pa2 ma2 dib"></i>
        <i className="devicon-github-plain-wordmark pa2 ma2 dib"></i>
        <i className="devicon-heroku-plain-wordmark pa2 ma2 dib"></i>
      </div>
    </div>
  );
}

export default Skills;
