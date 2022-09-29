import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

export const StyledHero = styled.section`
  margin-top: 3.6rem;
`;

// Profile pic placeholder
export const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--color-opal);
  border-radius: 50%;
  margin-bottom: 1.2rem;
`;

export const Name = styled.h1`
  font-size: 3rem;
  letter-spacing: -0.08rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: var(--color-opal);
  margin-bottom: 1.2rem;
`;

export const Blurb = styled.article`
  p:first-of-type {
    margin-bottom: 0.8rem;
  }
`;

export const ButtonsSection = styled.section`
  margin: 2.4rem 0;
  display: flex;
  gap: 1.6rem;
`;

export const ContactBtn = styled.button`
  background-color: var(--color-black);
  color: var(--color-white);
`;

export const SeeMyWorkBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: var(--color-opal);
  background-color: transparent;
  border: 2px solid var(--color-opal);
`;

export const StyledBsArrowRightShort = styled(FaArrowRight)`
  width: 12px;
  height: 12px;
  stroke: var(--color-opal);
`;

export const Location = styled.p`
  color: var(--color-gray-6);
`;
