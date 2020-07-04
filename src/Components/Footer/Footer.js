import React from 'react';

const h = {
   color: "white",
   fontFamily: "Comic Sans MS, cursive, sans-serif",
   fontSize: "1.5vw"
}

const footer = {
  background: "#008080",
  position: "sticky",
  bottom: "0"
}

const Footer = () => {
  return (
    <div className="Footer dib pa0 w-100" style={footer}>
      <p className="fl w-third" style={h}>&#169; 2020 Daniel Martin Willoughby </p>
      <p className="fl w-third" style={h}>Mobile: 07557038064</p>
      <p className="fl w-third" style={h}>Email: danwilloughby2@gmail.com</p>
    </div>
  );
}

export default Footer;
