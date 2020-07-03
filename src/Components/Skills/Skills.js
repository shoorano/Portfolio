import React from 'react';


const div2 = {
  fontSize: "8vh",
  color: "#008080",
  maxWidth: "700px"
}

const h = {
   color: "Black",
   fontFamily: "Comic Sans MS, cursive, sans-serif",
   fontSize: "3vw"
}

const Skills = () => {
  return (
    <div className="Skills w-100 pa4" style={{ background: "linear-gradient(90deg, gray , white)" }}>
      <p className="" style={h}>Technology Stack</p>
      <div className="center w-60 w-100" style={div2}>
        <i class="devicon-python-plain-wordmark pa2 ma2 dib"></i>
        <i class="devicon-css3-plain-wordmark pa2 ma2 dib"></i>
        <i class="devicon-html5-plain-wordmark pa2 ma2 dib"></i>
        <i class="devicon-javascript-plain pa2 ma2 dib"></i>
        <i class="devicon-react-plain-wordmark pa2 ma2 dib"></i>
        <i class="devicon-nodejs-plain-wordmark pa2 ma2 dib"></i>
        <i class="devicon-express-original-wordmark pa2 ma2 dib"></i>
        <i class="devicon-postgresql-plain-wordmark pa2 ma2 dib"></i>
        <i class="devicon-github-plain-wordmark pa2 ma2 dib"></i>
        <i class="devicon-heroku-plain-wordmark pa2 ma2 dib"></i>


      </div>
    </div>
  );
}

export default Skills;
