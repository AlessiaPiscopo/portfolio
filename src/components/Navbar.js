import { Link } from "gatsby";
import React from "react";
import { StyledNavbar } from "../styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar className="navbar">
      <div className="logo">
        <div className="logo__initials">AP.</div>
      </div>

      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>

      <nav className="nav">
        <ul className="nav__nav-list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/projects" className="nav__link">
              Projects
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </StyledNavbar>
  );
}
