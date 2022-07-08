import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

function Navbar() {
  // query within a component (can only be made once per component)
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav className="nav">
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
