import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">AP</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
