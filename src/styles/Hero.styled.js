import styled from "styled-components";

export const StyledHero = styled.section`
  /* border: 2px solid blue; */

  background: url("/profile-pic-bw-square.png") no-repeat top fixed;
  background-size: cover;

  /* .profile-pic {
    border: 2px solid green;
    width: 100vw;
    z-index: -1;
  } */

  /* ---- full name, title, and description container */

  .intro {
    border: 2px solid red;
    background-color: rgba(3, 1, 2, 0.2);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* margin-top: clamp(50%, 80%, 90%); */
    /* padding: 0 3.2rem; */
    z-index: -1;

    /* child 1 */
    .intro-header {
      /* margin-bottom: auto; */

      .full-name {
        margin-bottom: 0.8rem;
        background-color: var(--color-black);
        /* padding: 0.4rem 1.2rem; */
      }

      .title {
        font-size: clamp(1.8rem, 2.5vw, 2.4rem);
        background-color: var(--clr-dark);
        padding: 0.4rem 1.2rem;
        /* margin-bottom: 2.4rem; */
      }
    }

    /* child 2 */
    .intro-description {
      padding: 1.2rem 0;
      max-width: 500px;

      p:first-of-type {
        padding-bottom: 1.2rem;
      }

      margin-bottom: 2.4rem;
    }

    .buttons-section {
      display: flex;
      align-items: center;
      gap: 2.4rem;
      /* margin-bottom: 2.4rem; */
    }
  }
`;
