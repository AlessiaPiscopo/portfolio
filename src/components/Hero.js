import React from "react";

import { StyledHero } from "../styles/Hero.styled";

export default function Hero() {
  return (
    <StyledHero className="intro">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Alessia Piscopo</strong>
      </h1>
      <p className="section__subtitle section__subtitle-intro"></p>
    </StyledHero>
  );
}
