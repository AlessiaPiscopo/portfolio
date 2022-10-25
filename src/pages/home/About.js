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
            My love for web development and design started when I was first
            introduced to it in the mid-2000s. The gateway, really, was being
            able to tinker with the HTML and CSS of my MySpace profile. I have
            loved it so much ever since and have now decided to pursue it as a
            career path. This year, I got my diploma in Web Development from
            Concordia University and have been continuing to build projects and
            learn ever since.
          </p>

          <p>
            I previously obtained a Bachelor of Arts in Honours History with a
            Minor in aw & Society. I also have years of customer service
            experience as a pharmacy technician and barista.
          </p>

          <p>
            When I'm not coding, I take care of six thriving honey bee hives in
            a local community garden. I also travel to Italy whenever I can to
            work for Azienda Agricola La Casina, my family's small farm and
            olive oil business. After tending to the animals and picking olives
            in the groves, I focus on web development, branding, graphic design,
            and video editing for the company.
          </p>

          <p>
            With my ambition and willingness to learn, I believe I have what it
            takes to succeed in the tech industry.
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
