import React from 'react';
import Selfie from './selfie.jpg'
import './Introduction.css'

const Introduction = () => {
  return (
    <div className="Introduction pa0 ma0 center" style={{ height: "94vh", background: "linear-gradient( gray , white)" }}>
      <div className="pa0 center pa4" style={{width: "80%"}}>
        <img className="intro-img grow pa2 ba bw2 b--white br4"  src={Selfie} alt="" />
        <div className="w-90 pa2 center">
          <h5 className="intro-h fl h-10 w-100 ma0 pa0 tc">Dan Willoughby</h5>
          <p className="intro-p fl h-90 w-100 ma0 pa2 tc">I am an aspiring web developer with a background in physics and data analysis. I build web applications, both frontend and backend. I am experienced in python, javascript, React.js CSS and HTML. I also have commercial BI experience that I supplemented with online courses in SQL, node.js and express.js.</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
