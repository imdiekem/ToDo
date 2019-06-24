import React from "react";

import { StyledRemoveButton, Icon } from "./styled-components";

const removeButton = props => {
  const { removeItem, id } = props;
  return (
    <StyledRemoveButton>
      <Icon width="24" height="4" viewBox="0 0 24 4">
        <path
          d="M0 0 L24 0 L24 4 L0 4 z"
          id={id}
          onClick={e => removeItem(e)}
        />
      </Icon>
    </StyledRemoveButton>
  );
};

export default removeButton;
