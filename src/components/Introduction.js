import React, { useState } from "react";

const resumeURL =
  "https://drive.google.com/file/d/1CuD-t8VjpNryrv0KKsj89_P0Gbu7tanV/view";
const blogURL = "https://medium.com/@matthewhcbates";

export default function Introduction() {
  const [resumeIsOpen, setResumeIsOpen] = useState(false);
  const [blogIsOpen, setBlogIsOpen] = useState(false);

  function handleResumeClick() {
    setResumeIsOpen((resumeIsOpen) => !resumeIsOpen);
  }

  function handleBlogClick() {
    setBlogIsOpen((blogIsOpen) => !blogIsOpen);
  }

  return (
    <div>
      <section id="colorlib-hero" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li>
              <div className="col-sm-12 col-xs-12 js-fullheight slider-text">
                <div className="slider-text-inner js-fullheight">
                    <div>
                      <h1>Hi, I'm Matthew</h1>
                      <h4>A creative, passionate technologist.</h4>
                      <p>
                        <a
                          className="btn btn-primary btn-learn"
                          href="https://drive.google.com/file/d/1CuD-t8VjpNryrv0KKsj89_P0Gbu7tanV/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Resume
                        </a>{" "}
                        <a
                          className="btn btn-primary btn-learn"
                          href="https://medium.com/@matthewhcbates"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Recent Publications
                        </a>
                      </p>
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
