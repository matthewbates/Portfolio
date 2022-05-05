import { Fragment, React } from "react";
import { about } from "./languages, skills, projects/about";

export default function About() {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <h2 className="colorlib-heading">
                  <u>About Me</u>
                </h2>
                <div className="about-me-font">
                  {about.map((x) => {
                    return (
                      <Fragment key={x.id}>
                        <p>{x.aboutOne}</p>
                        <p>{x.aboutTwo}</p>
                        <p>{x.aboutThree}:</p>
                        <ul>
                          {x.languagesAndFrameworks.map((y) => {
                            return <li key={y.id}>{y.languages}</li>;
                          })}
                        </ul>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
