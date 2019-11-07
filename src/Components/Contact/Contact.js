import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="heading">Get in Touch</h2>
      <div className="contact-form">
        <form method="POST" action="https://formspree.io/druu831@gmail.com">
          <input
            type="hidden"
            name="_subject"
            value="Request from Portfolio Site"
          />
          <input type="email" name="_replyto" placeholder="Your email" />
          <textarea name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
