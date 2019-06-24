import styled from "styled-components";

export const StyledToDoList = styled.div`
  width: 600px;
  box-sizing: border-box;
  background: #f4f3f2;
  display: flex;
  margin: 0 auto;
  padding-right: 20px;

  > div {
    flex-grow: 2;
    align-self: center;
    display: flex;
    justify-content: flex-end;
    padding-right: 15px;
  }

  button:first-of-type {
    align-self: center;
  }
`;
