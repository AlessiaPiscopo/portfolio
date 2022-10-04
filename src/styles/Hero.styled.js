import styled from "styled-components";
// import bgTexture from "../"
import { Link } from "gatsby";
import { FaArrowRight } from "react-icons/fa";

export const StyledHero = styled.article`
  /* border: 2px solid green; */
  min-height: 50vh;
  /* min-height: 60vh; */

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3.2rem 4.8rem 3.2rem;
  background-color: #fff;
`;

// illustration and content right container
export const HeroContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
`;

export const HeroIllustration = styled.img`
  /* border: 2px solid blue; */
  max-height: 500px;
`;

export const HeroContentRight = styled.article`
  /* border: 2px solid yellow; */

  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 2.4rem 0;

  .name {
    font-size: 3.5rem;
    letter-spacing: -0.08rem;
  }

  .title {
    color: var(--color-opal);
    font-size: 3.5rem;
    letter-spacing: -0.08rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem 0;
  }
`;

// ---- CALLS TO ACTION
export const CallsToAction = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 2.4rem 0;

  .learn-more-btn {
    border: 2px solid var(--color-gray-6);
    background-color: transparent;
    color: var(--color-gray-6);
  }

  .see-my-work-btn {
    border: 2px solid var(--color-opal);
    background-color: transparent;
    color: var(--color-opal);
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
`;

// ---- LOCATION
export const Location = styled.p`
  color: var(--color-gray-6);
  /* padding: 1.2rem 0; */
`;

// ---- SOCIALS ICONS
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

// export const Bg = styled.div`
//   width: 100%;
//   height: 100%;
//   /* background-image: url("/texture-gray.jpeg"); */
//   position: absolute;
//   left: 0;
//   z-index: -1;
//   filter: brightness(120%) grayscale(100%);

//   opacity: 0.25;
// `;

// ---- HERO BOTTOM
// export const HeroBottom = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
