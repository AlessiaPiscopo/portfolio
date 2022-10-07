import styled from "styled-components";

// ---- ABOUT
export const AboutSection = styled.section`
  .skills-and-tools {
    /* border: 2px solid red; */

    text-align: center;

    .skills-and-tools-list {
      /* border: 2px solid green; */

      display: flex;
      justify-content: center;
      gap: 2.4rem;
      /* max-width: 80vw; */

      /* display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 2.4rem; */

      h3 {
        /* border: 2px solid yellow; */
        display: none;
        color: var(--text-color-gray);
        margin-bottom: 1.2rem;
        font-size: 1.6rem;
      }
    }

    /* cards */
    .frontend,
    .backend,
    .tools,
    .currently-learning {
      border: 2px solid var(--color-gray-5);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      /* background-color: #f0f3f3; */
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

    li {
      /* border: 2px solid gray; */
      box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

      color: var(--text-color-gray);
      /* background-color: #f0f3f3; */
      background-color: transparent;
      font-size: 1.6rem;
      letter-spacing: -0.25px;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      /* ???: prevent line breaks inside the item */
      flex-shrink: 0;
      flex-wrap: nowrap;

      max-width: fit-content;
    }
  }
`;
