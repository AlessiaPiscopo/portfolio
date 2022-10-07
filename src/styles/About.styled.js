import styled from "styled-components";

// ---- ABOUT
export const AboutSection = styled.section`
  .skills-and-tools {
    /* border: 2px solid red; */
    text-align: center;
    padding-top: 1.6rem;

    .stack-list {
      font-size: 1.3rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    /* cards grid */
    .skills-and-tools-list {
      /* border: 2px solid green; */
      display: flex;
      justify-content: center;
      gap: 2.4rem;
      padding-top: 1.6rem;
    }

    /* individual cards */
    h3 {
      /* border: 2px solid yellow; */
      /* display: none; */
      color: var(--text-color-gray);
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
    }

    hr {
      color: var(--color-gray-4);
      margin-bottom: 0.8rem;
    }

    .frontend,
    .backend,
    .tools,
    .currently-learning {
      border: 2px solid var(--color-gray-5);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 0.6rem;

      margin-bottom: 1.6rem;
      min-width: 255px;
      padding: 1.6rem;
      border-radius: 20px;
    }

    /* logo icon & name */
    li {
      box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
      color: var(--text-color-gray);
      background-color: transparent;
      font-size: 1.6rem;
      letter-spacing: -0.25px;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      max-width: fit-content;
    }
  }
`;
