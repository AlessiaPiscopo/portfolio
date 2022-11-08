import styled from "styled-components";

export const StyledHero = styled.section`
  border: 2px solid blue;
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 120px;

  .name {
    font-size: 2.4rem;
    padding-bottom: 0.2rem;
  }

  .title {
    font-size: 3rem;
  }

  .description {
    padding: 1.2rem 0;

    p:first-of-type {
      padding-bottom: 1.2rem;
    }
  }

  .buttons-section {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.8rem 0 2.4rem 0;

    @media screen and (max-width: 368px) {
      flex-direction: column;
      width: 300px;
    }
  }
`;
