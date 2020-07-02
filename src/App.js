import React, { Component } from 'react';
import Header from "./Components/Header/Header.js"
import Introduction from "./Components/Introduction/Introduction.js"
import ProjectList from "./Components/ProjectList/ProjectList.js"
import Contact from "./Components/Contact/Contact.js"
import Footer from "./Components/Footer/Footer.js"
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return(
      <div className="App  w-100">
        <div className="w-100">
          <Header className="" />
        </div>
        <div className="w-100">
          <Introduction className="" />
        </div>
        <div className="w-100">
          <ProjectList className="" />
        </div>
        <div className="w-100">
          <Contact className="" />
        </div>
        <div className="w-100">
          <Footer className="" />
        </div>
      </div>
    )}
}

export default App;
