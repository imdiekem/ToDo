import styled from "styled-components";

export const Icon = styled.svg`
  fill: #39d95e;
  stroke: none;
  stroke-width: 0.1;
  stroke-linejoin: round;
`;

export const StyledAddButton = styled.div`
  display: inline-block;
  padding: 0 15px;
  transition: all 0.25s;

  :hover {
    cursor: pointer;

    ${Icon} {
      fill: #14b339;
    }
  }
`;
