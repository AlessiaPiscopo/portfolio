import React from "react";
import { Link } from "gatsby";
import { StyledNavbar, Nav, MenuContainer } from "../styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar className="navbar">
      <Nav className="nav">
        <Link to="/" className="initials">
          AP
        </Link>

        <MenuContainer className="menu-container">
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </MenuContainer>
      </Nav>
    </StyledNavbar>
  );
}
