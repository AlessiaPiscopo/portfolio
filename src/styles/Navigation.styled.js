import styled from "styled-components";

export const StyledNavigation = styled.div`
  /* common styles (mobile and desktop) */

  background-color: transparent;
  width: 100vw;
  position: fixed;
  top: 0;
  font-family: var(--ff-secondary);
  font-size: 2.4rem;

  .logo {
    width: fit-content;

    .logo-initials {
      background-color: var(--clr-dark);
      font-size: 3rem;
      font-weight: var(--fw-bold);
      padding: 0.4rem 1.2rem;
    }
  }

  /* buttons */

  .open-menu-btn-container,
  .close-menu-btn-container {
    height: 5vh;
    width: 100vw;
  }

  .open-menu-btn-container {
    position: fixed;
  }

  .open-menu-btn,
  .close-menu-btn {
    background-color: transparent;
    color: var(--clr-light);
    padding: 1.2rem;
  }
`;

// ---- desktop

export const NavDesktop = styled.header`
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 0;

  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 4.8rem;
  }

  li {
    box-shadow: 1px 1px 50px black;
  }

  .nav-link {
    background-color: var(--clr-dark);
    font-size: 2rem;
    padding: 0.4rem 1.2rem;
  }

  .links-right {
    max-width: 75%;
    display: flex;
    gap: 4.8rem;
  }
`;

// ---- mobile

export const NavMobile = styled.header`
  background: url("/texture-dark.jpg") no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  z-index: 1000;

  .nav-mobile {
    width: 100%;
    height: 95vh;
    display: flex;
    justify-content: center;
    z-index: 1000;

    .nav-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6.4rem;
      margin-top: 9.6rem;

      .nav-link {
        background-color: var(--clr-dark);
        padding: 0.4rem 4.8rem;
      }

      .logo-initials {
        background-color: transparent;
      }
    }
  }
`;
