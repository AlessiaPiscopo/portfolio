import React from "react";

import { StyledHero } from "../styles/Hero.styled";

export default function Hero() {
  return (
    <div className="page-container">
      <StyledHero className="hero">
        <h1 className="name">Alessia Piscopo</h1>
        <h2 className="title">Full-Stack Web Developer</h2>

        <div className="description">
          <p>
            Recent Web Development grad, urban beekeeper, and creative thinker
            from Montreal, QC Canada.
          </p>
          <p>
            I particularly love Frontend Development & UI/UX Design and am
            currently seeking a new work or internship opportunity.{" "}
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

          <a href="#contact" className="btn label-btn">
            Contact me
          </a>
        </div>
      </StyledHero>
    </div>
  );
}
