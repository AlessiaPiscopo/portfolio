import React from "react"
import Layout from "../../components/Layout"
import {
  projectsContainer,
  projectsGrid,
  projectCard,
} from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"

function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={projectsContainer}>
        <h1>Projects</h1>
        <h2>Some of my projects</h2>

        <div className={projectsGrid}>
          {projects.map(project => (
            <Link
              className={projectCard}
              to={`/projects/${project.frontmatter.slug}`}
              key={project.id}
            >
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

// export page query
export const query = graphql`
  query ProjectsList {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`
