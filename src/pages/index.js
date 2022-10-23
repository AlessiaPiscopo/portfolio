import React from "react";

import Layout from "../components/Layout";

// home sections
import Hero from "./home/Hero";
// import Projects from "./home/sections/Projects";
import About from "./home/About";
import Contact from "./home/Contact";

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <Hero />
        {/* <Projects /> */}
        <About />
        <Contact />
      </div>
    </Layout>
  );
}
