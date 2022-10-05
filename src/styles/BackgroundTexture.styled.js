import styled from "styled-components";

export const StyledBackgroundTexture = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/texture-gray.jpeg");
  position: absolute;
  left: 0;
  z-index: -1;
  filter: brightness(120%) grayscale(100%);

  opacity: 0.25;
`;
