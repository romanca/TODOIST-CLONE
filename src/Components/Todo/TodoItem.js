import React from "react";
import styled, { useTheme } from "styled-components";
import { useTodoActions } from "../../Providers/ItemProvider";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import Icon from "../../shared/Icon";
import TodoItemDropDown from "../DropDowns/TodoItemDropDownMenu";
import EditTodoInput from "../Inputs/EditTodoInput";
import TodoItemDatePicker from "../Pickers/TodoItemDatePicker";

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
  height: ${(props) => props.theme.spaces[32]};
  width: ${(props) => props.theme.spaces[32]};
  border-radius: ${(props) => props.theme.spaces[25]};
  // z-index: 2;
`;

const TodoTitleContainer = styled.div`
  flex: ${(props) => props.theme.spaces[35]};
  margin-right: ${(props) => props.theme.spaces[20]};
  font-size: ${(props) => props.theme.spaces[14]}
  wordwrap: break-word;
  wordbreak: break-word;
  display: flex;
  margin-bottom:  ${(props) => props.theme.spaces[0]};
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
  justify-content: flex-end;
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
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    width: ${(props) => props.theme.spaces[12]};
    height: ${(props) => props.theme.spaces[12]};
    border-radius: ${(props) => props.theme.spaces[0]};
  }
`;

// const TodoScheduleButton = styled.button`
//   width: ${(props) => props.theme.spaces[12]};
//   height: ${(props) => props.theme.spaces[12]};
//   color: ${(props) => props.theme.colors.text2};
//   font-size: ${(props) => props.theme.spaces[14]};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: ${(props) => props.theme.spaces[8]} solid transparent;
//   outline: none;
//   cursor: pointer;
//   background-color: transparent;
// `;

// const TodoCommentButton = styled.button`
//   width: ${(props) => props.theme.spaces[12]};
//   height: ${(props) => props.theme.spaces[12]};
//   color: ${(props) => props.theme.colors.text3};
//   font-size: ${(props) => props.theme.spaces[14]};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: ${(props) => props.theme.spaces[8]} solid transparent;
//   outline: none;
//   background-color: transparent;
//   cursor: pointer;
// `;

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

const CheckBoxIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[32]};
  height: ${(props) => props.theme.spaces[32]};
  border-radius: ${(props) => props.theme.spaces[25]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[43]};
  font-weight: ${(props) => props.theme.spaces[7]};
`;

const TitleContainer = styled.div`
  flex: ${(props) => props.theme.spaces[35]};
  padding: ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[28]};
  margin-right: ${(props) => props.theme.spaces[20]};
`;

const Container = styled.div``;

const TodoItem = ({ item }) => {
  const { completeTodo } = useTodoActions();
  const {
    toggle,
    handleToggle,
    hover,
    handleHover,
    open,
    handleOpenClose,
    visible,
    handleVisible,
    handleVisibleOpen,
    handleVisibleClose,
    ref,
  } = useVisibiltyState();
  const [date, setDate] = React.useState("");
  const { colors } = useTheme();

  const handleCompleteTodo = (item) => {
    completeTodo(item);
    setTimeout(() => {
      completeTodo(item);
    }, 1000);
  };

  return (
    <Container>
      {!item.visible ? (
        <Container>
          {!toggle ? (
            <MainTodoItemContainer
              onMouseLeave={open ? handleVisibleOpen : handleVisibleClose}
              onMouseEnter={handleVisibleOpen}
            >
              {/* <MainDropDownIconButtonContainer>
                <DropDownIconButtonContainer>
                  <Icon name="th" />
                </DropDownIconButtonContainer>
              </MainDropDownIconButtonContainer> */}
              <CheckBoxContainer onClick={() => handleCompleteTodo(item)}>
                <CheckBoxButton
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  style={{
                    zIndex: 2,
                    border:
                      item.priority.id === "priority4"
                        ? "1px solid grey"
                        : `2px solid ${item.priority.color}`,
                    background:
                      item.priority.id === "priority1"
                        ? colors["accent3"]
                        : item.priority.id === "priority2"
                        ? colors["accent4"]
                        : item.priority.id === "priority3" && colors["accent5"],
                  }}
                >
                  {hover && (
                    <CheckBoxIconContainer
                      style={{
                        background:
                          item.priority.id === "priority4" && colors["muted3"],
                      }}
                    >
                      <Icon
                        name="check"
                        color={
                          item.priority.id === "priority1"
                            ? item.priority.color
                            : item.priority.id === "priority2"
                            ? item.priority.color
                            : item.priority.id === "priority3"
                            ? item.priority.color
                            : item.priority.id === "priority4" &&
                              item.priority.color
                        }
                      />
                    </CheckBoxIconContainer>
                  )}
                </CheckBoxButton>
              </CheckBoxContainer>
              <TitleContainer>
                <TodoTitleContainer>
                  <TodoTitle>{item.title}</TodoTitle>
                </TodoTitleContainer>
                {item.date && (
                  <TodoItemDatePicker
                    selected={date}
                    item={item}
                    onChange={setDate}
                  />
                )}
              </TitleContainer>
              {visible && (
                <TodoButtonsContainer>
                  <TodoEditButton onClick={handleToggle}>
                    <Icon name="edit" />
                  </TodoEditButton>
                  {/* <TodoScheduleButton>
                      <Icon name="calendar1" />
                    </TodoScheduleButton>
                    <TodoCommentButton>
                      <Icon name="comment" />
                    </TodoCommentButton> */}
                  <TodoDotsButton>
                    <TodoItemDropDown
                      item={item}
                      handleToggle={handleToggle}
                      open={open}
                      handleOpenClose={handleOpenClose}
                      ref={ref}
                    />
                  </TodoDotsButton>
                </TodoButtonsContainer>
              )}
            </MainTodoItemContainer>
          ) : (
            <EditTodoInput handleToggle={handleToggle} item={item} />
          )}
        </Container>
      ) : (
        <MainTodoItemContainer
          onMouseEnter={handleVisible}
          onMouseLeave={handleVisible}
        >
          <CheckBoxContainer onClick={() => handleCompleteTodo(item)}>
            <CheckBoxButton
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              style={{
                background: colors["text7"],
              }}
            >
              <CheckBoxIconContainer
                style={{
                  color: colors["background"],
                }}
              >
                <Icon name="check" />
              </CheckBoxIconContainer>
            </CheckBoxButton>
          </CheckBoxContainer>
          <TitleContainer>
            <TodoTitleContainer>
              <TodoTitle
                style={{
                  textDecoration: "line-through",
                  color: colors["text7"],
                }}
              >
                {item.title}
              </TodoTitle>
            </TodoTitleContainer>
          </TitleContainer>
          {open && (
            <TodoButtonsContainer>
              <TodoDotsButton>
                <TodoItemDropDown item={item} />
              </TodoDotsButton>
            </TodoButtonsContainer>
          )}
        </MainTodoItemContainer>
      )}
    </Container>
  );
};

export default TodoItem;
