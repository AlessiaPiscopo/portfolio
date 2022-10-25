import styled from "styled-components";

export const StyledSidebar = styled.div`
  /* border: 2px solid pink; */
  position: absolute;
  top: 3.2rem;
  width: 100%;

  nav {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
    }
  }

  /* at 600px, hide icons and Sidebar (show Navbar) */
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
