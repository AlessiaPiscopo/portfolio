import styled from "styled-components";

export const ContactSection = styled.section`
  .section-intro {
    max-width: 375px;
  }

  .form-container {
    /* border: 2px solid green; */
    width: 400px;
    max-width: 350px;
    margin: 0 auto;
  }

  form {
    /* border: 2px solid hotpink; */
    display: flex;
    flex-direction: column;
    opacity: 0.9;

    margin-top: 1.2rem;
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

  footer {
    color: var(--color-gray-6);
    font-size: 1.2rem;

    /* place at bottom of screen */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;

    padding: 2.4rem 2rem;

    p:first-child {
      padding-bottom: 0.4rem;
    }
  }
`;
