import React from "react";
import { Link } from "gatsby";
import {
  StyledHero,
  HeroIllustration,
  HeroContentRight,
  ButtonsSection,
  Location,
  SocialsIcons,
  StyledBsArrowRightShort,
} from "../styles/Hero.styled";

import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

// Note: aria-hidden and "visually-hidden" class used to make icon links accessible (see: https://a11y-101.com/development/icons-and-links)

export default function Hero() {
  return (
    <>
      <StyledHero className="hero">
        <HeroIllustration
          src="/hero-illustration.png"
          alt="flowers and leaves illustration"
        ></HeroIllustration>

        <HeroContentRight className="hero-content-right">
          <h1 className="name">Alessia Piscopo</h1>
          <h2 className="title">Full-Stack Web Developer</h2>

          <div className="description">
            <p>
              Recent Web Development grad <span className="emoji">🎓</span>,
              urban beekeeper <span className="emoji">🐝</span>, and creative
              thinker with a passion for learning{" "}
              <span className="emoji">🌸</span>.
            </p>
            <p>
              I particularly love Frontend Development & UI/UX Design and am
              currently seeking a new work or internship opportunity{" "}
              <span className="emoji">🌱</span>.{" "}
            </p>
          </div>

          <Location className="location">
            <span className="emoji">📍</span> Montreal, QC Canada
          </Location>

          <ButtonsSection>
            <Link to="/contact">
              <button className="btn contact-me-btn">Contact me</button>
            </Link>

            <Link to="/projects">
              <a className="btn see-my-work-btn">See my work</a>
            </Link>
          </ButtonsSection>

          <SocialsIcons className="socials-icons">
            <span className="emoji">👋</span>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/alessiapiscopo/"
              target="_blank"
            >
              <BsLinkedin className="socials-icon" aria-hidden="true" />
              <span class="visually-hidden">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/AlessiaPiscopo" target="_blank">
              <BsGithub className="socials-icon" aria-hidden="true" />
              <span class="visually-hidden">Github</span>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/alepiscopo/" target="_blank">
              <BsInstagram className="socials-icon" aria-hidden="true" />
              <span class="visually-hidden">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/alessia.piscopo.54"
              target="_blank"
            >
              <BsFacebook className="socials-icon" aria-hidden="true" />
              <span class="visually-hidden">Facebook</span>
            </a>
          </SocialsIcons>
        </HeroContentRight>
      </StyledHero>
    </>
  );
}

{
  /* <StyledBsArrowRightShort className="arrow" /> */
}
