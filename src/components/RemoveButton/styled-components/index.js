import styled from "styled-components";

export const Icon = styled.svg`
  fill: salmon;
  stroke: none;
  stroke-width: 0.1;
  stroke-linejoin: round;
`;

export const StyledRemoveButton = styled.div`
  padding: 0;
  transition: all 0.25s;

  :hover {
    cursor: pointer;

    ${Icon} {
      fill: #d95e39;
    }
  }
`;
