import styled from "styled-components";

export const StyledHero = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;

  padding: 8rem 2.4rem;

  /* profile pic & content right */
  .hero-content-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 4.8rem;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfilePicture = styled.img`
  max-width: 250px;

  @media screen and (max-width: 600px) {
    margin-left: 3.2rem;
  }
`;

export const HeroContentRight = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;

  .name {
    /* font-family: "Roboto Mono", monospace; */
    font-family: "Inter", monospace;
    font-size: 2.4rem;
    /* letter-spacing: 0.5px; */
    padding-bottom: 0.2rem;
    color: var(--text-color-black);
  }

  .title {
    font-family: "Inter";
    color: var(--text-color-black);

    /* text-transform: lowercase; */
    font-size: 3rem;
    /* color: var(--color-opal); */
  }

  .description {
    /* text-align: center; */
    padding: 1.2rem 0;

    p:first-of-type {
      padding-bottom: 1.2rem;
    }
  }

  @media screen and (max-width: 600px) {
    align-items: center;

    .name,
    .title,
    .description {
      text-align: center;
    }
  }
`;

export const Location = styled.p`
  color: var(--color-gray-6);
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding-top: 0.4rem;

  /* .location-pin-icon {
    font-size: 2.4rem;
  } */

  .pin-emoji {
    font-size: 2rem;
    /* padding-right: 0.6rem; */
  }
`;

export const ButtonsSection = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.8rem 0 2.4rem 0;

  a:hover {
    opacity: 1;
  }

  .see-my-work-btn {
    border: 2px solid var(--text-color-black);
    background-color: var(--color-black);
    color: var(--text-color-white);
  }

  .contact-me-btn {
    border: 2px solid var(--text-color-black);
    background-color: transparent;
    color: var(--text-color-black);
  }

  .contact-me-link {
    color: var(--color-gray-6);
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    padding-bottom: 1.2rem;
    display: inline;

    &:hover {
      opacity: 1;

      .arrow {
        transform: translate(0.8rem);
      }
    }
  }

  @media screen and (max-width: 368px) {
    flex-direction: column;
    /* gap: 2.4rem; */
    width: 300px;

    .contact-me-btn,
    .see-my-work-btn {
      width: 85vw;
    }
  }
`;

export const SocialsIcons = styled.div`
  color: var(--color-gray-5);
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: 0.6rem;

  .socials-icon {
    font-size: 2.1rem;
  }

  .link-emoji {
    font-size: 2rem;
    padding-right: 0.4rem;
  }

  /* .link-icon {
    font-size: 2.2rem;
  } */

  .visually-hidden {
    display: none;
  }
`;
