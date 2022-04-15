import "./App.css";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Loading from "./components/Loading";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  return (
    <>
      <div className="react-loading-icon">
        {isLoading === true ? <Loading /> : null}
      </div>
      <div id="colorlib-page" style={{ display: isLoading ? "none" : "block" }}>
        <div
          id="container-wrap"
          style={{ display: isLoading ? "none" : "block" }}
        >
          <Sidebar />
          <div
            id="colorlib-main"
            style={{ display: isLoading ? "none" : "block" }}
          >
            <Introduction />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
