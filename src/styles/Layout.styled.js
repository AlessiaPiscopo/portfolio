import styled from "styled-components";

export const StyledLayout = styled.div`
  min-height: 100vh;
  /* border: 2rem solid var(--color-opal-1); */

  display: flex;
  flex-direction: column;

  .content {
    top: 6.2rem;
  }

  .footer {
    align-self: flex-end;
  }
`;
