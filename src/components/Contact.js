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
    <section className="form-container colorlib-work" data-section="contact">
      {/* <div className="container"> */}
        {/* <div className="form-row"> */}
          <div className="col align-self-center">
            <h2 className="text-center">Contact</h2>
            <Form className="form-group" id="myForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="icon-mail" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control icon-mail"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label className="icon-user" htmlFor="name">
                  Name
                </label>
                <input
                  type="name"
                  name="user_name"
                  className="form-control icon-user"
                  id="name"
                />
              </div>

              <div className="form-group">
                <label className="icon-message" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control icon-message"
                  id="message"
                  name="user_message"
                  rows="5"
                ></textarea>
              </div>

              <Button type="submit" className="btn btn-primary">
                Submit
              </Button>
            </Form>
          </div>
        {/* </div> */}
      {/* </div> */}
    </section>
  );
}
