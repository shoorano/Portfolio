import React from 'react';
import Background from './IntroBackground.jpg'
import Selfie from './selfie.jpg'
import './Introduction.css'

const Introduction = () => {
  return (
    <div
      className="Introduction pa4 ma0 vh-40 ba"
      style={{
               background: "white",
               backgroundSize: "100% 100%"
             }}
    >
      <div className="flex pa5">
        <img className="fl w-auto vh-25 shadow-5 grow" src={Selfie} alt="" />
        <div>
          <h1 className="flex-auto fl h-20 w-100 ma0 pa3">Dan Willoughby</h1>
          <p className="flex-auto fl h-80 w-100 ma2 pa0 tc">
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
