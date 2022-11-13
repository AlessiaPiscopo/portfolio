import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";

export default function Home() {
  return (
    <Layout>
      <div className="page-container">
        <div className="home" id="home">
          <Hero />
          <Skills />
          <About />
        </div>
      </div>
    </Layout>
  );
}
