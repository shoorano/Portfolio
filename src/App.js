import React from 'react';
import Header from "./Components/Header/Header.js"
import Introduction from "./Components/Introduction/Introduction.js"
import ProjectList from "./Components/ProjectList/ProjectList.js"
import Skills from "./Components/Skills/Skills.js"
import Footer from "./Components/Footer/Footer.js"
import './App.css';

const App = () => {
  return(
    <div className="App">
        <Header />
        <Introduction />
        <ProjectList />
        <Skills />
        <Footer />
    </div>
  )
}

export default App;
