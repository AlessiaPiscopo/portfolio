import React from "react";
import "../index.css";

import { StyledLayout } from "../styles/Layout.styled";
import Navbar from "./Navbar";
import Footer from "./--Footer";

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </StyledLayout>
  );
}
