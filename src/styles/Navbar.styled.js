import styled from "styled-components";

export const StyledNavbar = styled.div`
  border: 2px solid red;
  font-size: 1.4rem;
  color: var(--color-gray-2);
  background-color: transparent;
  /* background-color: var(--color-black); */
  /* height: 5rem; */
  height: 100vh;
  /* padding-top: ; */
  width: 25%;
  padding: 0 6.4rem;
  position: sticky;
  top: 0;
  left: 0;
  padding: auto 0;
  z-index: 10;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* align-items: center; */
  justify-content: space-between;
  gap: 1.2rem;

  .initials {
    color: var(--color-gray-1);
    /* font-family: "Inter", Helvetica, sans-serif; */
    font-size: 1.4rem;
    font-weight: bold;
    /* padding-right: 1.6rem; */

    @media screen and (max-width: 368px) {
      font-size: 1.6rem;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  gap: 0.6rem;

  /* width: 25%;
  min-width: 225px;
  max-width: 50vw; */
`;
