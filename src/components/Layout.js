import React, { useState } from "react";

import "../index.css";
import { Container, MenuIcon, Icon } from "./Layout.styled";
import { FiMenu, FiX } from "react-icons/fi";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showXicon, setShowXicon] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMenuIconClick = () => {
    // hide menu icon, show x icon, show sidebar
    setShowMenuIcon(false);
    setShowXicon(true);
    setShowSidebar(true);
  };

  const handleXiconClick = () => {
    // hide sidebar, hide x icon, show menu icon
    setShowSidebar(false);
    setShowXicon(false);
    setShowMenuIcon(true);
  };

  return (
    <Container>
      {showMenuIcon && (
        <Icon onClick={handleMenuIconClick}>
          <FiMenu size="25px" />
        </Icon>
      )}

      {showXicon && (
        <Icon>
          <FiX className="icon" size="25px" onClick={handleXiconClick} />
        </Icon>
      )}

      {showSidebar && <Sidebar />}

      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </Container>
  );
}
