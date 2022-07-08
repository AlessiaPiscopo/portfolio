import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home() {
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
          <img
            src="/portfolio-banner.jpg"
            alt="portfolio banner"
            style={{ maxWidth: "100%" }}
          />
        </section>
      </Layout>
    </div>
  )
}
