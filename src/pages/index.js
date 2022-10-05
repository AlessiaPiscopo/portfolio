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

import BackgroundTexture from "../components/BackgroundTexture";

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

// TODO: edit/shorten About Me blurb

export default function Home() {
  return (
    <Layout>
      <StyledHomePage className="home">
        <Hero />

        {/* ---- PROJECTS */}
        <PageSection className="projects-section">
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
          <AboutSection className="about-section">
            <BackgroundTexture />
            <header id="about" className="section-header">
              <h1 className="section-title">About Me</h1>
              <div className="section-intro">
                <p>
                  Hi 👋 I am a recent Concordia University Full-Stack Web
                  Development grad. I'm particularly interested in Frontend
                  Development and am currently learning more about UI/UX Design.
                </p>

                <p>
                  I am also a beekeeper 🐝 and film photographer 📷 . I travel
                  to Italy whenever I can to work for La Casina, my family's
                  farm and olive oil business 🌿. After tending to the animals
                  and picking olives in the groves, I focus on graphic design,
                  branding, and video editing for the company.
                </p>

                <p>
                  I have a Bachelor of Arts with Distinction in Honours History
                  with a Minor in Law & Society. I also have years of customer
                  service experience, working primarily as a Pharmacy Technician
                  in a community pharmacy during my studies.
                </p>

                <p>
                  But why webdev after all that? Always had a passion blahblah
                  since the days where you could tinker with MySpace pages!
                </p>

                <p>
                  Overall, I'm a creative thinker with a passion for learning
                  and a knack for problem-solving. I believe I definitely have
                  what it takes to thrive in the tech industry!
                </p>
                <p>
                  I'm constantly building my knowledge of HTML, CSS, and
                  JavaScript. Since these ultimately form the foundation on
                  which web development is built upon, I believe they are
                  especially important to master.
                </p>
              </div>
            </header>

            {/* ---- Skills & Tools subsection */}
            <article className="skills-and-tools">
              <header className="section-header">
                <h2 className="section-title">Skills & Tools</h2>
                <div className="section-intro">
                  <p>
                    Here are some of my tech skills and tools I have experience
                    with.
                  </p>
                  <p>
                    I'm also currently learning TypeScript and familiarizing
                    myself with Web Content Accessibility Guidelines (WCAG).
                  </p>
                </div>
              </header>

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
