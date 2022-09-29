import React from "react";
import "../styles/index.css";
import { StyledLayout } from "../styles/Layout.styled";

import Navbar from "./Navbar";
import Footer from "./Footer";

// The children property represents anything nested inside the Layout component (in this case, the website content)
export default function Layout({ children }) {
  return (
    <StyledLayout className="layout">
      <Navbar className="navbar" />
      <main className="content">{children}</main>
      <Footer className="footer" />
    </StyledLayout>
  );
}
