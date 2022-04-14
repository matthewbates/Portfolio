import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // handles dark mode switch
  // function darkModeToggle() {
  //   let element = document.html;
  //   element.classList.toggle("dark");
  //   setDarkMode((darkMode) => !darkMode);
  // }

  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
