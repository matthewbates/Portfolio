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
    // <div className="contact-information">
    <section className="colorlib-work" data-section="contact">
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <h2 className="text-center">Let's Get In Touch!</h2>
            <Form id="myForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control icon-mail"
                  id="email"
                  placeholder="enter your email"
                />
              </div>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="name"
                  name="name"
                  className="form-control icon-user"
                  id="name"
                  placeholder="enter your name"
                />
              </div>

              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  className="form-control icon-message"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="your message"
                ></textarea>
              </div>

              <Button type="submit" className="btn btn-primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>

      {/* <h3>Let's Get In Touch!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Type your email here..."
            required
            icon="mail"
            // className="icon-mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Type your name here..."
            required
            icon="user circle"
            iconPosition="left"
            // className="icon-user"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Type your message here..."
            required
            // className="icon-message"
          />
          <Button label="Send Message" icon="send" color="green">
            Send Message
          </Button>
        </Form> */}
    </section>
    // </div>
  );
}
