import React from "react";

export default function Introduction() {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <div>
                          <h1>Hi, I'm Matthew.</h1>
                          <h4>A creative, passionate technologist.</h4>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://drive.google.com/file/d/1CuD-t8VjpNryrv0KKsj89_P0Gbu7tanV/view"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                            </a>{" "}
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://medium.com/@matthewhcbates"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Recent Blog Posts
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
