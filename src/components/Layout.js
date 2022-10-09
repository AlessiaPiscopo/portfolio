import React from "react";

// style
import "../styles/index.css";
import { StyledLayout } from "../styles/Layout.styled";

// components
import Navbar from "./Navbar";
// import Footer from "./Footer";

// The children property represents anything that will be nested inside the Layout component (in this case, the website content)
export default function Layout({ children }) {
  return (
    <StyledLayout className="layout">
      <Navbar />
      <main className="content">{children}</main>
      {/* <Footer /> */}
    </StyledLayout>
  );
}
