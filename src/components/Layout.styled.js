import styled from "styled-components";

export const Container = styled.div`
  /* gradient bg photo overlay */
  background: url("/hero-pp.png") no-repeat center center fixed;
  background-size: cover;
`;

export const Icon = styled.div`
  width: fit-content;
  padding: 1.6rem 3.2rem;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  /* at 600px, hide icon (show Navbar) */
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
