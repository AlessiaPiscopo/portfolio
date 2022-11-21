import styled from "styled-components";

export const StyledHero = styled.section`
  border: 2px solid blue;
  background: url("/profile-pic-bw-square.png") no-repeat top fixed;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;

  .bg-container {
    background-color: rgba(300, 300, 300, 0.15);
    min-height: 100vh;
    width: 100vw;
    /* place red box in center */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* RED BOX */
  .intro-container {
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2.4rem;

    @media (min-width: 768px) {
      height: fit-content;
      flex-direction: row;
      /* padding: 8rem 4.8rem; */
    }

    img.profile-pic {
      display: none;

      @media (min-width: 768px) {
        display: block;
        max-height: 500px;
      }
    }

    /* PINK BOX */
    .intro-content {
      /* border: 2px solid pink; */
      max-width: 550px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2.4rem;

      /* @media (min-width: 768px) {
        align-items: flex-start;
        justify-content: flex-start;
      } */

      .intro-header {
        /* border: 2px solid blue; */
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 768px) {
          /* align-items: flex-start; */
          /* justify-content: flex-start; */
        }

        .full-name {
          font-size: 2.4rem;
          margin-bottom: 1.2rem;
          background-color: transparent;
        }

        .title {
          width: 325px;
          text-align: center;
          font-size: 2.4rem;
          padding: 0.4rem 4.5rem;
          background-color: var(--clr-dark);
          transform: rotate(-3deg);
        }
      }

      .intro-description {
        /* border: 2px solid yellow; */
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem 0;

        p {
          line-height: 2;
        }

        @media (min-width: 768px) {
          text-align: left;
          padding: 4.8rem 0;
          align-items: flex-start;
        }
      }

      .buttons-section {
        /* border: 2px solid white; */
        width: 325px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3.2rem;
        text-align: center;
        padding-bottom: 2.4rem;

        a {
          font-size: 2.4rem;
          background-color: var(--clr-dark);
        }

        @media (min-width: 768px) {
          display: none;
        }
      }

      /* learn more link */
      a[href="#about"] {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        font-weight: var(--fw-bold);

        &:hover {
          text-decoration: line-through;
        }
      }
    }
  }
`;
