import styled from "styled-components";

export const StyledNavbar = styled.div`
  color: var(--color-gray-6);

  position: sticky;
  top: 0;
  z-index: 10;
  padding-bottom: 2rem;

  .initials {
    color: var(--color-opal);
    font-weight: bold;
    font-size: 1.8rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7.4rem;

  /* @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 0 1rem 0;
  } */
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5.2rem;
`;

// export const IconsNav = styled.div`
//   opacity: 0.85;

//   &:hover {
//     opacity: 1;
//   }
// `;

// export const StyledCartIcon = styled(BsCartFill)`
//   fill: #393c37;
//   width: 2.2rem;
//   height: 2.2rem;
//   margin-right: 0.7rem;
// `;

// export const StyledFacebookIcon = styled(BsFacebook)`
//   fill: #393c37;
//   width: 2.1rem;
//   height: 2.1rem;
// `;
