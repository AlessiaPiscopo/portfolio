import styled from "styled-components";

export const StyledNavigation = styled.div`
  /* ---- common styles (mobile and desktop) */

  background-color: transparent;
  position: fixed;
  top: 0;
  font-family: var(--ff-secondary);
  font-size: 2.4rem;
  z-index: 1;

  .logo {
    width: fit-content;

    .logo-initials {
      background-color: var(--clr-dark);
      font-size: 3rem;
      font-weight: var(--fw-bold);
      padding: 0.4rem 1.2rem;
    }
  }

  // ---- mobile

  /* buttons */

  .open-menu-btn-container,
  .close-menu-btn-container {
    /* border: 2px solid blue; */
    position: fixed;
  }

  .open-menu-btn-container {
  }

  .open-menu-btn,
  .close-menu-btn {
    /* border: 2px solid yellow; */
    background-color: transparent;
    color: var(--clr-light);
    padding: 1.2rem;
  }

  .menu-icon {
    /* box-shadow: 1px 1px 20px black; */
    color: white;
  }
`;

export const NavMobile = styled.header`
  background: url("/texture-dark.jpg") no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  nav.nav-mobile {
    border: 2px solid red;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 1000;

    .nav-items {
      border: 2px solid purple;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6.4rem;

      .nav-link {
        background-color: var(--clr-dark);
        padding: 0.4rem 9.6rem;
      }

      .logo-initials {
        background-color: transparent;
        font-size: 2.6rem;
        padding-bottom: 2.4rem;
      }
    }
  }
`;

// ---- desktop

export const NavDesktop = styled.header`
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 0;
  width: 100vw;

  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.2rem 4.8rem;
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
