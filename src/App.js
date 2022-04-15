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
    }, 3000);
  });

  return (
    // <>
    //   {isLoading == true ? (
    //     <Loading />
    //   ) : (
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
    //   )}
    // </>
  );
}

export default App;
