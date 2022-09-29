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
            Hello 👋, I am a recent Web Development grad 🎓 and Urban Beekeeper
            🐝 from Montreal, QC.
          </p>
          <p>
            I particularly love Frontend Development and I’m currently seeking a
            new work, internship, or project opportunity 🌱.
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
