import React from 'react';
import './Footer.css';

const footer = {
  background: "#008080"
}

const Footer = () => {
  return (
    <div className="Footer w-100 dib ma0 pa1 flex" style={footer}>
      <p className="footer-p fl w-third">&#169;2020 Dan Willoughby</p>
      <p className="footer-p fl w-third">+44 (0) 7557038064</p>
      <p className="footer-p fl w-third">danwilloughby2@gmail.com</p>
    </div>
  );
}

export default Footer;
