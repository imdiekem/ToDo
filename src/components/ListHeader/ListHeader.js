import React from "react";

import { StyledListHeader } from "./styled-components";

import ItemInput from "../ItemInput";
import AddButton from "../AddButton";

const listHeader = props => {
  const { addListItem, updateNewListItem } = props;
  return (
    <StyledListHeader>
      <h1>
        To Do, <span>or not to do</span>?
      </h1>
      <ItemInput onChange={updateNewListItem} />
      <AddButton addItem={addListItem} />
    </StyledListHeader>
  );
};

export default listHeader;
