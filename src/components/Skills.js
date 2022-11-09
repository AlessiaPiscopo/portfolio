import React from "react";
import { StyledSkills } from "../styles/Skills.styled";

export default function Skills() {
  return (
    <StyledSkills id="services-skills" className="my-services my-skills">
      <h2 class="section__title section__title--services section__title--skills">
        What I do
      </h2>
      <div class="services skills">
        <div class="service skill">
          <h3>front</h3>
          <p>html</p>
        </div>

        <div class="service skill">
          <h3>back</h3>
          <p>node</p>
        </div>

        <div class="service skill">
          <h3>tools</h3>
          <p>git</p>
        </div>
      </div>

      <a href="#work" class="btn">
        My Work
      </a>
    </StyledSkills>
  );
}
