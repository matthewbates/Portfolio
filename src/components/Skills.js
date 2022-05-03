import React from "react";
import { databases } from "./languages, skills, projects/databases";
import { frameworks } from "./languages, skills, projects/frameworks";
import { languages } from "./languages, skills, projects/languages";
import { testing } from "./languages, skills, projects/markups";

export default function Skills() {
  return (
    <div>
      <section
        className=" skills-alignment colorlib-about js-fullheight"
        data-section="skills"
      >
        <div className="skills-height colorlib-narrow-content">
          {/* classname=col-md-12 */}
          {/* <div> */}
          <h2 className="colorlib-heading">
            <u>Technical Skills</u>
          </h2>
          {/* </div> */}
          <div className="row row-pt-md">
            <div className="col-md-6 animate-box">
              <div className="services color-1">
                <span className="icon text-center">
                  <i className="icon-data" />
                </span>
                <div className="desc text-center">
                  <div>
                    <h3>Languages</h3>
                    {languages.map((language) => {
                      return (
                        <img
                          key={language.id}
                          src={language.icon}
                          alt="icon-images"
                          width="60"
                          height="50"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box ci-cd">
              <div className="services color-4 ci-cd">
                <span className="icon text-center">
                  <i className="icon-globe2" />
                </span>
                <div className="desc text-center">
                  <div>
                    <h3>Frameworks</h3>
                    {frameworks.map((framework) => {
                      return (
                        <img
                          key={framework.id}
                          src={framework.icon}
                          alt="icon-images"
                          width="50"
                          height="50"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="services color-2">
                <span className="icon text-center">
                  <i className="icon-database" />
                </span>
                <div className="desc text-center">
                  <div>
                    <h3>Database Managagement</h3>
                    {databases.map((database) => {
                      return (
                        <img
                          className="icon-arrangement"
                          key={database.id}
                          src={database.icon}
                          alt="icon-images"
                          width="60"
                          height="50"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box ci-cd">
              <div className="services color-3 ci-cd">
                <span className="icon text-center">
                  <i className="icon-lightbulb" />
                </span>
                <div className="desc text-center">
                  <div>
                    <h3>Testing & CI/CD</h3>
                    {testing.map((test) => {
                      return (
                        <img
                          key={test.id}
                          src={test.icon}
                          alt="icon-images"
                          width="50"
                          height="50"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
