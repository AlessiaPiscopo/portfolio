import React from "react";

import { StyledFooter } from "../styles/--Footer.styled";

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <a href="mailto:alessia.piscopo@hotmail.com" class="footer__link">
        alessia.piscopo@hotmail.com
      </a>
      <ul class="social-list">
        <li class="social-list__item">
          <a class="social-list__link">a</a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link">b</a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link">c</a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link">d</a>
        </li>
      </ul>

      {/* <span className="copyright-symbol">©</span> 2022 Alessia Piscopo */}
    </StyledFooter>
  );
}
