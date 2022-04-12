import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

export default function Sidebar() {
  //   const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  //   const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark");
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="true"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div
              className="author-img"
              placeholder="place image"
              style={{ backgroundImage: "url(images/sidebar.png)" }}
            />
            <h1 id="colorlib-logo">
              <a>Matthew Bates</a>
            </h1>
            <span className="home">
              <i className="icon-home text-dark"></i> Manitou Springs, CO
            </span>
            <br />
            <span className="phone">
              <i className="icon-phone"></i> (713) 504-4436
            </span>
            <br />
            <br />
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#home" data-nav-section="home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" data-nav-section="projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" data-nav-section="contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <SocialIcon url="https://www.linkedin.com/in/matthew-bates-71b7bb79/" />{" "}
              <SocialIcon url="https://github.com/matthewbates" />{" "}
              <SocialIcon
                bgColor="#899499"
                url="https://medium.com/me/stories/public"
              />
            </ul>
            <ul>
              <br />
              {/* <div className="form-check form-switch">
                <label
                  className="form-check-label dark-mode-btn"
                  type="checkbox"
                  role="switch"
                  form="flexSwitchCheckDefault"
                ></label>
                <input
                  role="switch"
                  className="form-check-input"
                  onClick={handleDarkMode}
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div> */}
            </ul>
          </nav>
          <div className="colorlib-footer"></div>
        </aside>
      </div>
    </div>
  );
}
