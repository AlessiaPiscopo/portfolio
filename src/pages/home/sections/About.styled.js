import styled from "styled-components";

export const AboutSection = styled.section`
  .skills-and-tools {
    h2 {
      font-size: 2rem;
    }

    ul,
    .skills-and-tools-list {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2.4rem;

      .frontend,
      .backend,
      .tools {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.8rem;
        max-width: fit-content;

        li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          min-width: fit-content;
        }
      }
    }
  }
`;
