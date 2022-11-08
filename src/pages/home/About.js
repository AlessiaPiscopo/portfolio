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
        <h1 className="section-title">About</h1>
      </header>

      <div className="section-content">
        <p>
          I recently graduated from Concordia University's Full-Stack Web
          Development program and continue to strengthen my skill set. Since I'm
          particularly passionate about Frontend Development and really enjoy
          learning as part of a community, I'm currently following{" "}
          <em>
            <a href="https://scrimba.com/learn/frontend">
              Scrimba's Frontend Developer Career Path
            </a>
          </em>
          .
        </p>
        <section className="skills-and-tools">
          <p>
            Here are some of the tools I have experience with and skills I'm
            working on:
          </p>

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
        </section>

        <p>
          When I'm not coding, I take care of six thriving honey bee hives in a
          local community garden. I also travel to Italy whenever I can to work
          for Azienda Agricola La Casina, my family's small farm and olive oil
          business. After tending to the animals and picking olives in the
          groves, I focus on web development, branding, graphic design, and
          video editing for the company.
        </p>

        <p>
          A "Featured Projects" section for this website is coming soon—for now,
          you can check out my work on{" "}
          <strong>
            <a href="https://github.com/AlessiaPiscopo">GitHub</a>
          </strong>
          . You can also learn more about my education and work experience on{" "}
          <strong>
            <a href="https://www.linkedin.com/in/alessia-piscopo">LinkedIn</a>
          </strong>
          .
        </p>
      </div>
    </AboutSection>
  );
}
