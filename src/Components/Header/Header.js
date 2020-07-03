import React from 'react';

const linkText = {
  textDecoration: "none",
  color: "white"
}

const Header = () => {
  return (
    <div className="Header br2 w-auto flex" style={{background: "#008080"}}>
      <h3 className="tc fl w-15 br3 pa3 ma0 grow">
        <a href="https://github.com/shoorano" style={linkText}>GitHub</a>
      </h3>
      <h3 className="tc fl w-15 br3 pa3 ma0 grow">
        <a href="" style={linkText}>LinkedIn</a>
      </h3>
      <h3 className="tc fl w-15 br3 pa3 ma0 grow">
        <a href="" style={linkText}>Email</a>
      </h3>
      <h3 className="tr fl br3 pa3 ma0 grow flex-auto">
        <a href="" style={linkText}>Resumé</a>
      </h3>
    </div>
  );
}

export default Header;
