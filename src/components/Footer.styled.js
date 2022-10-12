import styled from "styled-components";

export const StyledFooter = styled.footer`
  /* place to right of sidebar */
  margin-left: 150px;

  color: var(--color-gray-6);
  font-size: 1.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  padding: 1.6rem 2rem;

  .copyright-symbol {
    font-size: large;
  }

  .socials-icons {
    display: flex;
    gap: 1.2rem;
    margin-left: 0.6rem;

    .socials-icon {
      font-size: 1.6rem;
    }
  }
`;
