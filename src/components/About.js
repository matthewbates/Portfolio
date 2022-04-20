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
                    <p>
                      I'm a software engineer residing in Manitou Springs, CO.
                    </p>
                    <p>
                      Having worked in corporate America for a handful of years,
                      I've had many interactions with enterprise software
                      development. It became apparent that I had a passion for
                      not only technology, but also user design. Making things
                      more accessable & setting new standards that could be used
                      across the world-wide-web is what drove me to get into the
                      field.
                    </p>
                    <p>
                      My knowedge of front/back-end languages & frameworks
                      include:
                      <br />
                      <br />
                      <b>·</b> JavaScript <br />
                      <b>·</b> Ruby (& Rails) <br />
                      <b>·</b> React.js <br />
                      <b>·</b> TypeScript
                    </p>
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
