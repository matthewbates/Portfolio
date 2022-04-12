import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import swal from "sweetalert2";

const templateParams = {
  user_email: "user_email_value",
  user_name: "user_name_value",
  user_message: "user_message_value",
};

const SERVICE_ID = "service_7j2rpfd";
const TEMPLATE_ID = "template_bl3e1rq";
const USER_ID = "pxTQ3Ga0lBOJ4vGzM";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        swal.fire(
          "Message Sent",
          "Matthew will get back to you as soon as he can!",
          "success"
        );
      },
      (error) => {
        console.log(error.text);
        swal.fire("Ooops, something went wrong", error.text, "error");
      }
    );
    e.target.reset();
  }

  return (
    <div className="contact-information">
      <section className="colorlib-work" data-section="contact">
        <h3>Let's Get In Touch!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Type your email here..."
            required
            className="icon-mail"
          />
          <br />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Type your name here..."
            required
            className="icon-user"
          />
          <br />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Type your message here..."
            className="icon-message"
            required
          />
          <br />
          <button color="green">Send Message</button>
        </Form>
      </section>
    </div>
  );
}
