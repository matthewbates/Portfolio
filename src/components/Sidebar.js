import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import codeWars from "../images/codewars.png";
import medium from "../images/medium.png";

export default function Sidebar() {
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
            <br />
            <div
              className="author-img"
              placeholder="place image"
              style={{ backgroundImage: "url(images/sidebar.png)" }}
            />
            <h1 id="colorlib-logo">
              <a>Matthew Bates</a>
            </h1>
            <span className="home">
              <i className="icon-home"></i> Manitou Springs, CO
            </span>
            <br />
            <span className="phone">
              <i className="icon-phone"></i> (713) 504-4436
            </span>
            <br />
            <span className="home">
              <i className="icon-mail"></i> mhcb@tutanota.com
            </span>
            <br />
            <br />

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
                    <a href="#skills" data-nav-section="skills">
                      Skills
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
                <br />
                <ul>
                  <SocialIcon
                    url="https://www.linkedin.com/in/matthew-bates-71b7bb79/"
                    target="_blank"
                  />{" "}
                  <a
                    href="https://codewars.com/users/matthewhcbates"
                    target="_blank"
                    className="codewars"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="nav-icon-codewars"
                      src={codeWars}
                      alt="icon"
                    />
                  </a>
                  <SocialIcon
                    url="https://github.com/matthewbates"
                    target="_blank"
                  />{" "}
                  <a
                    href="https://medium.com/@matthewhcbates"
                    target="_blank"
                    className="nav-icon"
                    rel="noopener noreferrer"
                  >
                    <img className="nav-icon" src={medium} alt="icon" />
                  </a>
                </ul>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
