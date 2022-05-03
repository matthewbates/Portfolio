import "./App.css";
import "./index.css";
import React, { Fragment, useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Loading from "./components/Loading";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

const firstName = "Matthew";
const lastName = "Bates";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50000);
  });

  useEffect(() => {
    document.title = firstName + " " + lastName;
  });

  return (
    <Fragment>
      {/* {isLoading == true ? (
        <div className="loading-icon">
          <Loading />
        </div>
      ) : null} */}

      {/* <div style={{ display: isLoading ? "none" : "block" }}> */}
      <div id="main-page">
        <div
          id="main-container"
          // style={{ display: isLoading ? "none" : "block" }}
        >
          <Sidebar />
          <div
            id="colorlib-main"
            // style={{ display: isLoading ? "none" : "block" }}
          >
            <Introduction />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
      {/* </div> */}
    </Fragment>
  );
}

export default App;
