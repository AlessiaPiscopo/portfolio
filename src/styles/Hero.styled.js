import styled from "styled-components";
import { Link } from "gatsby";
import { FaArrowRight } from "react-icons/fa";

// TODO: clamp width, center content for mobile view with image on top

export const StyledHero = styled.section`
  margin: 6.4rem auto;
  padding: 2.4rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3.2rem;
  }
`;

export const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  background-color: var(--color-opal);
  border-radius: 50%;
  margin-right: 5.8rem;

  @media screen and (max-width: 768px) {
    /* width: 150px;
    height: 150px; */
    margin: 0 0 3.2rem 0;
  }
`;

export const Intro = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 520px;

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    max-width: 450px;
  }
`;

export const Name = styled.h1`
  font-size: 3rem;
  letter-spacing: -0.08rem;
`;
export const Title = styled.h2`
  font-size: 2rem;
  color: var(--color-opal);
  margin-bottom: 1.6rem;
  letter-spacing: 0.8px;
`;

export const IntroText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
`;

// ---- LOCATION & LEARN MORE

export const LocationAndLearnMore = styled.span`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  margin-bottom: 2.4rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const Location = styled.p`
  color: var(--color-gray-6);
`;

export const LearnMore = styled(Link)`
  color: var(--color-opal);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

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

// ---- BUTTONS

export const ButtonsSection = styled.section`
  margin-bottom: 3.2rem;
  display: flex;
  gap: 1.6rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
  }
`;

export const ContactBtn = styled.button`
  min-width: 200px;
  border: 2px solid var(--color-black);
  background-color: var(--color-black);
  color: var(--color-white);
`;

export const SeeMyWorkBtn = styled.button`
  min-width: 200px;
  border: 2px solid var(--color-opal);
  background-color: transparent;
  color: var(--color-opal);
`;

// ---- SOCIALS ICONS

export const SocialsIcons = styled.span`
  color: var(--color-gray-5);

  display: flex;
  gap: 1.2rem;

  span {
    color: var(--text-color-black);
    font-style: italic;
  }

  .socials-icon {
    width: 18px;
    height: 18px;
  }

  .visually-hidden {
    display: none;
  }
`;
