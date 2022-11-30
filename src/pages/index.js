import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
// import About from "../components/About";
// import Skills from "../components/Skills";

export default function Home() {
  return (
    <Layout>
      <div className="page-container">
        <div className="home" id="home">
          <Hero />
          {/* <About /> */}
          {/* <Skills /> */}
        </div>
      </div>
    </Layout>
  );
}
