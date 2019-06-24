import React, { Fragment } from "react";

import ListItem from "../ListItem";
import RemoveButton from "../RemoveButton";

import { StyledToDoList } from "./styled-components";

const renderList = (
  listItems,
  updateListItem,
  checkListItem,
  removeListItem
) => {
  return [...listItems].map((lItem, idx) => {
    return (
      <StyledToDoList>
        <ListItem
          key={lItem.listItemId + idx}
          value={lItem.listItemValue}
          listItemId={lItem.listItemId}
          updateListItem={updateListItem}
          checkListItem={checkListItem}
          itemChecked={lItem.listItemChecked}
        />
        <RemoveButton id={lItem.listItemId} removeItem={removeListItem} />
      </StyledToDoList>
    );
  });
};

const toDoList = props => {
  const { list, updateListItem, checkListItem, removeListItem } = props;
  return (
    <div>{renderList(list, updateListItem, checkListItem, removeListItem)}</div>
  );
};

export default toDoList;
