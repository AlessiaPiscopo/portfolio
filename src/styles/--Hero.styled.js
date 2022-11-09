import styled from "styled-components";

export const StyledHero = styled.section`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .name {
    font-family: "Impact Label", "Inconsolata", monospace;
    font-size: 2rem;
    margin-bottom: 0.8rem;
    background-color: var(--color-black);
    padding: var(--label-padding);
  }

  .title {
    font-family: "Impact Label", "Inconsolata", monospace;
    font-size: clamp(2rem, 2.5vw, 2.4rem);
    padding: var(--label-padding);
    background-color: var(--color-black);
  }

  .description {
    padding: 1.2rem 0;
    max-width: 550px;

    p:first-of-type {
      padding-bottom: 1.2rem;
    }
  }

  .buttons-section {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.2rem 0 2.4rem 0;

    @media screen and (max-width: 368px) {
      flex-direction: column;
      width: 300px;
    }
  }
`;
