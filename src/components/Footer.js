import React from "react";
import { StyledFooter, IconsSection } from "../styles/Footer.styled";

import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Copyright 2022 © Alessia Piscopo</p>

      <IconsSection>
        <BsLinkedin className="socials-icon" />
        <BsGithub className="socials-icon" />
        <BsFacebook className="socials-icon" />
        <BsInstagram className="socials-icon" />
      </IconsSection>
    </StyledFooter>
  );
}
