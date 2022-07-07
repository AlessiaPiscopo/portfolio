import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

function Projects() {
  return (
    <Layout>
      <div className={portfolio}>
        <h1>Projects</h1>
        <h2>Some of my projects</h2>
      </div>
    </Layout>
  )
}

export default Projects
