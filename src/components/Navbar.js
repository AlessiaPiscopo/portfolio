import { Link } from "gatsby";
import React from "react";
import { StyledNavbar } from "./Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar className="navbar">
      <nav>
        <ul>
          <li className="initials">
            <Link to="/" className="initials-link">
              ap.
            </Link>
          </li>

          <div className="links-right">
            <li>
              <a href="#about" className="about-link">
                About
              </a>
            </li>

            <li>
              <a
                href="https://github.com/AlessiaPiscopo"
                target="_blank"
                className="projects-link"
              >
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="contact-link">
                Contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </StyledNavbar>
  );
}
