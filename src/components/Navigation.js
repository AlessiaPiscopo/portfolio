import { Link, navigate } from "gatsby";
import React, { useState } from "react";

import {
  StyledNavigation,
  NavMobile,
  NavDesktop,
} from "../styles/Navigation.styled";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navigation({ isDesktop }) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const handleCloseClick = () => {
    setIsMenuClicked(false);
  };

  return (
    <>
      <StyledNavigation className="navigation">
        {isDesktop ? (
          // ---- desktop

          <NavDesktop>
            <div className="bg-semi-transparent">
              <nav className="nav-desktop">
                <ul className="nav-items">
                  <li className="logo rotate-counter-clockwise">
                    <Link to="/">
                      <h1 className="logo-initials">AP</h1>
                    </Link>
                  </li>

                  <div className="links-right">
                    {/* <li>
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li> */}

                    <li className="rotate-clockwise">
                      {/* <li> */}
                      <Link to="/" className="nav-link">
                        About
                      </Link>
                    </li>

                    {/* <li>
                      <Link to="/projects" className="nav-link">
                        Projects
                      </Link>
                    </li> */}
                    <li>
                      <a
                        href="https://github.com/AlessiaPiscopo"
                        target="_blank"
                        className="nav-link"
                      >
                        GitHub
                      </a>
                    </li>

                    <li className="rotate-clockwise">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          </NavDesktop>
        ) : (
          // ---- mobile
          <div className="nav-mobile-container">
            <div className="open-menu-btn-container">
              <button
                className={isMenuClicked ? "hidden" : "open-menu-btn"}
                onClick={handleMenuClick}
              >
                <AiOutlineMenu size="28" className="menu-icon" />
              </button>
            </div>

            {isMenuClicked && (
              <NavMobile>
                <div className="close-menu-btn-container">
                  <button className="close-menu-btn" onClick={handleCloseClick}>
                    <AiOutlineClose size="25" />
                  </button>
                </div>

                <nav className="nav-mobile">
                  <ul className="nav-items">
                    {/* <li className="logo">
                      <Link to="/">
                        <div className="logo-initials">Alessia P.</div>
                      </Link>
                    </li> */}

                    <li className="nav-header">
                      <Link
                        to="/"
                        onClick={handleCloseClick}
                        className={isMenuClicked ? "nav-header-link" : "hidden"}
                      >
                        <h1 className="full-name">Alessia P.</h1>
                        <h2 className="title">Web Developer</h2>
                      </Link>
                    </li>

                    {/* <li className="rotate-clockwise">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li> */}

                    <li className="rotate-counter-clockwise">
                      <Link
                        to="/"
                        onClick={handleCloseClick}
                        className={isMenuClicked ? "nav-link" : "hidden"}
                      >
                        About
                      </Link>
                    </li>

                    <li className="rotate-clockwise">
                      <a
                        href="https://github.com/AlessiaPiscopo"
                        target="_blank"
                        className="nav-link"
                      >
                        GitHub
                      </a>
                    </li>

                    <li className="rotate-counter-clockwise">
                      <Link
                        to="/contact"
                        onClick={handleCloseClick}
                        className={isMenuClicked ? "nav-link" : "hidden"}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </NavMobile>
            )}
          </div>
        )}
      </StyledNavigation>
    </>
  );
}
