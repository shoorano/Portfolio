import React from 'react';
import Projects from "../Projects/Projects.js";
import quote from "./quote.jpg";
import scroll from "./scroll.jpg";
import clothes from './clothes.png'

const h = {
   color: "Black",
   fontFamily: "sans-serif",
   fontSize: "6vw"
}

const div = {
  display: "flex",
  flexWrap: "wrap",
  width: "70%"
}

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <p className="pa2" style={h}>Projects</p>
      <div className="center" style={div}>
          <Projects
            className=""
            name='shoorano-clothing'
            link='https://shoorano-clothing.herokuapp.com'
            image={ clothes }
            desc='E-Commerce site built using react-redux for the frontend and firebase as a backend. Site has google login and stripe payments integrated.'
          />
          <Projects
            className=""
            name='nst-art'
            link='https://nst-art.herokuapp.com'
            image='https://www.americanscientist.org/sites/americanscientist.org/files/2019-107-1-18-elgammal-2-natural.jpg'
            desc='React web app which utilises a deeplearning API and Express.js backend. Has a registration and sign in option which keeps a history of the number of times a user has submitted an image.'
          />
          <Projects
            className=""
            name='RoboFriends'
            link='https://shoorano.github.io/roboFriends/'
            image='https://robohash.org/12345'
            desc='Basic React app. Dynamic interface which changes images displayed as search input is updated.'
          />
          <Projects
            className=""
            name='Quote Generator'
            link='https://shoorano.github.io/quote-generator/'
            image={ quote }
            desc='Quote generator which fetches from an API and uses DOM manipulation to update, and or tweet the quote.'
          />
          <Projects
            className=""
            name='Infinite Scroll'
            link='https://shoorano.github.io/infinite-scroll/'
            image={ scroll }
            desc='JS app which continually updates images pulled from Unsplash API as the user scrolls.'
          />
      </div>
    </div>
  );
}

export default ProjectList;