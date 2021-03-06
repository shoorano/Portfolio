import React from 'react';
import pdf from '../files/cv.pdf';


const linkText = {
  textDecoration: "none",
  color: "white"
}

const header =  {
  position: "sticky",
  top: "0px",
  zIndex: "99",
  background: "#008080"
}

const Header = () => {
  return (
    <div className="Header br2 w-100 flex" style={header}>
      <h3 className="tc fl w-15 pa3 br3 ma0 grow">
        <a href="https://github.com/shoorano" style={linkText}>GitHub</a>
      </h3>
      <h3 className="tc fl w-15 pa3 br3 ma0 grow">
        <a href="https://www.linkedin.com/in/dan-willoughby-092539196/" style={linkText}>LinkedIn</a>
      </h3>
      <h3 className="tr fl br3 pa3 ma0 flex-auto">
        <a href={pdf} target = "_blank" rel="noopener noreferrer" style={linkText}>Resumé</a>
      </h3>
    </div>
  );
}

export default Header;
