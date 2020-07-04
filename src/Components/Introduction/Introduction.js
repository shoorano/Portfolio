import React from 'react';
import Selfie from './selfie.jpg'

const h = {
   color: "Black",
   fontFamily: "Comic Sans MS, cursive, sans-serif",
   fontSize: "3vw"
}

const p = {
  fontSize: "2vw"
}

const img = {
  width: "23vh"
}

const Introduction = () => {
  return (
    <div className="Introduction pa0 ma0 center" style={{ height: "95vh", background: "linear-gradient( gray , white)" }}>
      <div className="pa0 center pa4" style={{width: "80%"}}>
        <img className="grow pa2 ba bw2 b--white br4" style={img}  src={Selfie} alt="" />
        <div className="w-90 pa2 center">
          <p className=" fl h-10 w-100 ma0 pa0 tc" style={h}>Dan Willoughby</p>
          <p className=" fl h-90 w-100 ma0 pa2 tc" style={p}>
              {
                `I am an aspiring web developer with a background
                in physics and data analysis. I build web
                applications, both frontend and backend.
                I am experienced in python, javascript, React.js,
                CSS and HTML. I also have commercial BI experience
                that I supplemented with online courses in SQL,
                node.js and express.js.`
              }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
