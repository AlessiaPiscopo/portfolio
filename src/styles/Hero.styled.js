import styled from "styled-components";
// import bgTexture from "../"
import { Link } from "gatsby";
import { FaArrowRight } from "react-icons/fa";

export const StyledHero = styled.article`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4.8rem 0;
`;

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/texture-gray.jpeg");
  position: absolute;
  left: 0;
  z-index: -1;
  filter: brightness(120%) grayscale(100%);

  opacity: 0.25;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const Intro = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  padding: 2.4rem 1.2rem;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    text-align: center;
    padding-top: 1.2rem;
  }

  .name {
    font-size: 3rem;
    letter-spacing: -0.08rem;
  }

  .title {
    font-size: 2rem;
    color: var(--color-opal);
    letter-spacing: 0.8px;
  }
`;

// ---- BUTTONS
export const ButtonsSection = styled.section`
  display: flex;
  gap: 1.6rem;
  padding-bottom: 2.4rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
  }
`;

export const ContactBtn = styled.button`
  min-width: 200px;
  border: 2px solid var(--color-gray-6);
  background-color: transparent;
  color: var(--color-gray-6);
`;

export const SeeMyWorkBtn = styled.button`
  min-width: 200px;
  border: 2px solid var(--color-opal);
  background-color: transparent;
  color: var(--color-opal);
`;

// ---- LOCATION
export const Location = styled.p`
  color: var(--color-gray-6);
  padding-bottom: 1.2rem;
`;

// ---- LEARN MORE
// TODO: change to a with anchor
export const LearnMore = styled(Link)`
  color: var(--color-opal);
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
`;

export const StyledBsArrowRightShort = styled(FaArrowRight)`
  width: 12px;
  height: 12px;
  stroke: var(--color-opal);
`;

// ---- SOCIALS ICONS
export const SocialsIcons = styled.div`
  color: var(--color-gray-5);
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;

  .socials-icon,
  .emoji {
    font-size: 2rem;
  }

  .visually-hidden {
    display: none;
  }
`;
