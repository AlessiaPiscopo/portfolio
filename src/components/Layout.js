import React from "react"
import Navbar from "./Navbar"

// children prop represents the children between <Layout></Layout>
function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Designed & Developed by Alessia Piscopo</p>
      </footer>
    </div>
  )
}

export default Layout
