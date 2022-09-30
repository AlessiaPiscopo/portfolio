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

    h1 {
      margin-bottom: 1.2rem;
    }

    .subheading {
      text-align: center;
      margin-bottom: 1.2rem;
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
    gap: 0.4rem;

    .project-preview-image {
      background-color: aliceblue;
      width: 100%;
      height: 150px;
      border-radius: 20px;
    }

    .project-name {
      font-size: 2rem;
    }

    .stack-list {
      /* width: 100%; */
      font-weight: bold;
      color: var(--color-gray-6);
      display: flex;
      flex-wrap: wrap;
    }
    .stack-list-item {
      margin-right: 1.2rem;
    }
    .project-description {
    }
  }
`;
