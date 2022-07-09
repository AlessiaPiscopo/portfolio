import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import {
  projectDetails,
  htmlContent,
  bannerImgContainer,
} from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, bannerImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={projectDetails}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={bannerImgContainer}>
          <GatsbyImage
            image={bannerImg.childImageSharp.gatsbyImageData}
            alt="banner image"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className={htmlContent}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetailsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        slug
        title
        bannerImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
