import React from "react";

import { AboutSection } from "./About.styled";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaNodeJs,
  FaFigma,
  FaMarkdown,
} from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiGit,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { MdOutlineMobileFriendly } from "react-icons/md";

export default function About() {
  return (
    <AboutSection id="about" className="about-section">
      <header className="section-header">
        <h1 className="section-title">About Me</h1>
        <div className="section-intro">
          <p>
            I first became interested in Web Development back in the
            mid-2000s—while tinkering with the HTML & CSS of my MySpace
            profile—but only recently decided to pursue it as a career path. I
            also have a Bachelor of Arts in Honours History, Minor Law &
            Society, as well as years of customer service experience as a
            Pharmacy Technician and Barista.
          </p>

          <p>
            I'm also an urban beekeeper currently caring for six thriving hives
            in a local community garden. I travel to Italy whenever I can to
            work for La Casina, my family's farm and olive oil business. After
            tending to the animals and picking olives in the groves, I focus on
            web development, graphic design, and video editing for the company.
          </p>
        </div>
      </header>

      <article className="skills-and-tools">
        <header className="section-header">
          <h2 className="section-title">Skills & Tools</h2>
          <div className="section-intro">
            <p>
              Here are some of my tech skills and tools I have experience with.
            </p>
          </div>
        </header>

        <ul className="skills-and-tools-list">
          <div className="frontend">
            <li>
              <FaHtml5 />
              HTML5
            </li>
            <li>
              <FaCss3Alt />
              CSS3
            </li>
            <li>
              <FaJsSquare />
              JavaScript ES6
            </li>
            <li>
              <FaReact />
              React
            </li>
            <li>
              <FaSass />
              Sass
            </li>
            <li>
              <GrGatsbyjs />
              Gatsby
            </li>
          </div>

          <div className="backend">
            <li>
              <SiFirebase />
              Firebase
            </li>
            <li>
              <FaNodeJs />
              Node
            </li>
            <li>
              <SiExpress />
              Express
            </li>
            <li>
              <SiMongodb />
              MongoDB
            </li>
            <li>
              <AiOutlineApi />
              RESTful APIs
            </li>
            <li>
              <SiGraphql />
              GraphQL
            </li>
          </div>

          <div className="tools">
            <li>
              <SiGit />
              Git
            </li>
            <li>
              <FaMarkdown />
              Markdown
            </li>
            <li>
              <FaFigma />
              Figma
            </li>
            <li>
              <SiAdobephotoshop />
              Adobe Photoshop
            </li>
            <li>
              <SiAdobepremierepro />
              Adobe Premiere Pro
            </li>
            <li>
              <MdOutlineMobileFriendly />
              Responsive Design
            </li>
          </div>
        </ul>
      </article>
    </AboutSection>
  );
}
