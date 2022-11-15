import React from "react";

import { StyledHero } from "../styles/Hero.styled";

export default function Hero() {
  return (
    <StyledHero className="hero">
      <h1 className="full-name">
        <strong>Alessia Piscopo</strong>
      </h1>
      <h2 className="title rotate-counter-clockwise">
        Full-Stack Web Developer
      </h2>

      <img
        src="/profile-pic.png"
        className="profile-pic"
        alt="My profile picture"
      ></img>

      <div className="description">
        <p>
          Recent Web Development grad, urban beekeeper, and creative thinker
          from Montreal, QC.
        </p>
        <p>
          Passionate about anything Frontend & UI/UX Design and I'm urrently
          seeking a new work or internship opportunity.
        </p>
      </div>

      <div className="buttons-section">
        <a
          href="https://github.com/AlessiaPiscopo"
          target="_blank"
          className="btn label-btn"
        >
          See my work
        </a>

        <a href="#contact" className="btn label-btn rotate-clockwise">
          Contact me
        </a>
      </div>
    </StyledHero>
  );
}
