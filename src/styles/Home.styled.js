import styled from "styled-components";

// TODO: use props to change section background colors?
// TODO: Texture over bg?

export const StyledHomePage = styled.div``;

export const PageSection = styled.article`
  background-color: #e4eae9;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.8rem 0;

  .anchor {
    padding-top: 8.2rem;
    margin-top: -8.2rem;
  }

  header.section-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 3.2rem;
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

// ---- SKILLS & TOOLS
export const SkillsAndToolsSection = styled.section`
  /* TODO: use texture as bg image */
  /* background-color: var(--color-gray-0); */
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
