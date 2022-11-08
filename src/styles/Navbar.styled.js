import styled from "styled-components";

export const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: "Impact Label", "Inconsolata", monospace;

  nav {
    padding: 1.6rem 3.2rem;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .initials {
        font-size: clamp(2rem, 2.5vw, 2.4rem);
        color: var(--text-color-light);
        text-shadow: 1px 1px 8px black;

        &:hover {
          transform: rotate(-2deg);
        }
      }

      .links-right {
        display: flex;
        gap: 3vw;

        li {
          &:hover {
            transform: rotate(-2deg);
          }
        }
      }
    }
  }
`;
