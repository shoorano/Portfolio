import React from 'react';

const h = {
   color: "Black",
   fontFamily: "Comic Sans MS, cursive, sans-serif"
}

const p = {
  color: "black",
  textSize: "3.5vh"
}

const Projects = ({name, link, image, desc}) => {
  return (
    <div className="Projects br3 pa1 ma3 shadow-5 dib flex-wrap center" style={{width: "35vh"}}>
      <a className="" href={link} style={{textDecoration: "none"}}>
        <img className="grow dib" src={image} alt="Error" />
        <h1 className="grow flex-auto dib" style={h}>{name}</h1>
        <p className="pa0 center dib pa2 ma0" style={p}>{desc}</p>
      </a>
    </div>
  );
}

export default Projects;
