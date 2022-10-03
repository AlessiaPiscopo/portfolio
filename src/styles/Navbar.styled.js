import styled from "styled-components";

export const StyledNavbar = styled.div`
  color: var(--color-gray-6);
  background-color: #f8f9fa;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1.6rem 0;

  .initials {
    color: var(--color-opal);
    font-family: "Inter", Helvetica, sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8rem;
  gap: 3.5vw;
`;
