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
    <>
      <StyledNavigation className="navigation">
        {isDesktop ? (
          // ---- desktop

          <NavDesktop>
            <div className="bg-semi-transparent">
              <nav className="nav-desktop">
                <ul className="nav-items">
                  <li className="logo">
                    <Link to="/">
                      <h1 className="logo-initials">AP</h1>
                    </Link>
                  </li>

                  <div className="links-right">
                    <li className="rotate-counter-clockwise">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>

                    <li className="rotate-clockwise">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>

                    <li className="rotate-counter-clockwise">
                      <Link to="/projects" className="nav-link">
                        Projects
                      </Link>
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
                    <li className="logo">
                      <Link to="/">
                        <div className="logo-initials">Alessia P.</div>
                      </Link>
                    </li>

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
    </>
  );
}
