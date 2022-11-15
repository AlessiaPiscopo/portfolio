import styled from "styled-components";

export const StyledHero = styled.section`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .full-name {
    margin-bottom: 1.2rem;
    background-color: var(--color-black);
    padding: 0.4rem 1.2rem;
  }

  .title {
    font-size: clamp(2rem, 2.5vw, 2.4rem);
    background-color: var(--clr-dark);
    padding: 0.4rem 1.2rem;
    margin-bottom: 4.8rem;
  }

  .profile-pic {
    max-width: 350px;
  }

  .description {
    padding: 1.2rem 0;
    max-width: 550px;

    p:first-of-type {
      padding-bottom: 1.2rem;
    }

    margin-bottom: 1.6rem;
    /* margin-top: -2rem; */
  }

  .buttons-section {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;
