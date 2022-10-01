import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { StyledHomePage, ProjectCard } from "../styles/Home.styled";

// TODO: add 3 more project cards (including Webdev Toolbox, Sound Surround Landing Page, and tbd)

export default function Home() {
  return (
    <Layout>
      <StyledHomePage>
        <Hero />

        {/* ---- PROJECTS */}
        <section className="projects-section">
          <header>
            <h1>Featured Work</h1>
            <div className="section-intro">
              <p>
                Check out some of my past projects and what I've been working
                on.
              </p>
              <p>
                I currently have some freelance projects in the works and I also
                constantly build personal educational projects to keep learning
                and strengthen my skills.
              </p>
            </div>
          </header>

          <div className="project-cards">
            <ProjectCard>
              {/* image placeholder */}
              <div className="project-info">
                <h2 className="project-name">La Casina</h2>
                <img
                  src="/lacasina-preview.png"
                  alt="La Casina website preview image"
                  className="project-preview-image"
                ></img>
                <ul className="stack-list">
                  <li className="stack-list-item">HTML5</li>
                  <li className="stack-list-item">CSS3</li>
                  <li className="stack-list-item">React</li>
                  <li className="stack-list-item">Styled Components</li>
                  <li className="stack-list-item">Node</li>
                </ul>
                <p className="project-description">
                  Official website for La Casina 🏡🌿 — our small family-run
                  farm and olive oil company based in Sicily, Italy and
                  Montreal, QC, Canada.
                </p>
                {/* preview/github links, details link */}
                {/* lacasina.co */}
                {/* https://github.com/AlessiaPiscopo/la-casina */}
              </div>
            </ProjectCard>

            <ProjectCard>
              {/* image placeholder */}
              <div className="project-info">
                <h2 className="project-name">SoundWave</h2>
                <img
                  src="/soundwave-preview.png"
                  alt="SoundWave project preview image"
                  className="project-preview-image"
                ></img>
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
                {/* video demo */}
                {/* https://github.com/AlessiaPiscopo/SoundWave */}
              </div>
            </ProjectCard>

            <ProjectCard>
              {/* image placeholder */}
              <div className="project-info">
                <h2 className="project-name">ApartmentSwap</h2>
                <img
                  src="/apartmentswap-preview.jpg"
                  alt="ApartmentSwap app preview image"
                  className="project-preview-image"
                ></img>
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
                {/* https://github.com/AlessiaPiscopo/apartment-swap */}
              </div>
            </ProjectCard>
          </div>
        </section>

        {/* ---- SKILLS & TOOLS */}
      </StyledHomePage>
    </Layout>
  );
}
