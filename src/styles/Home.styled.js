import styled from "styled-components";

export const StyledHomePage = styled.main`
  .projects-section {
    /* Texture over bg? */
    background-color: #e4eae9;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
      text-align: center;
      padding: 1.6rem 0;
    }

    h1 {
      margin-bottom: 0.8rem;
    }

    /* TODO: use clamp? */
    .section-intro {
      text-align: center;
      max-width: 800px;
      margin-bottom: 2.4rem;
    }

    .project-cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 3.2rem;
    }
  }
`;

export const ProjectCard = styled.article`
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
