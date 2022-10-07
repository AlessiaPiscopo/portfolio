import React from "react";

// style
import { StyledHomePage } from "../styles/Home.styled";

// components
import Layout from "../components/Layout";
import BackgroundTexture from "../components/BackgroundTexture";

// sections
import Hero from "../pages/home/sections/Hero";
import Projects from "../pages/home/sections/Projects";
import About from "./home/sections/About";
import Contact from "../pages/home/sections/Contact";

// TODO: add 2-3 more project cards (including LesMontres, Webdev Toolbox, Sound Surround Landing Page, and tbd)
// TODO: edit/shorten About Me blurb

export default function Home() {
  return (
    <>
      <BackgroundTexture />

      <Layout>
        <StyledHomePage className="home">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </StyledHomePage>
      </Layout>
    </>
  );
}
