import React from 'react';
import Projects from "../Projects/Projects.js"

const h = {
   color: "Black",
   fontFamily: "Comic Sans MS, cursive, sans-serif",
   fontSize: "3vw"

}

const div = {
  width: "70vw"
}

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <p className="" style={h}>Projects</p>
      <div className="dib flex-wrap b--gold w-auto bw3" style={div}>
          <Projects
            className=""
            name='nst-art'
            link='https://nst-art.herokuapp.com'
            image='https://www.americanscientist.org/sites/americanscientist.org/files/2019-107-1-18-elgammal-2-natural.jpg'
            desc='React web app which utilises a deeplearning API and Express.js backend.'
          />
          <Projects
            className=""
            name='RoboFriends'
            link='https://shoorano.github.io/roboFriends/'
            image='https://robohash.org/12345'
            desc='Basic React app. Dynamic interface which uses DOM manipulation to edit what is seen on screen.'
          />
          <Projects
            className=""
            name='nst-art'
            link='https://nst-art.herokuapp.com'
            image='https://www.americanscientist.org/sites/americanscientist.org/files/2019-107-1-18-elgammal-2-natural.jpg'
            desc='React web app which utilises a deeplearning API and Express.js backend.'
          />
          <Projects
            className=""
            name='RoboFriends'
            link='https://shoorano.github.io/roboFriends/'
            image='https://robohash.org/12ggg34sd5'
            desc='Basic React app. Dynamic interface which uses DOM manipulation to edit what is seen on screen.'
          />
          <Projects
            className=""
            name='nst-art'
            link='https://nst-art.herokuapp.com'
            image='https://www.americanscientist.org/sites/americanscientist.org/files/2019-107-1-18-elgammal-2-natural.jpg'
            desc='React web app which utilises a deeplearning API and Express.js backend.'
          />
          <Projects
            className=""
            name='RoboFriends'
            link='https://shoorano.github.io/roboFriends/'
            image='https://robohash.org/1234dff5'
            desc='Basic React app. Dynamic interface which uses DOM manipulation to edit what is seen on screen.'
          />
      </div>
    </div>
  );
}

export default ProjectList;
