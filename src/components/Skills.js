import React from "react";
import { languages } from "./languages, skills, projects/languages";
import { databases } from "./languages, skills, projects/databases";
import { testing } from "./languages, skills, projects/markups";

export default function Skills() {
  return (
    <div>
      <section className="colorlib-about" data-section="skills">
        <div className="skills-height colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <h2 className="colorlib-heading">
                <u>Technical Skills</u>
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
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
                        <img
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
            <div className="col-md-4 animate-box">
              <div className="services color-1">
                <span className="icon text-center">
                  <i className="icon-data" />
                </span>
                <div className="desc text-center">
                  <div>
                    <h3>Languages & Frameworks</h3>
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


const countSheep = (num) => {
  // = is a single assignment to an empty string
  let result = "";
// i is assigned to 1 at the start of the loop
// <= num comparisions grows in linear proportion
// ++ is both an addition && assignment
  for (i = 1; i <= num; i++) {
    // += is also an addition && assignment
    result += String(i) + " ...sheep"
  }
  return result;
}

W