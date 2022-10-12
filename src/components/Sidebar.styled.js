import styled from "styled-components";

export const StyledSidebar = styled.div`
  height: 100%;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  nav {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.2rem;
  }
`;
