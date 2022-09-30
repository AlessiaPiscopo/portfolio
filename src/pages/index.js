import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { StyledHomePage, ProjectCard } from "../styles/Home.styled";

export default function Home() {
  return (
    <Layout>
      <StyledHomePage>
        <Hero />

        {/* ---- PROJECTS */}
        <section className="projects-section">
          <h1>Featured Work</h1>
          <p className="subheading">
            Check out some of my past projects and what I'm currently working
            on.
          </p>

          <ProjectCard>
            {/* image placeholder */}
            <div className="project-info">
              <div className="project-preview-image"></div>
              <h2 className="project-name">La Casina</h2>
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
              {/* preview/github links, details link */}
            </div>
          </ProjectCard>
        </section>

        {/* ---- SKILLS & TOOLS */}
      </StyledHomePage>
    </Layout>
  );
}
