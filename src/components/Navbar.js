import { Link } from "gatsby"
import React from "react"

function Navbar() {
  return (
    <nav>
      <h1>Alessia</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
