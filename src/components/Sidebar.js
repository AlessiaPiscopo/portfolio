import React from "react";
import { Link } from "gatsby";

import { StyledSidebar } from "./Sidebar.styled";

export default function Sidebar() {
  return (
    <StyledSidebar className="sidebar">
      <nav>
        <Link to="/" className="initials">
          AP
        </Link>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </StyledSidebar>
  );
}
