import styled from "styled-components";

export const StyledHero = styled.section`
  /* border: 2px solid blue; */
  color: white;

  background: url("/profile-pic-bw-square.png") no-repeat top fixed;
  background-size: cover;

  /* lighten bg */
  .bg-container {
    background-color: rgba(300, 300, 300, 0.15);
    width: 100%;
    min-height: 100vh;
    /* place red box in center */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* RED BOX */
  .intro-container {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      margin: 9.6rem 0;
      padding-left: 2.4rem;
    }

    img.profile-pic {
      display: none;

      @media (min-width: 992px) {
        display: block;
        max-width: 40%;
      }
    }

    /* PINK BOX */
    .intro-content {
      /* border: 2px solid pink; */
      /* max-width: 500px; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2.4rem;

      @media (min-width: 768px) {
        align-items: flex-start;
        text-align: left;
      }

      .intro-header {
        display: flex;
        flex-direction: column;
        align-items: center;

        .full-name {
          font-size: 2.4rem;
          margin-bottom: 1.2rem;
          background-color: transparent;

          @media (min-width: 768px) {
            margin-left: -50px;
          }
        }

        .title {
          width: 325px;
          text-align: center;
          font-size: 2.4rem;
          padding: 0.4rem 4.5rem;
          background-color: var(--clr-dark);
          transform: rotate(-2deg);
        }

        @media (min-width: 768px) {
          margin-left: -63px;
        }
      }

      .intro-description {
        /* border: 2px solid yellow; */
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        padding: 4.8rem 0;
        max-width: 350px;

        p {
          line-height: 2;
        }

        @media (min-width: 768px) {
          align-items: flex-start;
          text-align: left;
          gap: 1.2rem;
          padding: 3.2rem 0;
          max-width: 500px;
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
        padding-bottom: 3.2rem;

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
