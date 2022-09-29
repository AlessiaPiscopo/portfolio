import React from "react";
import "../styles/index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// The children property represents anything nested inside the Layout component (in this case, the website content)
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
