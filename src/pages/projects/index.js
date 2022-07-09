import React from "react"
import Layout from "../../components/Layout"
import {
  projectsContainer,
  projectsGrid,
  projectCard,
} from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  // we use data.projects.nodes instead of data.allMarkdownRemark.nodes because we gave the allMarkdownRemark property the name "projects" in our query
  const projects = data.projects.nodes

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
              <GatsbyImage
                image={
                  project.frontmatter.thumbnail.childImageSharp.gatsbyImageData
                }
                alt="project thumbnail"
              />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>

        {/* This contact section is to show how we can query multiple data items in one component by naming the data properties (see query below) */}
        <p>
          Like my work? Let's collaborate! Contact me at{" "}
          <strong>{data.contact.siteMetadata.contact}</strong>
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }

    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
