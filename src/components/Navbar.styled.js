import styled from "styled-components";

export const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;

  nav {
    padding: 1.6rem 3.2rem;
    text-shadow: 1px 1px 15px black;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .initials {
        font-size: 2rem;
        font-weight: bold;
        color: var(--text-color-light);

        .initials-link:hover {
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
