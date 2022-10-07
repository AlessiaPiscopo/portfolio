import React from "react";

import { StyledPageSection } from "../styles/PageSection.styled";

export default function PageSection({ children }) {
  return (
    <>
      <StyledPageSection>{children}</StyledPageSection>
    </>
  );
}
