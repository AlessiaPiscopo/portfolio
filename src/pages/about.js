import React from "react";

import Layout from "../components/Layout";
import { StyledAbout } from "../styles/about.styled";

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
    <Layout>
      <div className="page-container">
        <StyledAbout id="about" className="about">
          <header className="section-header">
            <h1 className="section-title">About</h1>
          </header>

          <div className="section-content">
            <section className="photo-gallery">
              <div></div>
              <div></div>
              <div></div>
            </section>

            <p>
              I recently graduated from Concordia University's Full-Stack Web
              Development program in Montreal, QC.
            </p>

            <p>
              Since I'm particularly passionate about Frontend Development and
              really enjoy learning as part of a community, I'm also currently
              following{" "}
              <a
                href="https://scrimba.com/learn/frontend"
                target="_blank"
                className="scrimba-link"
              >
                Scrimba's Frontend Developer Career Path
              </a>
              .
            </p>

            <section className="skills-and-tools">
              <p>
                Here are some tools I have experience with and/or am currently
                working with:
              </p>

              <ul className="skills-and-tools-list">
                <div className="col">
                  <li>
                    <FaHtml5 />
                    HTML
                  </li>
                  <li>
                    <FaCss3Alt />
                    CSS
                  </li>
                  <li>
                    <FaJsSquare />
                    JavaScript
                  </li>
                  <li>
                    <FaReact />
                    React
                  </li>
                </div>

                <div className="col">
                  <li>
                    <FaSass />
                    Sass
                  </li>
                  <li>
                    <GrGatsbyjs />
                    Gatsby
                  </li>
                  <li>
                    <SiFirebase />
                    Firebase
                  </li>
                  <li>
                    <FaNodeJs />
                    Node
                  </li>
                </div>

                <div className="col">
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

                <div className="col">
                  <li>
                    <SiGit />
                    Git
                  </li>
                  <li>
                    <FaMarkdown />
                    Markdown
                  </li>
                  <li>
                    <SiAdobephotoshop />
                    Photoshop
                  </li>
                  <li>
                    <FaFigma />
                    Figma
                  </li>
                </div>

                {/* <li>
                    <SiAdobepremierepro />
                    Adobe Premiere Pro
                  </li> */}
                {/* <li>
                    <MdOutlineMobileFriendly />
                    Responsive Design
                  </li> */}
              </ul>
            </section>

            <p>
              When I'm not coding, I care for honeybee hives in a local
              community garden. I also travel to Italy whenever I can to work
              for my family's small farm and olive oil business. After tending
              to the animals and picking olives in the groves, I also take care
              of web development, branding, and graphic design for the company.
            </p>

            <p>
              Feel free to check out my work on{" "}
              <a href="https://github.com/AlessiaPiscopo">GitHub</a>. You can
              also learn more about my education and work experience on{" "}
              <a href="https://www.linkedin.com/in/alessia-piscopo">LinkedIn</a>
              .
            </p>
          </div>
        </StyledAbout>
      </div>
    </Layout>
  );
}
