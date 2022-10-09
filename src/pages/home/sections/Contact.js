import React from "react";

import PageSection from "../../../components/PageSection";

import { ContactSection } from "../../../styles/Contact.styled";

export default function Contact() {
  return (
    <PageSection>
      <ContactSection
        className="contact-section dark"
        style={{
          backgroundImage: "url(/texture-dark.jpg)",
        }}
      >
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
                <strong>here</strong>
              </a>
              .
            </p>
          </div>
        </header>

        {/* form */}
        <div className="form-container">
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
            <button type="submit" className="btn btn-dark">
              Send
            </button>
          </form>
        </div>

        {/* footer 

        Note: keep here temporarily to incorporate into same bg texture
        
        TODO: move back to Layout as its own component with a different fun bg
        */}
        <footer>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://github.com/AlessiaPiscopo/portfolio"
              target="_blank"
            >
              <strong>Alessia Piscopo</strong>
            </a>
          </p>

          <p>
            Built using{" "}
            <a href="https://www.gatsbyjs.com/">
              <strong>Gatsby.js</strong>
            </a>
          </p>
        </footer>
      </ContactSection>
    </PageSection>
  );
}
