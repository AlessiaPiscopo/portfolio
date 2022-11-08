import styled from "styled-components";

export const StyledContact = styled.section`
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  text-align: center;

  .section-intro {
    /* max-width: 400px; */

    p:first-child {
      padding-bottom: 0.8rem;
    }

    .mail-to-link {
      text-decoration: underline;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 4.8rem 0 4.8rem 0;

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
      color: white;
      border: none;
      border-radius: 4px;
      background-color: var(--color-gray-8);
      opacity: 0.9;

      padding: 0.4rem 0.8rem;
      margin-bottom: 0.8rem;
    }

    textarea {
      margin-bottom: 1.6rem;
    }
  }

  .socials-icons {
    display: flex;
    align-items: flex-end;
    gap: 1.4rem;
    cursor: pointer;

    .socials-icon {
      color: var(--color-gray-6);
      font-size: 1.8rem;

      &:hover {
        opacity: 0.6;
      }
    }

    .spotify {
      font-size: 2rem;
    }
  }
`;
