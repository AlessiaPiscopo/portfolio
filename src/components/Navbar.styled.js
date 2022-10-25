import styled from "styled-components";

export const StyledNavbar = styled.div`
  /* hide Navbar until 600px (show menu icon) */
  @media screen and (max-width: 600px) {
    display: none;
  }

  nav {
    position: sticky;
    top: 0;
    z-index: 10;

    padding: 1.6rem 3.2rem;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.6rem;

      .initials {
        font-size: 2rem;
        font-weight: bold;
        color: var(--text-color-light);

        .initials-link:hover {
          margin-left: 0;
          font-style: italic;
        }
      }

      .links-right {
        display: flex;
        gap: 5vw;
      }
    }
  }
`;
