import styled from "styled-components";

export const AboutSection = styled.section`
  .skills-and-tools-section {
    border: 2px solid red;
    text-align: center;

    .stack-list {
      border: 2px solid blue;
      font-size: 1.3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
    }

    .frontend,
    .backend,
    .tools,
    .currently-learning {
      border: 2px solid yellow;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      /* category title */
      h3 {
        display: none;
        border: 2px solid green;
        color: var(--text-color-gray);
        margin-bottom: 0.8rem;
      }
    }

    hr {
      display: none;
      color: var(--color-gray-4);
      margin-bottom: 0.8rem;
    }

    /* logo icon & name */
    li {
      box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
      color: var(--text-color-gray);
      font-size: 1.4rem;
      letter-spacing: -0.25px;

      display: flex;
      align-items: center;
      gap: 0.8rem;
      /* flex-wrap: nowrap; */

      min-width: fit-content;
    }
  }
`;
