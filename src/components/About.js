import React from "react";

export default function About() {
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <h2 className="colorlib-heading">
                      <u>About Me</u>
                    </h2>
                    <p>A software engineer residing in Manitou Springs, CO.</p>
                    <p>
                      Having decided to pivot my career last year and set my sights on the tech sector, I haven't looked back since. I'm a highly motivated, detail-oriented
                      individual continuously building on my knowledge of front/back-end software languages & frameworks,
                      including:
                      <br />
                      <br />
                      <b>·</b> JavaScript <br />
                      <b>·</b> Ruby (& Rails) <br />
                      <b>·</b> React.js <br />
                      <b>·</b> TypeScript
                    </p>

                    <p>Send me a message below - I'd love to connect!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="colorlib-about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <h2 className="colorlib-heading">
                <u>Technical Skills</u>
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 animate-box">
              <div className="services color-1">
                <span className="icon text-center">
                  <i className="icon-data" />
                </span>
                <div className="desc text-center">
                  <div>
                    <h3>Database Managagement</h3>
                    {languages.map((language) => {
                      return (
                        <span classname="image-icons">
                          {" "}
                          <img
                            src={language.icon}
                            alt="icon-images"
                            width="60"
                            height="50"
                          />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-box">
              <div className="services color-2">
                <span className="icon text-center">
                  <i className="icon-database" />
                </span>
                <div className="desc text-center">
                  <div>
                    <h3>Database Managagement</h3>
                    {databases.map((database) => {
                      return (
                        <span classname="image-icons">
                          {" "}
                          <img
                            src={database.icon}
                            alt="icon-images"
                            width="60"
                            height="50"
                          />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-box">
              <div className="services color-4">
                <span className="icon text-center">
                  <i className="icon-help" />
                </span>
                <div className="desc text-center">
                  <div>
                    <h3>Testing & CI/CD</h3>
                    {testing.map((test) => {
                      return (
                        <span classname="image-icons">
                          {" "}
                          <img
                            src={test.icon}
                            alt="icon-images"
                            width="50"
                            height="50"
                          />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
