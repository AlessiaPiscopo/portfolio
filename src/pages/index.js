import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import {
  StyledHomePage,
  PageSection,
  AboutSection,
  ProjectsList,
  ProjectCard,
  StackList,
  StackListItem,
} from "../styles/Home.styled";

// icons
import { FiGithub } from "react-icons/fi";
import {
  FaExternalLinkAlt,
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

// TODO: add 2-3 more project cards (including LesMontres, Webdev Toolbox, Sound Surround Landing Page, and tbd)

export default function Home() {
  return (
    <Layout>
      <StyledHomePage className="home">
        <Hero />

        {/* ---- PROJECTS */}
        <PageSection className="page-section">
          <div className="section-header" id="projects">
            <h1 className="section-title">Featured Projects</h1>
            <div className="section-intro">
              <p>
                Check out some of my past projects and what I've been working on
                recently.
              </p>
              <p>
                I currently have some freelance projects in the works and I'm
                also constantly building personal projects to keep learning and
                strengthen my skills.
              </p>
            </div>
          </div>

          <ProjectsList className="projects-list">
            <ProjectCard className="project-card">
              <div className="project-info">
                <h2 className="project-name">La Casina</h2>

                <img
                  src="/lacasina-preview.png"
                  alt="La Casina website preview image"
                  className="project-preview-image"
                />

                <StackList>
                  <StackListItem>HTML5</StackListItem>
                  <StackListItem>CSS3</StackListItem>
                  <StackListItem>React</StackListItem>
                  <StackListItem>Styled Components</StackListItem>
                  <StackListItem>Node</StackListItem>
                </StackList>

                <p className="project-description">
                  Official website for La Casina 🏡🌿 — our small family-run
                  farm and olive oil company based in Sicily, Italy and
                  Montreal, QC, Canada.
                </p>

                {/* icon links */}
                <div className="icon-links">
                  <a
                    href="https://github.com/AlessiaPiscopo/la-casina"
                    target="_blank"
                  >
                    <FiGithub
                      stroke-width="2.5"
                      className="github-icon"
                      aria-hidden="true"
                    />
                    <span class="visually-hidden">GitHub Repository</span>
                  </a>

                  <a href="https://www.lacasina.co/" target="_blank">
                    <FaExternalLinkAlt
                      className="external-link-icon"
                      aria-hidden="true"
                    />
                    <span class="visually-hidden">Live website link</span>
                  </a>
                </div>
              </div>
            </ProjectCard>

            {/* ---- SoundWave */}
            {/* preview/github links, details link */}
            {/* video demo */}
            {/* https://github.com/AlessiaPiscopo/SoundWave */}
            {/* <ProjectCard className="project-card">
                <div className="project-info">
                  <h2 className="project-name">SoundWave</h2>
                  <img
                    src="/soundwave-preview.png"
                    alt="SoundWave project preview image"
                    className="project-preview-image"
                  />
                  <ul className="stack-list">
                    <li className="stack-list-item">HTML5</li>
                    <li className="stack-list-item">CSS3</li>
                    <li className="stack-list-item">React</li>
                    <li className="stack-list-item">Styled Components</li>
                    <li className="stack-list-item">Node</li>
                  </ul>
                  <p className="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente asperiores blanditiis animi nam mollitia at aliquam
                    quisquam velit exercitationem.
                  </p>
                </div>
              </ProjectCard> */}
          </ProjectsList>
        </PageSection>

        {/* ---- ABOUT */}
        <PageSection className="page-section">
          <AboutSection>
            <header id="about" className="section-header">
              <h1 className="section-title">About Me</h1>
              <div className="section-intro">
                <p>
                  Blah blah blah. I'm constantly building my knowledge of HTML,
                  CSS, and JavaScript. Since these ultimately form the
                  foundation on which web development is built upon, I believe
                  they are especially important to master.
                </p>
              </div>
            </header>

            {/* ---- skills & tools */}
            <article className="skills-and-tools">
              <h2>Skills & Tools</h2>
              <p>
                Here are some of my tech skills and tools I have experience
                with.
              </p>
              <p>
                I'm also currently learning TypeScript and familiarizing myself
                with Web Content Accessibility Guidelines (WCAG).
              </p>

              <StackList className="skills-and-tools-list">
                <h3>Frontend</h3>
                <div className="frontend">
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

                <h3>Backend</h3>
                <div className="backend">
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

                <h3>Tools</h3>
                <div className="tools">
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

                <h3>Currently Learning</h3>
                <div className="currently-learning">
                  <StackListItem>
                    <SiTypescript />
                    TypeScript
                  </StackListItem>

                  <StackListItem>
                    <MdOutlineAccessibilityNew />
                    WCAG
                  </StackListItem>
                </div>
              </StackList>
            </article>
          </AboutSection>
        </PageSection>
      </StyledHomePage>
    </Layout>
  );
}

//  - , , ,
//  - , , , , ,
//  - , Web Content Accessibility Guidelines (WCAG)

// Git, GitHub, VisualStudio
// Code, Adobe Photoshop, Figma,
// Adobe Premiere Pro, Markdown
