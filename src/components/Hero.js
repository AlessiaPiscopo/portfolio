import React from "react";

import { StyledHero } from "../styles/Hero.styled";

import { FiArrowRight } from "react-icons/fi";

export default function Hero({ isDesktop }) {
  return (
    <StyledHero className="hero">
      <div className="bg-container">
        <div className="intro-container">
          <img
            src="/profile-pic.png"
            alt="Black and white profile silhouette"
            className="profile-pic"
          />
          <div className="intro-content">
            <header className="intro-header">
              <h1 className="full-name">Alessia P.</h1>
              <h2 className="title">Web Developer</h2>
            </header>

            <div className="intro-description">
              <p>
                Recent Full-Stack Web Development grad and urban beekeeper based
                in Montreal, QC, Canada.
              </p>
              <p>
                Passionate about anything Frontend Development and UI/UX Design.
              </p>
              <p>
                I'm currently looking for a new opportunity, so feel free to
                check out my work and contact me if you would like to
                collaborate.
              </p>
            </div>

            <section className="buttons-section">
              <a
                href="https://github.com/AlessiaPiscopo"
                target="_blank"
                className="btn label-btn"
              >
                Projects
              </a>

              <a href="#contact" className="btn label-btn rotate-clockwise">
                Contact
              </a>
            </section>

            <p>
              <a href="#about">
                Learn more <FiArrowRight />
              </a>
            </p>
          </div>
        </div>
      </div>
    </StyledHero>
  );
}
