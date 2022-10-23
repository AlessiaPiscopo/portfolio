import styled from "styled-components";

export const StyledSidebar = styled.div`
  border: 2px solid green;
  height: 100%;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  padding: 0 2rem;

  nav {
    text-transform: lowercase;

    .initials {
      font-weight: bold;
      color: var(--text-color-light);
      margin-bottom: 1.2rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    li {
      color: var(--color-gray-6);

      a:hover {
        margin-left: 0.6rem;
        opacity: 1;
        transition: ease-in-out 0.2s;
      }
    }
  }
`;
