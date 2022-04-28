import "./App.css";
import "./index.css";
import React, { useState, useEffect, useRef } from "react";
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
  const domRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // });

  useEffect(() => {
    document.title = firstName + " " + lastName;
  });

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => setIsVisible(entry.isIntersecting));
  //   });
  //   observer.observe(domRef.current);
  //   return () => observer.unobserve(domRef.current);
  // }, []);

  return (
    <>
      {/* {isLoading == true ? (
        <div className="loading-icon">
          <Loading />
        </div>
      ) : null} */}

      {/* <div style={{ display: isLoading ? "none" : "block" }}> */}
      <div id="colorlib-page">
        <div
          id="container-wrap"
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
    </>
  );
}

export default App;
