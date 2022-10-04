import styled from "styled-components";

export const StyledNavbar = styled.div`
  color: var(--text-color-gray);
  background-color: #fff;
  /* lighter? */
  /* background-color: var(--color-opal-1); */
  position: sticky;
  top: 0;
  z-index: 10;
  height: 8vh;
  padding: 0 3.2rem;

  .initials {
    color: var(--color-gray-6);
    font-family: "Inter", Helvetica, sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5vw;
`;
