import React from "react";
import { Link } from "gatsby";
import {
  StyledHero,
  // Bg,
  HeroContainer,
  HeroIllustration,
  // ProfilePic,
  HeroContentRight,
  CallsToAction,
  Location,
  SocialsIcons,
  StyledBsArrowRightShort,
  // HeroBottom,
} from "../styles/Hero.styled";

import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

// Note: aria-hidden and "visually-hidden" class used to make icon links accessible (see: https://a11y-101.com/development/icons-and-links)

// TODO: change learn more to a with id instead of Link

export default function Hero() {
  return (
    <>
      {/* <Bg className="bg"></Bg> */}
      <StyledHero className="hero">
        <HeroContainer className="hero-container">
          {/* TODO: add bees decoration around profile pic*/}
          {/* <ProfilePic src="/profile-pic-round.png" alt="profile picture" /> */}

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

            <CallsToAction>
              <Link to="/about">
                <button className="btn learn-more-btn">Learn more</button>
              </Link>

              <Link to="/projects">
                <button className="btn see-my-work-btn">See my work</button>
              </Link>
            </CallsToAction>

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
              {/* <Link to="/contact" className="contact-me-link">
              <span>Contact me </span>
              <StyledBsArrowRightShort className="arrow" />
            </Link> */}
            </SocialsIcons>
          </HeroContentRight>
        </HeroContainer>
      </StyledHero>
    </>
  );
}

<Link to="/contact">Contact</Link>;
