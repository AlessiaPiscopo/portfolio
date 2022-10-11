import styled from "styled-components";

import BackgroundTexture from "../components/BackgroundTexture";

export const ProjectsSection = styled.section``;

export const BgTextureDark = styled(BackgroundTexture)`
  /* background-image: url("/texture-dark.jpg"); */
`;

// cards grid
export const ProjectsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  padding-bottom: 2.4rem;
`;

// TODO: add card hover effect animation
export const ProjectCard = styled.li`
  background-color: var(--color-gray-2);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

  padding: 1.6rem;
  max-width: 255px;
  border-radius: 20px;
  font-size: 1.4rem;

  margin-bottom: 2.4rem;

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .project-name {
      font-family: "Roboto Mono", monospace;
      color: var(--text-color-gray);
      font-size: 1.8rem;
      text-align: center;
      padding: 0.4rem 0;
    }

    .project-preview-image {
      width: 240px;
      border-radius: 10px;
      margin-bottom: 0.8rem;
    }

    .stack-list {
      font-size: 1.3rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .project-description {
      color: var(--text-color-black);
      font-size: 1.35rem;
      padding: 0.4rem 0.2rem;
    }
  }

  .icon-links {
    color: var(--color-gray-5);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding-top: 0.6rem;

    .github-icon {
      font-size: 1.6rem;
    }
    .external-link-icon {
      font-size: 1.4rem;
    }
  }
`;
