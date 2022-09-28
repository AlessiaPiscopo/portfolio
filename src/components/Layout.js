import React from "react";
import Navbar from "./Navbar";
import "../styles/index.css";

// The children property represents anything nested inside the Layout component (in this case, the website content)
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Designed & Developed by Alessia Piscopo © 2022 </p>
      </footer>
    </div>
  );
}
