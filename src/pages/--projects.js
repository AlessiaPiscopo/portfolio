import React from "react";

import { StyledProjects } from "../styles/projects.styled";

import { FiGitPullRequest, FiGlobe } from "react-icons/fi";

export default function Projects() {
  return (
    <StyledProjects className="projects-section">
      <header className="section-header" id="projects">
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
      </header>

      <ul className="projects-list">
        <li className="project-card">
          <a href="https://www.lacasina.co/">
            <h2 className="project-name">La Casina</h2>

            <img
              src="/lacasina-preview.png"
              alt="La Casina website preview"
              className="project-preview-image"
            />
          </a>
          <hr />
          <ul className="stack-list">
            <li className="stack-list-item">HTML5,</li>
            <li className="stack-list-item">CSS3,</li>
            <li className="stack-list-item">React,</li>
            <li className="stack-list-item">Styled Components,</li>
            <li className="stack-list-item">Node,</li>
          </ul>

          <p className="project-description">
            Official website for La Casina 🏡🌿 — our small family-run farm and
            olive oil company based in Sicily, Italy and Montreal, QC, Canada.
          </p>

          <div className="icon-links">
            <a href="https://www.lacasina.co/">
              <FiGlobe />
              <span>Live</span>
            </a>

            <a href="https://github.com/AlessiaPiscopo/la-casina">
              <FiGitPullRequest />
              <span>GitHub Repo</span>
            </a>
          </div>
        </li>

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
      </ul>
    </StyledProjects>
  );
}
