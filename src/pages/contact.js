import React from "react";

import Layout from "../components/Layout";
import { StyledContact } from "../styles/contact.styled";

import { FiLinkedin, FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";
// import { FaSpotify } from "react-icons/fa";
import { RiSpotifyLine } from "react-icons/ri";

export default function Contact() {
  return (
    <Layout>
      <div className="page-container">
        <StyledContact className="contact-section">
          <header className="section-header" id="contact">
            <h1 className="section-title">Contact</h1>
            <div className="section-intro">
              <p>
                If you're interested in working together, I would love to hear
                from you.
              </p>

              <p>
                Feel free to fill out the form below or send me an email at{" "}
                <a
                  href="mailto:alessia.piscopo@hotmail.com"
                  className="mail-to-link"
                >
                  alessia.piscopo@hotmail.com
                </a>
                .
              </p>
            </div>
          </header>

          {/* ---- form */}
          <form
            action="https://formsubmit.co/alessia.piscopo@hotmail.com"
            method="POST"
          >
            <fieldset className="first-and-last-name">
              <label class="visually-hidden" for="first-name">
                First Name*
              </label>
              <input
                type="text"
                name="first-name"
                className="first-name"
                placeholder="First Name *"
                required
              />

              <label class="visually-hidden" for="last-name">
                Last Name*
              </label>
              <input
                type="text"
                name="last-name"
                className="last-name"
                placeholder="Last Name *"
                required
              />
            </fieldset>

            <label class="visually-hidden" for="email">
              Email*
            </label>
            <input type="email" name="email" placeholder="E-mail *" required />

            <input
              type="hidden"
              name="_subject"
              value="New message - alessiapiscopo.dev"
            />

            <label class="visually-hidden" for="message">
              Message*
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message *"
            />

            <button type="submit" className="btn label-btn">
              Send
            </button>
          </form>

          {/* ---- socials */}
          <p>You can also connect with me here:</p>
          <div className="socials-icons">
            <a
              href="https://www.linkedin.com/in/alessiapiscopo/"
              target="_blank"
            >
              <FiLinkedin className="socials-icon" aria-hidden="true" />
              <span class="visually-hidden">LinkedIn</span>
            </a>

            <a href="https://github.com/AlessiaPiscopo" target="_blank">
              <FiGithub className="socials-icon" aria-hidden="true" />
              <span class="visually-hidden">Github</span>
            </a>

            <a href="https://www.instagram.com/alepiscopo/" target="_blank">
              <FiInstagram className="socials-icon" aria-hidden="true" />
              <span class="visually-hidden">Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/alessia.piscopo.54"
              target="_blank"
            >
              <FiFacebook className="socials-icon" aria-hidden="true" />
              <span class="visually-hidden">Facebook</span>
            </a>

            <a
              href="https://open.spotify.com/user/22ksn74hypeqrpqyfqszfw2dy?si=c44940ecd9834010"
              target="_blank"
            >
              <RiSpotifyLine
                className="socials-icon spotify"
                aria-hidden="true"
              />
              <span class="visually-hidden">Spotify</span>
            </a>
          </div>
        </StyledContact>
      </div>
    </Layout>
  );
}
