import styled from "styled-components";

export const StyledSidebar = styled.div`
  border: 2px solid green;
  height: 100%;
  /* min-width: 100px; */
  min-width: 10vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  padding: 0 2rem;

  nav {
    ul {
      text-transform: lowercase;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      color: var(--color-gray-6);
    }

    a:hover {
      /* margin-left: 0.6rem; */
      transition: ease-in-out 0.2s;
      opacity: 1;
      text-decoration: line-through;
    }

    .initials {
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--text-color-light);
      margin-bottom: 0.8rem;

      .initials-link:hover {
        margin-left: 0;
        font-style: italic;
      }
    }
  }
`;
