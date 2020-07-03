import React, { Component } from 'react';
import Header from "./Components/Header/Header.js"
import Introduction from "./Components/Introduction/Introduction.js"
import ProjectList from "./Components/ProjectList/ProjectList.js"
import Skills from "./Components/Skills/Skills.js"
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
      <div className="App">
          <Header className="" />
          <Introduction className="" />
          <ProjectList className="" />
          <Skills className="" />
          <Footer className="" />
      </div>
    )}
}

export default App;
