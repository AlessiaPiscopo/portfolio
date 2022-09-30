import React from "react";
import { Link } from "gatsby";
import {
  StyledHero,
  ProfilePic,
  Name,
  Title,
  Intro,
  IntroText,
  LocationAndLearnMore,
  SocialsIcons,
  LearnMore,
  ButtonsSection,
  ContactBtn,
  SeeMyWorkBtn,
  StyledBsArrowRightShort,
  Location,
} from "../styles/Hero.styled";

import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

// Note: Make icon links accessible using aria-hidden and a "visually-hidden" class selector: https://a11y-101.com/development/icons-and-links

// TODO: make emojis bigger .emoji font-size

// TODO: add down arrow icon at end

export default function Hero() {
  return (
    <StyledHero className="hero">
      {/* <div className="hero-content"> */}
      <ProfilePic src="/profile-pic-round.png" alt="profile picture" />

      <Intro>
        <Name>Alessia Piscopo</Name>
        <Title>Full-Stack Web Developer</Title>

        <IntroText>
          <p>
            Recent Web Development grad 🎓, urban beekeeper 🐝, and creative
            thinker 🌸.
          </p>
          <p>
            I particularly love Frontend Development & UI/UX Design and am
            currently seeking a new work or internship opportunity 🌱.
          </p>
        </IntroText>

        <LocationAndLearnMore>
          <Location>📍 Montreal, QC Canada</Location>

          <LearnMore to="/about" className="learn-more-link">
            <span>Learn more </span>
            <StyledBsArrowRightShort className="arrow" />
          </LearnMore>
        </LocationAndLearnMore>

        <ButtonsSection>
          <Link to="/contact">
            <ContactBtn className="btn">Contact me</ContactBtn>
          </Link>

          <Link to="/projects">
            <SeeMyWorkBtn className="btn">See my work</SeeMyWorkBtn>
          </Link>
        </ButtonsSection>

        <SocialsIcons>
          👋
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
        </SocialsIcons>
      </Intro>
      {/* </div> */}
    </StyledHero>
  );
}

<Link to="/contact">Contact</Link>;
