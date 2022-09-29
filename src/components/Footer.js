import React from "react";
import { StyledFooter, IconsSection } from "../styles/Footer.styled";

import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Copyright 2022 © Alessia Piscopo</p>

      {/* make icon links accessible using aria-hidden and a "visually-hidden" class selector: https://a11y-101.com/development/icons-and-links */}
      <IconsSection>
        <a href="https://www.linkedin.com/in/alessiapiscopo/" target="_blank">
          <BsLinkedin className="socials-icon" aria-hidden="true" />
          <span class="visually-hidden">LinkedIn</span>
        </a>

        <a href="https://github.com/AlessiaPiscopo" target="_blank">
          <BsGithub className="socials-icon" aria-hidden="true" />
          <span class="visually-hidden">Github</span>
        </a>

        <a href="https://www.facebook.com/alessia.piscopo.54" target="_blank">
          <BsFacebook className="socials-icon" aria-hidden="true" />
          <span class="visually-hidden">Facebook</span>
        </a>

        <a href="https://www.instagram.com/alepiscopo/" target="_blank">
          <BsInstagram className="socials-icon" aria-hidden="true" />
          <span class="visually-hidden">Instagram</span>
        </a>
      </IconsSection>
    </StyledFooter>
  );
}
