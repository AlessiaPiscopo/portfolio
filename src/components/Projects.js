import React from "react";
import { StyledProjects } from "../styles/projects.styled";

export default function Projects() {
  return (
    <StyledProjects>
      <h2 class="section__title">My work</h2>
      <p class="section__subtitle"></p>

      <div class="portfolio">
        <a href="#" className="portfolio__item">
          <img src="img/portfolio-01.jpg" alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-02.jpg" alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-03.jpg" alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-04.jpg" alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-05.jpg" alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-06.jpg" alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-07.jpg" alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-08.jpg" alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-09.jpg" alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-10.jpg" alt="" className="portfolio__img" />
        </a>
      </div>
    </StyledProjects>
  );
}
