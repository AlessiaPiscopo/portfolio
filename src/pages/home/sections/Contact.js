import React from "react";

import PageSection from "../../../components/PageSection";

import { ContactSection } from "../../../styles/Contact.styled";

export default function Contact() {
  return (
    <PageSection>
      <ContactSection className="contact-section">
        <header className="section-header" id="contact">
          <h1 className="section-title">Contact</h1>
          <div className="section-intro">
            <p>Get in touch with me!</p>
            <p>
              You can fill out the form below or send me an email by clicking{" "}
              <a
                href="mailto:alessia.piscopo@hotmail.com"
                className="mail-to-link"
              >
                here
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
          <input type="text" name="name" placeholder="Name" required></input>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
          ></input>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </ContactSection>
    </PageSection>
  );
}
