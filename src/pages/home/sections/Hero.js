import React from "react";

import {
  StyledHero,
  ProfilePicture,
  HeroContentRight,
  ButtonsSection,
  Location,
  SocialsIcons,
} from "../../../styles/Hero.styled";

// icons
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiLink } from "react-icons/hi";

// Note: aria-hidden and "visually-hidden" class used to make icon links accessible (see: https://a11y-101.com/development/icons-and-links)

export default function Hero() {
  return (
    <StyledHero className="hero">
      <div className="hero-content-container">
        <ProfilePicture
          src="/profile-pic-round-scribbles-bees.png"
          alt="profile picture"
        ></ProfilePicture>

        <HeroContentRight className="hero-content-right">
          <h1 className="name">Alessia Piscopo</h1>
          <h2 className="title">Full-Stack Web Developer</h2>

          <div className="description">
            <p>
              Recent Web Development grad <span className="emoji">🎓</span>,
              urban beekeeper, and creative thinker with a passion for learning.
            </p>
            <p>
              I particularly love Frontend Development & UI/UX Design and am
              currently seeking a new work or internship opportunity{" "}
              <span className="emoji">🌱</span>.
            </p>
          </div>

          <Location className="location">
            <span className="emoji pin-emoji">📍</span>
            Montreal, QC Canada
          </Location>

          <ButtonsSection>
            <button className="btn see-my-work-btn">
              <a href="#projects">See my work</a>
            </button>

            <button className="btn contact-me-btn">
              <a href="#contact">Contact me</a>
            </button>
          </ButtonsSection>

          <SocialsIcons className="socials-icons">
            <span className="emoji link-emoji">🔗</span>

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
      </div>
    </StyledHero>
  );
}
