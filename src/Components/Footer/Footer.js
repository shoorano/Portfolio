import React from 'react';

const h = {
   color: "white",
   fontFamily: "Comic Sans MS, cursive, sans-serif",
   fontSize: "1.5vw"
}

const Footer = () => {
  return (
    <div className="Footer dib pa0 w-100" style={{background: "#008080"}}>
      <p className="fl w-third" style={h}>Dan Willoughby</p>
      <p className="fl w-third" style={h}>Mobile: 07557038064</p>
      <p className="fl w-third" style={h}>Email: danwilloughby2@gmail.com</p>
    </div>
  );
}

export default Footer;
