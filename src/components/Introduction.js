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
                  {/* <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"> */}
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <div>
                          <h1>Hi, I'm Matthew.</h1>
                          <h4>Creative · Passionate · Tenacious</h4>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://drive.google.com/file/d/15jd7IKnp0kOCxmMwcz06eXhR68WrXsXX/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                            </a>{" "}
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://medium.com/me/stories/public"
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
              {/* </div> */}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
