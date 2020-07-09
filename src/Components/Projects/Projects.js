import React from 'react';

const h = {
   color: "Black",
   fontFamily: "Comic Sans MS, cursive, sans-serif"
}

const p = {
  color: "black",
  textSize: "3.5vh"
}

const img = {
  height: "300px"
}

const div = {
  width: "480px"
}


const Projects = ({name, link, image, desc}) => {
  return (
    <div className="Projects br3 pa3 ma3 shadow-5 center" style={div}>
      <a className="" href={link} style={{textDecoration: "none"}}>
        <img className="grow center" src={ image } alt="Error" style={ img } />
        <h1 className="grow" style={h}>{ name }</h1>
        <p className="" style={p}>{ desc }</p>
      </a>
    </div>
  );
}

export default Projects;
