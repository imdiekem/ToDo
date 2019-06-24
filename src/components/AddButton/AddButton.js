import React from "react";

import { StyledAddButton, Icon } from "./styled-components";

const addButton = props => {
  const { addItem } = props;
  return (
    <StyledAddButton onClick={() => addItem()}>
      <Icon width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 10 L10 10 L10 0 L14 0 L14 10 L24 10 L24 14 L14 14 L14 24 L10 24 L10 14 L0 14 z" />
      </Icon>
    </StyledAddButton>
  );
};

export default addButton;
