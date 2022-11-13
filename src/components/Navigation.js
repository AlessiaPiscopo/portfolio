// default view (mobile):
// menu icon at top left, all nav hidden
// on menu icon click-fullscreen nav slides in, with logo as first item and x icon top left
// on x icon click, hide nav, show menu icon

// bigger screen view (min-width: 768px)--ie at 768px and larger:
// hide mobile view nav
// show logo left, nav links right

import { Link } from "gatsby";
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
    <StyledNavigation className="navigation">
      {isDesktop ? (
        // ---- desktop

        <NavDesktop>
          <nav className="nav-desktop">
            <ul className="nav-items">
              <li className="logo">
                <Link to="/">
                  <h1 className="logo-initials rotate-counter-clockwise">AP</h1>
                </Link>
              </li>

              <div className="links-right">
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </NavDesktop>
      ) : (
        // ---- mobile
        <div className="nav-mobile-container">
          <div className="open-menu-btn-container">
            <button
              className={isMenuClicked ? "hidden" : "open-menu-btn"}
              onClick={handleMenuClick}
            >
              <AiOutlineMenu size="22" />
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
                      <div className="logo-initials">AP</div>
                    </Link>
                  </li> */}

                  <li className="rotate-clockwise">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="rotate-counter-clockwise">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>

                  <li className="rotate-clockwise">
                    <Link to="/projects" className="nav-link">
                      Projects
                    </Link>
                  </li>

                  <li className="rotate-counter-clockwise">
                    <Link to="/contact" className="nav-link">
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
  );
}
