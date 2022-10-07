import styled from "styled-components";

export const StyledNavbar = styled.div`
  color: var(--color-gray-2);
  background-color: var(--color-black);
  height: 6rem;
  padding: 0 4.8rem;
  position: sticky;
  top: 0;
  z-index: 10;

  /* position nav in center of container */
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .initials {
    color: var(--color-gray-1);
    font-family: "Inter", Helvetica, sans-serif;
    font-size: 2.2rem;
    font-weight: bold;
    padding-right: 1.6rem;

    @media screen and (max-width: 368px) {
      font-size: 1.6rem;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 25%;
  min-width: 225px;
  max-width: 50vw;
`;
