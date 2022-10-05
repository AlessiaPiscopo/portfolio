import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

export const StyledHero = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
  padding: 2.4rem;
  min-height: 70vh;
  background-color: #fff;
`;

export const HeroIllustration = styled.img`
  /* width: 30%; */
  max-width: 400px;

  @media screen and (max-width: 992px) {
    display: none;
    /* background-image: url("/hero-illustration.png");
    position: absolute;
    z-index: -1;
    width: 100vw;
    opacity: 0.2; */
  }
`;

export const HeroContentRight = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  .title {
    color: var(--color-opal);
    font-size: 3.5rem;
  }

  .description {
    padding: 1.2rem 0;

    p:first-of-type {
      padding-bottom: 1.2rem;
    }
  }

  @media screen and (max-width: 992px) {
    align-items: center;

    .name,
    .title,
    .description {
      text-align: center;
    }
  }
`;

export const ButtonsSection = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 2.4rem 0;

  .contact-me-btn {
    border: 2px solid var(--color-gray-6);
    background-color: transparent;
    color: var(--color-gray-6);
  }

  .see-my-work-btn {
    border: 2px solid var(--color-opal);
    background-color: transparent;
    color: var(--color-opal);
  }

  /* .contact-me-link {
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
  } */

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

export const Location = styled.p`
  color: var(--color-gray-6);
`;

export const SocialsIcons = styled.div`
  color: var(--color-gray-5);
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;

  .socials-icon,
  .emoji {
    font-size: 2.2rem;
  }

  .visually-hidden {
    display: none;
  }
`;

// ------

export const StyledBsArrowRightShort = styled(FaArrowRight)`
  width: 12px;
  height: 12px;
  stroke: var(--color-opal);
`;

// export const ProfilePic = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
// `;

// ---- HERO BOTTOM
// export const HeroBottom = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
