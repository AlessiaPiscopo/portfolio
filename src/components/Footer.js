import React from "react";

import { StyledFooter } from "./Footer.styled";

import { FiLinkedin, FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <p>
        <span className="copyright-symbol">©</span> 2022 Alessia Piscopo
      </p>

      <div className="socials-icons">
        <a href="https://www.linkedin.com/in/alessiapiscopo/">
          <FiLinkedin className="socials-icon" aria-hidden="true" />
          <span class="visually-hidden">LinkedIn</span>
        </a>

        <a href="https://github.com/AlessiaPiscopo">
          <FiGithub className="socials-icon" aria-hidden="true" />
          <span class="visually-hidden">Github</span>
        </a>

        <a href="https://www.instagram.com/alepiscopo/">
          <FiInstagram className="socials-icon" aria-hidden="true" />
          <span class="visually-hidden">Instagram</span>
        </a>

        <a href="https://www.facebook.com/alessia.piscopo.54">
          <FiFacebook className="socials-icon" aria-hidden="true" />
          <span class="visually-hidden">Facebook</span>
        </a>
      </div>
    </StyledFooter>
  );
}
