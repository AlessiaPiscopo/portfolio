import React from "react";
import { Link } from "gatsby";

import { StyledSidebar } from "./Sidebar.styled";

export default function Sidebar() {
  return (
    <StyledSidebar className="sidebar">
      <nav>
        <ul>
          <li className="initials">
            <Link to="/" className="initials-link">
              ap.
            </Link>
          </li>

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
        </ul>
      </nav>
    </StyledSidebar>
  );
}
