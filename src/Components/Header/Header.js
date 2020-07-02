import React from 'react';

const Header = () => {
  return (
    <div className="Header br2 w-auto flex bg-light-blue ba">
      <h3 className="tc fl w-15 br3 pa3 ma0 grow ba">
        <a href="https://github.com/shoorano">GitHub</a>
      </h3>
      <h3 className="tc fl w-15 br3 pa3 ma0 grow ba">
        <a href="">LinkedIn</a>
      </h3>
      <h3 className="tc fl w-15 br3 pa3 ma0 grow ba">
        <a href="">Email</a>
      </h3>
      <h3 className="tr fl br3 pa3 ma0 grow ba flex-auto">
        <a href="">Resumé</a>
      </h3>
    </div>
  );
}

export default Header;
