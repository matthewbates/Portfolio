import React from "react";

export default function Projects() {
  return (
    <div>
      <section className="colorlib-work" data-section="projects">
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
          <div className="row">
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/mountainbuddy.png)" }}
              >
                <div className="desc">
                  <div className="con text-center">
                    <h3>
                      <b>
                        <a href="work.html">Mountain Buddy</a>
                      </b>
                    </h3>
                    <span>
                      <b>
                        <h3>
                          <a href="https://github.com/matthewbates/Mountain-Buddy">
                            Code
                          </a>{" "}
                          |{" "}
                          <a href="https://vimeo.com/manage/videos/695889451/21156ef4dd">
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
                        <h3>
                          <a href="https://github.com/matthewbates/Brewery-Discovery">
                            Code
                          </a>{" "}
                          |{" "}
                          <a href="https://vimeo.com/manage/videos/695879205">
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
                        <h3>
                          <a href="https://github.com/matthewbates/SkiBum">
                            Code
                          </a>{" "}
                          |{" "}
                          <a href="https://vimeo.com/manage/videos/695859712">
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
              data-animate-effect="fadeInRight"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
