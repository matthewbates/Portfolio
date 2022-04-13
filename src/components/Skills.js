import React from "react";
import { languages } from "./languages & skills/languages";
import { databases } from "./languages & skills/databases";
import { testing } from "./languages & skills/markups";

export default function Skills() {
  return (
    <div>
      <section className="colorlib-about" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
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
                        // <span classname="image-icons">
                        //   {" "}
                        <img
                          src={language.icon}
                          alt="icon-images"
                          width="60"
                          height="50"
                        />
                        // </span>
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
                        // <span classname="image-icons">
                        //   {" "}
                        <img
                          src={database.icon}
                          alt="icon-images"
                          width="60"
                          height="50"
                        />
                        // </span>
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
                        // <span classname="image-icons">
                        //   {" "}
                        <img
                          src={test.icon}
                          alt="icon-images"
                          width="50"
                          height="50"
                        />
                        // </span>
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
