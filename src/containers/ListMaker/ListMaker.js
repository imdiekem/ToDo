import React, { PureComponent } from "react";

import ListHeader from "../../components/ListHeader";
import ToDoList from "../../components/ToDoList";

import { StyledAppWrap } from "../../components/UI/styled-components";

class ListMaker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          listItemValue: "something I don't want to do",
          listItemId: "something I don't want to do",
          listItemChecked: false
        },
        {
          listItemValue: "something my wife wants me to do",
          listItemId: "something my wife wants me to do",
          listItemChecked: false
        },
        {
          listItemValue:
            "something that falls into both of the first two categories",
          listItemId:
            "something that falls into both of the first two categories",
          listItemChecked: false
        }
      ],
      newListItem: ""
    };

    this.updateListItem = this.updateListItem.bind(this);
    this.updateNewListItem = this.updateNewListItem.bind(this);
    this.checkListItem = this.checkListItem.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  addListItem() {
    let newListState = [...this.state.list];
    const itemToAdd = this.state.newListItem;
    const itemExists = this.state.list.find(
      item => item.listItemValue === itemToAdd
    );

    if (itemExists || itemToAdd.length === 0) {
      return;
    }

    newListState = newListState.concat({
      listItemValue: itemToAdd,
      listItemId: itemToAdd,
      listItemChecked: false
    });

    this.setState({
      list: newListState
    });
  }

  removeListItem(e) {
    const targetValue = e.target.id;
    let newListState = [...this.state.list];
    newListState = newListState.filter(item => item.listItemId !== targetValue);
    this.setState({
      list: newListState
    });
  }

  updateListItem(e) {
    const newValue = e.target.value;
    const targetValue = e.target.id;
    const newListState = [...this.state.list];
    newListState.find(
      item => item.listItemId === targetValue
    ).listItemValue = newValue;
    this.setState({
      list: newListState
    });
  }

  updateNewListItem(e) {
    const newValue = e.target.value;
    this.setState({
      newListItem: newValue
    });
  }

  checkListItem(e) {
    const targetValue = e.target.id;
    const newListState = [...this.state.list];
    const thisListItem = newListState.find(
      item => item.listItemId === targetValue
    );
    thisListItem.listItemChecked = !thisListItem.listItemChecked;

    this.setState({
      list: newListState
    });
  }

  render() {
    const { list } = this.state;
    return (
      <StyledAppWrap>
        <ListHeader
          updateNewListItem={this.updateNewListItem}
          addListItem={this.addListItem}
        />
        <ToDoList
          removeListItem={this.removeListItem}
          updateListItem={this.updateListItem}
          checkListItem={this.checkListItem}
          list={list}
        />
      </StyledAppWrap>
    );
  }
}

export default ListMaker;
