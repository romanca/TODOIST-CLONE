import React from "react";
import Icon from "../shared/Icon";
import styled from "styled-components";
import TodoItemDropDown from "./TodoItemDropDownMenu";
import useVisibiltyState from "../hooks/useVisibiltyState";
import { useTodoActions } from "../Providers/ItemProvider";

const MainTodoItemContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  border-bottom: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.background3};
  display: flex;
  align-items: stretch;
  position: relative;
  padding: ${(props) => props.theme.spaces[28]};
  cursor: pointer;
  padding: ${(props) => props.theme.spaces[43]}
    ${(props) => props.theme.spaces[28]};
  margin-top: ${(props) => props.theme.spaces[62]};
`;
const MainDropDownIconButtonContainer = styled.div`
  position: absolute;
  left: ${(props) => props.theme.spaces[63]};
  width: ${(props) => props.theme.spaces[64]};
  padding-right: ${(props) => props.theme.spaces[0]};
  display: flex;
`;
const DropDownIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.spaces[12]};
  cursor: move;
  color: grey;
  border-radius: ${(props) => props.theme.spaces[0]};
  width: ${(props) => props.theme.spaces[12]};
`;
const CheckBoxContainer = styled.div`
  z-index: ${(props) => props.theme.spaces[35]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  cursor: pointer;
  margin-right: ${(props) => props.theme.spaces[2]};
`;
const CheckBoxButton = styled.span`
  height: ${(props) => props.theme.spaces[37]};
  width: ${(props) => props.theme.spaces[37]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.background4};
  border-radius: ${(props) => props.theme.spaces[25]};
`;
const TodoTitleContainer = styled.div`
  flex: ${(props) => props.theme.spaces[35]};
  margin-right: ${(props) => props.theme.spaces[20]};
  font-size: ${(props) => props.theme.spaces[14]}
  wordwrap: break-word;
  wordbreak: break-word;
`;
const TodoTitle = styled.div`
  display: flex;
  height: ${(props) => props.theme.spaces[27]};
  align-items: center;
  justify-content: flex-start;
  font-size: ${(props) => props.theme.spaces[14]};
`;
const TodoButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${(props) => props.theme.spaces[12]};
  margin-right: ${(props) => props.theme.spaces[65]};
  margin-top: ${(props) => props.theme.spaces[43]};
  padding-left: ${(props) => props.theme.spaces[37]};
  position: absolute;
  right: ${(props) => props.theme.spaces[28]};
  top: ${(props) => props.theme.spaces[28]};
  width: ${(props) => props.theme.spaces[66]};
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  outline: none;
  background-color: transparent;
`;
const TodoEditButton = styled.button`
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  color: ${(props) => props.theme.colors.text2};
  font-size: ${(props) => props.theme.spaces[14]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
const TodoScheduleButton = styled.button`
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  color: ${(props) => props.theme.colors.text2};
  font-size: ${(props) => props.theme.spaces[14]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;
const TodoCommentButton = styled.button`
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  color: ${(props) => props.theme.colors.text3};
  font-size: ${(props) => props.theme.spaces[14]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
const TodoDotsButton = styled.button`
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  color: ${(props) => props.theme.colors.text2};
  font-size: ${(props) => props.theme.spaces[67]};
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  outline: none;
  background-color: transparent;
`;
// const MainTodoItemDropDownContainer = styled.div`
//   position: absolute;
//   background-color: #fff;
//   border-radius: 3px;
//   border: 1px solid #ddd;
//   box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
//   list-style: none;
//   margin: 0;
//   padding: 4px 0px;
//   width: 250px;
//   margin-top: 20px;
//   margin-left: -10px;
// `;
// const MenuItem = styled.div`
//   padding: 4px 10px;
//   display: flex;
// `;
// const IconMenuContainer = styled.div`
//   color: grey;
//   height: 24px;
//   width: 24px;
//   margin-right: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Title = styled.span`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 13px;
// `;
// const MenuSeparator = styled.div`
//   margin: 4px;
//   border-bottom: 1px solid #ddd;
// `;
// const PriorityTitle = styled.div`
//   font-size: 11px;
//   margin-bottom: 1em;
// `;
// const PriorityItem = styled.div`
//   display: inline-block;
//   border: 1px solid transparent;
//   border-radius: 3px;
//   cursor: pointer;
//   width: 24px;
//   height: 24px;
//   padding: 1px;
//   font-size: 20px;
// `;
// const PriorityItemIconContainer = styled.div`
//   margin-left: 16px;
//   border: 1px solid transparent;
//   border-radius: 3px;
//   cursor: pointer;
//   width: 24px;
//   height: 24px;
//   padding: 1px;
//   font-size: 20px;
// `;
// const PriorityItemContainer = styled.div`
//   padding: 4px 10px;
// `;
// const IconItemsContainer = styled.div`
//   display: flex;
// `;

const TodoItem = ({ item }) => {
  const { open, handleOpenClose } = useVisibiltyState();
  const { handleSelectedTodo } = useTodoActions();

  const handleSelectTodo = (item) => {
    handleSelectedTodo(item);
    handleOpenClose();
  };

  return (
    <MainTodoItemContainer>
      <MainDropDownIconButtonContainer>
        <DropDownIconButtonContainer>
          <Icon name="th" />
        </DropDownIconButtonContainer>
      </MainDropDownIconButtonContainer>
      <CheckBoxContainer>
        <CheckBoxButton></CheckBoxButton>
      </CheckBoxContainer>
      <TodoTitleContainer>
        <TodoTitle>{item.title}</TodoTitle>
      </TodoTitleContainer>
      <TodoButtonsContainer>
        <TodoEditButton>
          <Icon name="edit" />
        </TodoEditButton>
        <TodoScheduleButton>
          <Icon name="calendar1" />
        </TodoScheduleButton>
        <TodoCommentButton>
          <Icon name="comment" />
        </TodoCommentButton>
        <TodoDotsButton onClick={() => handleSelectTodo(item)}>
          <Icon name="horizontalDots" />
        </TodoDotsButton>
        {open ? <TodoItemDropDown handleOpenClose={handleOpenClose} /> : ""}
      </TodoButtonsContainer>
    </MainTodoItemContainer>
  );
};

export default TodoItem;
