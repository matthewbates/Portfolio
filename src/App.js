import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark");
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar handleDarkMode={handleDarkMode} />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
