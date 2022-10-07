import React from "react";

import PageSection from "../../../components/PageSection";
import StackListItem from "../../../components/StackListItem";

import {
  ProjectsSection,
  ProjectsList,
  ProjectCard,
} from "../../../styles/Projects.styled";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <PageSection>
      <ProjectsSection className="projects-section">
        <div className="section-header" id="projects">
          <h1 className="section-title">Featured Projects</h1>
          <div className="section-intro">
            <p>
              Check out some of my past projects and what I've been working on
              recently.
            </p>
            <p>
              I currently have some freelance projects in the works and I'm also
              constantly building personal projects to keep learning and
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

              <ul className="stack-list">
                <StackListItem>HTML5</StackListItem>
                <StackListItem>CSS3</StackListItem>
                <StackListItem>React</StackListItem>
                <StackListItem>Styled Components</StackListItem>
                <StackListItem>Node</StackListItem>
              </ul>

              <p className="project-description">
                Official website for La Casina 🏡🌿 — our small family-run farm
                and olive oil company based in Sicily, Italy and Montreal, QC,
                Canada.
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
      </ProjectsSection>{" "}
    </PageSection>
  );
}
