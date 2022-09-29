import React from "react";
import {
  StyledHero,
  Circle,
  Name,
  Title,
  Blurb,
  Buttons,
  ContactBtn,
  SeeMyWorkBtn,
  StyledBsArrowRightShort,
  Location,
} from "../styles/Hero.styled";

export default function Hero() {
  return (
    <StyledHero className="hero">
      <Circle className="circle"></Circle>

      <section>
        <Name>Alessia Piscopo</Name>
        <Title>Full-Stack Web Developer</Title>

        <Blurb>
          <p>
            Recent Web Development grad 🎓, urban beekeeper 🐝, and creative
            thinker 🌸.
          </p>
          <p>
            I particularly love Frontend Development & UI/UX Design and am
            currently seeking a new work or internship opportunity 🌱.
          </p>
        </Blurb>
      </section>

      <Buttons>
        <ContactBtn className="btn">Contact me</ContactBtn>
        <SeeMyWorkBtn className="btn">
          See my work
          <StyledBsArrowRightShort />
        </SeeMyWorkBtn>
      </Buttons>

      <Location>📍 Montreal, QC Canada</Location>
    </StyledHero>
  );
}
