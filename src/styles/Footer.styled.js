import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: var(--color-gray-5);
  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;
  /* place at bottom of screen */
  margin-top: auto;
`;

export const IconsSection = styled.section`
  display: flex;
  gap: 0.8rem;

  .socials-icon {
    width: 15px;
    height: 15px;
  }
`;
