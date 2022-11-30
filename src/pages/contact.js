import React from "react";

import Layout from "../components/Layout";
import { StyledContact } from "../styles/contact.styled";

import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiArrowRight,
} from "react-icons/fi";
import { RiSpotifyLine } from "react-icons/ri";

export default function Contact() {
  return (
    <Layout>
      <StyledContact className="contact">
        <header>
          <h1 className="page-title rotate-clockwise">Contact</h1>
          <div className="page-intro">
            <p>
              If you like my work and are interested in working together, I
              would love to hear from you.
            </p>

            <p>
              {/* Feel free to fill out the form below or send me an email at{" "} */}
              Send me an email at{" "}
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
        {/* <form
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
        </form> */}

        {/* ---- socials */}
        <section className="socials-container">
          <p>You can also connect with me here:</p>
          <div className="socials-icons">
            <a
              href="https://www.linkedin.com/in/alessiapiscopo/"
              target="_blank"
              className="icon-link"
            >
              <FiLinkedin
                className="socials-icon"
                aria-hidden="true"
                size="20"
              />
              <span>LinkedIn</span>
              <FiArrowRight size="16" />
            </a>

            <a
              href="https://www.instagram.com/alepiscopo/"
              target="_blank"
              className="icon-link"
            >
              <FiInstagram
                className="socials-icon"
                aria-hidden="true"
                size="20"
              />
              <span>Instagram</span>
              <FiArrowRight size="16" />
            </a>
            <a
              href="https://www.facebook.com/alessia.piscopo.54"
              target="_blank"
              className="icon-link"
            >
              <FiFacebook
                className="socials-icon"
                aria-hidden="true"
                size="20"
              />
              <span>Facebook</span>
              <FiArrowRight size="16" />
            </a>

            <a
              href="https://twitter.com/AlessiaP_Dev"
              target="_blank"
              className="icon-link"
            >
              <FiTwitter
                className="socials-icon"
                aria-hidden="true"
                size="20"
              />
              <span>Twitter</span>
              <FiArrowRight size="16" />
            </a>

            {/* <a href="https://github.com/AlessiaPiscopo" target="_blank">
              <FiGithub className="socials-icon" aria-hidden="true" />
              <span class="visually-hidden">Github</span>
            </a> */}

            {/* <a
              href="https://open.spotify.com/user/22ksn74hypeqrpqyfqszfw2dy?si=c44940ecd9834010"
              target="_blank"
            >
              <RiSpotifyLine
                className="socials-icon spotify"
                aria-hidden="true"
              />
              <span class="visually-hidden">Spotify</span>
            </a> */}
          </div>
        </section>
      </StyledContact>
    </Layout>
  );
}
