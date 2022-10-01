import React from "react";
import { Link } from "gatsby";
import { StyledNavbar, Nav, MenuContainer } from "../styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Nav className="nav">
        {/* Logo */}
        <Link to="/" className="initials">
          AP
        </Link>

        <MenuContainer className="menu-container">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          {/* Resume - Google Drive link */}
        </MenuContainer>
      </Nav>
    </StyledNavbar>
  );
}
