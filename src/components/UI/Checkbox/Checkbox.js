import React, { Fragment } from "react";

import { HiddenCheckbox, StyledCheckbox, Icon } from "../styled-components";

const checkbox = ({ checked, ...props }) => {
  return (
    <Fragment>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </Fragment>
  );
};

export default checkbox;
