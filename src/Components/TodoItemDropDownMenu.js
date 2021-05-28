import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../hooks/useVisibiltyState";
import { useTodoActions } from "../Providers/ItemProvider";
import { useTodoMessageDialog } from "../Providers/ModalProvider";
import Icon from "../shared/Icon";

const MainTodoItemDropDownContainer = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
  list-style: none;
  margin: 0;
  padding: 4px 0px;
  width: 250px;
  // margin-top: 20px;
  margin-left: -120px;
`;
const MenuItem = styled.div`
  padding: 4px 10px;
  display: flex;
`;
const IconMenuContainer = styled.div`
  color: grey;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;
const MenuSeparator = styled.div`
  margin: 4px;
  border-bottom: 1px solid #ddd;
`;
const PriorityTitle = styled.div`
  font-size: 11px;
  margin-bottom: 1em;
  display: flex;
  justify-content: flex-start;
`;
const PriorityItem = styled.div`
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 1px;
  font-size: 20px;
`;
const PriorityItemIconContainer = styled.div`
  margin-left: 16px;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 1px;
  font-size: 20px;
`;
const PriorityItemContainer = styled.div`
  padding: 4px 10px;
`;
const IconItemsContainer = styled.div`
  display: flex;
`;

const TodoItemDropDown = ({ item, handleToggle }) => {
  const openTodoModal = useTodoMessageDialog();
  const { handleSelectedTodo } = useTodoActions();
  const { ref, open, handleOpenClose } = useVisibiltyState();

  const handleSelectTodo = (item) => {
    handleSelectedTodo(item);
    handleOpenClose();
  };

  return (
    <div ref={ref}>
      <div onClick={() => handleSelectTodo(item)}>
        <Icon name="horizontalDots" />
      </div>
      {open ? (
        <MainTodoItemDropDownContainer>
          <MenuItem onClick={handleToggle}>
            <IconMenuContainer>
              <Icon name="edit" />
            </IconMenuContainer>
            <Title>Edit task</Title>
          </MenuItem>
          <div onClick={handleOpenClose}>
            <MenuItem onClick={openTodoModal}>
              <IconMenuContainer>
                <Icon name="trash" />
              </IconMenuContainer>
              <Title>Remove task</Title>
            </MenuItem>
          </div>
          <MenuSeparator />
          <PriorityItemContainer>
            <PriorityTitle>Priority</PriorityTitle>
            <IconItemsContainer>
              <PriorityItem>
                <Icon name="flag1" color="rgb(222, 76, 74)" />
              </PriorityItem>
              <PriorityItemIconContainer>
                <Icon name="flag1" color="rgb(244, 156, 24)" />
              </PriorityItemIconContainer>
              <PriorityItemIconContainer>
                <Icon name="flag1" color="rgb(64, 115, 214)" />
              </PriorityItemIconContainer>
              <PriorityItemIconContainer>
                <Icon name="flag" color="#555" />
              </PriorityItemIconContainer>
            </IconItemsContainer>
          </PriorityItemContainer>
        </MainTodoItemDropDownContainer>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoItemDropDown;
