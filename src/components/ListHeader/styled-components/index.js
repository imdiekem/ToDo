import styled from "styled-components";

export const StyledListHeader = styled.div`
  width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
  background: #f4f3f2;
  display: flex;
  justify-content: center;
  padding: 20px 20px 40px;
  border-bottom: 1px dotted #d8d7d6;
  flex-wrap: wrap;

  input {
    flex-grow: 2;
  }

  div {
    align-self: center;
  }

  h1 {
    text-align: left;
    font-weight: bold;
    font-size: 3.4rem;
    flex-basis: 100%;
    margin-bottom: 40px;
    text-transform: uppercase;

    span {
      font-size: 2.4rem;
      text-transform: none;
      font-weight: normal;
      margin-right: 5px;
    }
  }
`;
