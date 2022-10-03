import React from "react";
import { Link } from "gatsby";
import {
  StyledHero,
  Bg,
  HeroContent,
  ProfilePic,
  Intro,
  ButtonsSection,
  ContactBtn,
  SeeMyWorkBtn,
  Location,
  SocialsIcons,
  LearnMore,
  StyledBsArrowRightShort,
} from "../styles/Hero.styled";

import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

// Note: Make icon links accessible using aria-hidden and a "visually-hidden" class selector: https://a11y-101.com/development/icons-and-links

// TODO: add illustrations
// TODO: change learn more to a with id instead of Link

export default function Hero() {
  return (
    <>
      <Bg className="bg"></Bg>
      <StyledHero className="hero">
        <HeroContent className="hero-content">
          {/* TODO: add bees decoration */}
          {/* <ProfilePic src="/profile-pic-round.png" alt="profile picture" /> */}

          <Intro className="intro">
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
                <LearnMore to="/about" className="learn-more-link">
                  <span>Learn more</span>
                  <StyledBsArrowRightShort className="arrow" />
                </LearnMore>
              </p>
            </div>
          </Intro>

          <ButtonsSection>
            <Link to="/contact">
              <ContactBtn className="btn">Contact me</ContactBtn>
            </Link>

            <Link to="/projects">
              {/* TODO: add hand-drawn arrow down?  */}
              <SeeMyWorkBtn className="btn">See my work</SeeMyWorkBtn>
            </Link>
          </ButtonsSection>

          <Location className="location">
            <span className="emoji">📍</span> Montreal, QC Canada
          </Location>
        </HeroContent>
        <SocialsIcons className="socials-icons">
          <span className="emoji">👋</span>
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
      </StyledHero>
    </>
  );
}

<Link to="/contact">Contact</Link>;
