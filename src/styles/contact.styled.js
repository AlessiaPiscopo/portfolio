import styled from "styled-components";

export const StyledContact = styled.main`
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;
  gap: 4.8rem;
  text-align: center;
  height: 100vh;
  padding: 0 2.4rem;

  header {
    .page-title {
      margin: 0 auto;
      text-align: center;
      background-color: var(--clr-dark);
      padding: 0.4rem 9.6rem;
      margin-bottom: 6.4rem;
    }

    .page-intro {
      max-width: 450px;
      p:first-child {
        margin-bottom: 2.4rem;
      }

      .mail-to-link {
        text-decoration: underline;
      }
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

  .socials-container {
    p {
      margin-bottom: 2.4rem;
    }

    .socials-icons {
      /* border: 2px solid red; */
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      cursor: pointer;

      @media (min-width: 600px) {
        flex-direction: row;
        gap: 2.4rem;
      }

      .icon-link {
        /* border: 2px solid green; */
        display: flex;
        align-items: flex-end;
        justify-content: center;
        /* gap: 0.8rem; */
        font-weight: var(--fw-bold);
        &:hover {
          opacity: 0.6;
        }

        .socials-icon {
          color: var(--clr-gray-4);
          font-size: 1.8rem;
        }

        span {
          margin: 0 0.2rem 0 0.8rem;
        }
      }

      /* 
      .spotify {
        font-size: 2rem;
      } 
      */
    }
  }
`;
