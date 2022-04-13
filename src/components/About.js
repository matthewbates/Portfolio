import React from "react";
import { languages } from "./languages & skills/languages";
import { databases } from "./languages & skills/databases";
import { testing } from "./languages & skills/markups";

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
                      <u>Who Am I?</u>
                    </h2>
                    <p>Software engineer residing in Manitou Springs, CO.</p>
                    <p>
                      A highly motivated, personable, & detail-oriented
                      individual trained in many facets necessary to contribute
                      to a modern, thriving business environment.
                    </p>
                    <p>
                      I am religiously continuing to build on my knowledge of
                      both front-end & back-end software languages & frameworks,
                      including but not limited to:
                      <br />
                      <br />
                      <b>·</b> JavaScript <br />
                      <b>·</b> Ruby (& Rails) <br />
                      <b>·</b> React.js <br />
                      <b>·</b> TypeScript
                    </p>
                    <p>I would love to connect, whether it's an inquiry or a collaboration, so send me a message!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="colorlib-about">
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
            {/* <div className="col-md-4 animate-box">
              <div className="services color-4">
                <span className="icon text-center">
                  <i className="icon-help" />
                </span>
                <div className="desc text-center">
                  <div>
                    <h3>Testing & CI/CD</h3>
                    {testing.map((test) => {
                      return (
                        <span className="image-icons">
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
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
