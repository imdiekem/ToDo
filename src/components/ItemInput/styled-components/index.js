import styled from "styled-components";

export const StyledInput = styled.input`
  background: #edebea;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  font-size: 1.4rem;
  line-height: 30px;
  border: none;
  border-radius: 4px;
  padding-left: 15px;
  margin-right: 10px;
  color: #918f8c;

  ::placeholder {
    font-style: italic;
    opacity: 0.3;
  }

  :focus {
    outline: none;
    transition: all 0.5s;
  }
`;
