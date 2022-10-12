import React from "react";

import { StyledPageSection } from "./PageSection.styled";

export default function PageSection({ children }) {
  return (
    <StyledPageSection className="page-section">{children}</StyledPageSection>
  );
}
