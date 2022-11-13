import React from "react";
import { StyledAbout } from "../styles/About.styled";

export default function About() {
  return (
    <StyledAbout>
      <h2 className="section__title section__title--about">About</h2>
      <p className="section__subtitle section__subtitle--about"></p>

      <div className="about-me__body">
        <p></p>
        <p></p>
      </div>

      <img src="/profile-pic.png" alt="My profile picture"></img>
    </StyledAbout>
  );
}
