import React from "react";

import { StyledStackListItem } from "../styles/StackListItem.styled";

export default function StackListItem({ children }) {
  return (
    <StyledStackListItem className="stack-list-item">
      {children}
    </StyledStackListItem>
  );
}
