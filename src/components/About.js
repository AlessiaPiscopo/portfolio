import React from "react";
import { StyledAbout } from "../styles/about.styled";

export default function About() {
  return (
    <StyledAbout>
      <h2 class="section__title section__title--about">About</h2>
      <p class="section__subtitle section__subtitle--about"></p>

      <div class="about-me__body">
        <p></p>
        <p></p>
      </div>

      <img src="/profile-pic.png" alt="My profile picture"></img>
    </StyledAbout>
  );
}
