import React from "react";

import { ContactSection } from "./Contact.styled";

export default function Contact() {
  return (
    <ContactSection className="contact-section">
      <header className="section-header" id="contact">
        <h1 className="section-title">Contact</h1>
        <div className="section-intro">
          <p>Get in touch with me!</p>
          <p>
            You can fill out the form below or send me an email at{" "}
            <a
              href="mailto:alessia.piscopo@hotmail.com"
              className="mail-to-link"
            >
              <strong>alessia.piscopo@hotmail.com</strong>
            </a>
            .
          </p>
        </div>
      </header>

      {/* form */}

      <form
        action="https://formsubmit.co/alessia.piscopo@hotmail.com"
        method="POST"
      >
        <fieldset className="first-and-last-name">
          <input
            type="text"
            name="first-name"
            className="first-name"
            placeholder="First Name *"
            required
          />

          <input
            type="text"
            name="last-name"
            className="last-name"
            placeholder="Last Name *"
            required
          />
        </fieldset>

        <input type="email" name="email" placeholder="E-mail *" required />

        <input
          type="hidden"
          name="_subject"
          value="New message - alessiapiscopo.dev"
        />

        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message *"
        />

        <button type="submit" className="btn btn-dark">
          Send
        </button>
      </form>
    </ContactSection>
  );
}
