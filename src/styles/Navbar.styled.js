import styled from "styled-components";

// TODO: hamburger + slide-in sidebar menu in mobile view

export const StyledNavbar = styled.div`
  color: var(--color-gray-6);

  position: sticky;
  top: 0;
  z-index: 10;
  padding: 2.4rem 4.8rem;

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
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6.4rem;
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
