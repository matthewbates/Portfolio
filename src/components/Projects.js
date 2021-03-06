import React from "react";
import { projects } from "./languages, skills, projects/projects";

export default function Projects() {
  return (
    <div>
      <section className="colorlib-work js-fullheight" data-section="projects">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <h2 className="colorlib-heading animate-box">
                <u>Recent Projects</u>
              </h2>
            </div>
          </div>
          {/* start iteration here */}
          <div className="row align-project-text">
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/mountainbuddy.png)" }}
              >
                <div className="desc con text-center">
                  <div className="con text-center">
                    <h3>
                      <b>
                        <a href="work.html">Mountain Buddy</a>
                      </b>
                    </h3>
                    <span>
                      <b>
                        <h3 className="project-text">
                          <a
                            href="https://github.com/matthewbates/Mountain-Buddy"
                            style={{ color: "white", fontWeight: "bold" }}
                            target="_blank"
                          >
                            Code
                          </a>
                          <br />
                          <br />
                          <a
                            href="https://vimeo.com/695889451/21156ef4dd"
                            style={{ color: "white", fontWeight: "bold" }}
                            target="_blank"
                          >
                            Demo
                          </a>
                        </h3>
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/brewerydiscovery.png)" }}
              >
                <div className="desc">
                  <div className="con text-center">
                    <h3>
                      <b>
                        <a href="work.html">Brewery Discovery</a>
                      </b>
                    </h3>
                    <span>
                      <b>
                        <h3 className="project-text">
                          <a
                            href="https://github.com/matthewbates/Brewery-Discovery"
                            style={{ color: "white", fontWeight: "bold" }}
                            target="_blank"
                          >
                            Code
                          </a>
                          <br />
                          <br />
                          <a
                            href="https://vimeo.com/695879205/c181dc0706"
                            style={{ color: "white", fontWeight: "bold" }}
                            target="_blank"
                          >
                            Demo
                          </a>
                        </h3>
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/skibum.png)" }}
              >
                <div className="desc">
                  <div className="con text-center">
                    <h3>
                      <b>
                        <a href="work.html">SkiBum</a>
                      </b>
                    </h3>
                    <span>
                      <b>
                        <h3 className="project-text">
                          <a
                            href="https://github.com/matthewbates/SkiBum"
                            style={{ color: "white", fontWeight: "bold" }}
                            target="_blank"
                          >
                            Code
                          </a>
                          <br />
                          <br />
                          <a
                            href="https://vimeo.com/695859712/81d9db0e0b"
                            style={{ color: "white", fontWeight: "bold" }}
                            target="_blank"
                          >
                            Demo
                          </a>
                        </h3>
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/pokedex.png)" }}
              >
                <div className="desc">
                  <div className="con text-center">
                    <h3>
                      <b>
                        <a href="work.html">Pok??dex</a>
                      </b>
                    </h3>
                    <div>
                      <h3 className="project-text">
                        <a
                          style={{ color: "white", fontWeight: "bold" }}
                          href="https://github.com/matthewbates/Pokedex"
                          target="_blank"
                        >
                          Code
                        </a>
                        <br />
                        <br />
                        <a
                          style={{ color: "white", fontWeight: "bold" }}
                          href="https://vimeo.com/695844138/aef213f1d9"
                          target="_blank"
                        >
                          Demo
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end iteration here */}
          </div>
        </div>
      </section>
    </div>
  );
}
