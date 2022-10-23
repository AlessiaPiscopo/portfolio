import React from "react";
import { Link } from "gatsby";

import { StyledSidebar } from "./Sidebar.styled";

export default function Sidebar() {
  return (
    <StyledSidebar className="sidebar">
      <nav>
        <ul>
          <li className="initials">
            <Link to="/">ap.</Link>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </StyledSidebar>
  );
}
