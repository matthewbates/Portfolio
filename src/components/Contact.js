import React from "react";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="contact-information">
      <section className="colorlib-about" data-section="contact">
        <form onsSubmit={handleSubmit} id="form-input-control-email">
          <h3>Get in Touch!</h3>
          <input
            id="form-input-control-email"
            type="text"
            label="Name"
            name="user_email"
            placeholder="Email..."
            required
            icon="mail"
            iconPosition="left"
          ></input>
          <br />
          <input
            type="text"
            name="user_name"
            placeholder="Name..."
            required
            icon="user circle"
            iconPosition="left"
          ></input>
          <br />
          <input
            id="form-input-control-last-name"
            type="text"
            name="user_message"
            placeholder="Message..."
            required
            iconPosition="left"
          ></input>
          <br />
          <button type="submit" color="green">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
