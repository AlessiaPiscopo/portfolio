import styled from "styled-components";

// TODO: use props to change section background colors?
// TODO: Texture over bg?

export const StyledHomePage = styled.div``;

export const PageSection = styled.article`
  .anchor {
    padding-top: 12vh;
    margin-top: -12vh;
  }

  background-color: #e4eae9;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.8rem 0;

  header.section-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 3.2rem;
    padding: 0 2.4rem;
  }

  h1 {
    margin-bottom: 1.2rem;
  }

  .section-intro {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

// ---- ABOUT
export const AboutSection = styled.section`
  background-color: red;
  width: 100%;
`;

// ---- PROJECTS
export const ProjectsSection = styled.section`
  .projects-section,
  .project-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem;
  }
`;

export const ProjectCard = styled.div`
  /* border: 1px solid red; */
  background-color: rgb(248, 249, 250, 60%);
  padding: 1.6rem;
  max-width: 275px;
  border-radius: 20px;

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .project-preview-image {
      background-color: grey;
      width: 100%;
      height: 150px;
      border-radius: 20px;
      margin-bottom: 1.2rem;
    }

    .project-name {
      font-family: "Roboto Mono", monospace;
      font-size: 2rem;
      margin-bottom: 0.8rem;
      text-align: center;
    }

    .stack-list {
      /* width: 100%; */
      display: flex;
      flex-wrap: wrap;
    }
    .stack-list-item {
      margin: 0 0.8rem 0.4rem 0;
      background-color: var(--color-gray-3);
      color: var(--color-gray-6);
      border-radius: 50px;
      padding: 0.4rem 1.2rem;
    }
    .project-description {
    }
  }
`;
