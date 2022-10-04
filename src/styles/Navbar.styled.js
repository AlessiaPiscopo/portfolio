import styled from "styled-components";

export const StyledNavbar = styled.div`
  color: var(--color-gray-6);
  background-color: #fff;
  /* background-color: red; */
  min-height: 4.8rem;
  padding: 0 3.2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  /* position nav in center of container */
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  /* border: 2px solid blue; */
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .initials {
    color: var(--color-opal);
    font-family: "Inter", Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: bold;
  }

  @media screen and (max-width: 368px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    padding: 0.8rem 0;
  }
`;

export const MenuContainer = styled.div`
  /* border: 2px solid white; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5vw;
`;
