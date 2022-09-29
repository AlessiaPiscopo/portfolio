import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: var(--color-gray-5);
  font-size: 1.2rem;

  /* place at bottom of screen */
  display: flex;
  justify-content: space-between;
  margin-top: auto;

  padding: 1.2rem 2rem;
`;

export const IconsSection = styled.section`
  display: flex;
  gap: 1.2rem;

  .socials-icon {
    width: 15px;
    height: 15px;
  }

  .visually-hidden {
    display: none;
  }
`;
