import styled from "styled-components";

export const ProjectsSection = styled.section`
  .projects-list {
    font-size: 1.45rem;
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;

    .project-card {
      border: 1px solid var(--color-gray-4);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      max-width: 255px;
      gap: 0.4rem;
      padding: 1.4rem 1.6rem;

      .project-name {
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 0.8rem;
      }

      .project-preview-image {
        border: 1px solid var(--color-gray-7);
        border-radius: 4px;
      }

      hr {
        margin: 0.8rem auto 0 auto;
        width: 50px;
      }

      ul,
      .stack-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        padding: 0.6rem 0;

        li,
        .stack-list-item {
          color: var(--color-gray-5);
        }
      }

      .project-description {
        text-align: justify;
      }

      .icon-links {
        color: var(--color-gray-5);
        display: flex;
        align-items: center;
        gap: 1.6rem;
        padding-top: 0.6rem;

        a {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
      }
    }
  }
`;
