import React from "react";
import "../index.css";
import useMediaQuery from "../hooks/useMediaQuery";
import { StyledLayout } from "../styles/Layout.styled";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <StyledLayout>
      <Navigation isDesktop={isDesktop} />
      <main className="content">{children}</main>
      <Footer />
    </StyledLayout>
  );
}
