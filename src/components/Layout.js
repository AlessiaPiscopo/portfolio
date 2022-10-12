import React from "react";

import "../index.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
}
