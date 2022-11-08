import styled from "styled-components";

export const StyledPageSection = styled.section`
  border: 2px solid blue;

  .section-header {
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    padding: 0 2.4rem;
  }

  h1.section-title {
    font-size: 3rem;
    padding: 1.2rem 0;
  }
  h2 {
    padding: 0.8rem 0;
  }

  .section-intro {
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    p:last-child {
      padding-bottom: 2.4rem;
    }
  }
`;
