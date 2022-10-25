import React from "react";

import "../index.css";
import { Container } from "./Layout.styled";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Container>
      <Sidebar />
      <main className="content">{children}</main>
      <Footer />
    </Container>
  );
}
