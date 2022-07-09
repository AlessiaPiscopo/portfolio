import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home({ data }) {
  return (
    <div className="home">
      <Layout>
        <section className={header}>
          <div>
            <h2>Design</h2>
            <h3>Develop & Deploy</h3>
            <p>Full-Stack Web Developer based in Montreal, QC. </p>
            <Link className={btn} to="/projects">
              Check out my projects
            </Link>
          </div>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="banner"
          />
        </section>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
