import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

export default function Sidebar() {
  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  function handleToggler() {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem("sidebar-collapsed", true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sidebar-collapsed");
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
              style={{ backgroundImage: "url(images/about.jpg)" }}
            />
            <h1 id="colorlib-logo">
              <a href="index.html">Matthew Bates</a>
            </h1>
            <span className="email">
              <i className="icon-mail"></i> matthewhcbates@gmail.com
            </span>
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
                  <a href="#timeline" data-nav-section="projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#timeline" data-nav-section="blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#timeline" data-nav-section="contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <nav id="colorlib-main-menu">
            <ul>
              <SocialIcon url="https://www.linkedin.com/in/matthew-bates-71b7bb79/" />{" "}
              <SocialIcon url="https://github.com/matthewbates" />{" "}
              <SocialIcon
                bgColor="#899499"
                url="https://medium.com/me/stories/public"
              />
            </ul>
          </nav>
          <div className="colorlib-footer"></div>
        </aside>
      </div>
    </div>
  );
}
