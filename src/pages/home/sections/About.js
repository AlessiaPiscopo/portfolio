import React from "react";

// style
import { AboutSection } from "../../../styles/About.styled";

// components
import PageSection from "../../../components/PageSection";
import StackListItem from "../../../components/StackListItem";

// icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaMarkdown,
  FaNpm,
} from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiTypescript,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiGit,
} from "react-icons/si";
import { MdOutlineAccessibilityNew } from "react-icons/md";

export default function About() {
  return (
    <PageSection>
      <AboutSection className="about-section">
        <header id="about" className="section-header">
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
              I'm also an urban beekeeper 🐝 currently caring for six thriving
              hives in a local community garden. I travel to Italy whenever I
              can to work for La Casina, my family's farm and olive oil business
              🌿. After tending to the animals and picking olives in the groves,
              I focus on graphic design, branding, and video editing for the
              company.
            </p>
          </div>
        </header>

        <article className="skills-and-tools-section">
          <header className="section-header">
            <h2 className="section-title">Skills & Tools</h2>
            <div className="section-intro">
              <p>
                Here are some of my tech skills and tools I have experience
                with.
              </p>
              {/* <p>
                I'm constantly building my knowledge of HTML, CSS, and
                JavaScript. Since these ultimately form the foundation on which
                web development is built upon, I believe they are especially
                important to master.
              </p> */}
            </div>
          </header>

          <ul className="stack-list skills-and-tools-list">
            <div className="frontend">
              <h3>Frontend</h3>
              <hr />
              <StackListItem>
                <FaHtml5 />
                HTML5
              </StackListItem>

              <StackListItem>
                <FaCss3Alt />
                CSS3
              </StackListItem>

              <StackListItem>
                <FaJsSquare />
                JavaScript ES6
              </StackListItem>

              <StackListItem>
                <FaReact />
                React
              </StackListItem>

              <StackListItem>
                <FaSass />
                Sass
              </StackListItem>

              <StackListItem>
                <GrGatsbyjs />
                Gatsby
              </StackListItem>
            </div>

            <div className="backend">
              <h3>Backend</h3>
              <hr />
              <StackListItem>
                <FaNodeJs />
                Node
              </StackListItem>

              <StackListItem>
                <SiExpress />
                Express
              </StackListItem>

              <StackListItem>
                <SiMongodb />
                MongoDB
              </StackListItem>

              <StackListItem>
                <SiFirebase />
                Firebase
              </StackListItem>

              <StackListItem>
                <SiGraphql />
                GraphQL
              </StackListItem>
            </div>

            <div className="tools">
              <h3>Tools</h3>
              <hr />
              <StackListItem>
                <SiGit />
                Git
              </StackListItem>

              <StackListItem>
                <FaGithub />
                GitHub
              </StackListItem>

              <StackListItem>
                <SiVisualstudiocode />
                VisualStudio Code
              </StackListItem>

              <StackListItem>
                <SiAdobephotoshop />
                Adobe Photoshop
              </StackListItem>

              <StackListItem>
                <SiAdobepremierepro />
                Adobe Premiere Pro
              </StackListItem>

              <StackListItem>
                <FaFigma />
                Figma
              </StackListItem>

              <StackListItem>
                <FaMarkdown />
                Markdown
              </StackListItem>

              <StackListItem>
                <FaNpm />
                npm
              </StackListItem>
            </div>

            <div className="currently-learning">
              <h3>Currently Learning</h3>
              <hr />
              <StackListItem>
                <SiTypescript />
                TypeScript
              </StackListItem>

              <StackListItem>
                <MdOutlineAccessibilityNew />
                WCAG
              </StackListItem>
            </div>
          </ul>
        </article>
      </AboutSection>
    </PageSection>
  );
}
