import React from "react";

import { StyledInput } from "./styled-components";

const itemInput = props => {
  const { onChange } = props;
  return (
    <StyledInput onChange={e => onChange(e)} placeholder="something to do" />
  );
};

export default itemInput;
