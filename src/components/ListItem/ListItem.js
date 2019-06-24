import React from "react";

import { StyledListItemWrapper } from "./styled-components";
import { StyledTextInput } from "../UI/styled-components";
import Checkbox from "../UI/Checkbox";

const listItem = props => {
  const {
    value,
    listItemId,
    updateListItem,
    checkListItem,
    itemChecked
  } = props;
  return (
    <StyledListItemWrapper>
      <label>
        <Checkbox
          id={listItemId}
          onClick={checkListItem}
          checked={itemChecked}
        />
      </label>
      <StyledTextInput
        id={listItemId}
        value={value}
        onChange={e => updateListItem(e)}
      />
    </StyledListItemWrapper>
  );
};

export default listItem;
