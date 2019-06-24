import styled from "styled-components";

export const Icon = styled.svg`
  fill: none;
  stroke: salmon;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox " })`
  border: 0;
  clip: rect() (0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: ${props => (props.checked ? "#edebea" : "#edebea")};
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  transition: all 150ms;

  :hover {
    cursor: pointer;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

export const StyledTextInput = styled.input`
  background: transparent;
  border: none;
  color: #918f8c;
  font-size: 1.4rem;
  line-height: 30px;

  :focus {
    outline: none;
    transition: all 0.5s;
    border-bottom: 1px solid #e0dfde;
  }
`;

export const StyledAppWrap = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  width: 600px;
  margin: 0 auto;
`;
