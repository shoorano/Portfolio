import React from 'react';
import Projects from "../Projects/Projects.js";
import quote from "./quote.jpg";
import scroll from "./scroll.jpg";

const h = {
   color: "Black",
   fontFamily: "sans-serif",
   fontSize: "3vw"

}

const div = {
  
  display: "flex",
  flexWrap: "wrap",
  width: "70%"
}

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <p className="" style={h}>Projects</p>
      <div className="center" style={div}>
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
            image={quote}
            desc='Quote generator which fetches from an API and uses DOM manipulation to update, and or tweet the quote.'
          />
          <Projects
            className=""
            name='Infinite Scroll'
            link='https://shoorano.github.io/infinite-scroll/'
            image={scroll}
            desc='JS app which continually updates images pulled from Unsplash API as the user scrolls.'
          />
      </div>
    </div>
  );
}

export default ProjectList;