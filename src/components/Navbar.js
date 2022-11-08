import { Link } from "gatsby";
import React from "react";
import { StyledNavbar } from "../styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar className="navbar">
      <nav>
        <ul>
          <li className="initials">
            <Link to="/" className="initials-link">
              AP.
            </Link>
          </li>

          <div className="links-right">
            <li>
              <Link to="/about" className="btn label-btn">
                About
              </Link>
            </li>

            <li>
              <a
                href="https://github.com/AlessiaPiscopo"
                target="_blank"
                className="btn label-btn"
              >
                GitHub
              </a>
            </li>

            <li>
              <Link to="/contact" className="btn label-btn">
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </StyledNavbar>
  );
}
