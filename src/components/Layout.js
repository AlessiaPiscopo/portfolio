import React from "react";
import "../index.css";

import { Container } from "./Layout.styled";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </Container>
  );
}
