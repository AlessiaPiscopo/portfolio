import styled from "styled-components";

export const ContactSection = styled.section`
  border: 2px solid yellow;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    opacity: 0.9;
    margin-top: 1.2rem;

    .first-and-last-name {
      display: flex;
      gap: 0.8rem;

      .first-name,
      .last-name {
        width: 100%;
      }
    }

    input,
    textarea {
      font-size: 1.4rem;
      border: none;
      border-radius: 4px;
      background-color: var(--color-white);
      opacity: 0.8;

      padding: 0.4rem 0.8rem;
      margin-bottom: 0.8rem;
    }

    textarea {
      margin-bottom: 1.2rem;
    }
  }
`;
