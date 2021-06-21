import React from "react";
import Icon from "../shared/Icon";
import styled from "styled-components";
import useVisibiltyState from "../hooks/useVisibiltyState";
import EditTodoInput from "./EditTodoInput";
import TodoItemDropDown from "./DropDowns/TodoItemDropDownMenu";
import TodoItemDatePicker from "./Pickers/TodoItemDatePicker";
import { useTodoActions } from "../Providers/ItemProvider";
import { inboxId } from "../shared/constants";
import { useDefaultTodos } from "../hooks/selectors";

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
  height: ${(props) => props.theme.spaces[32]};
  width: ${(props) => props.theme.spaces[32]};
  // border: ${(props) => props.theme.spaces[8]} solid
  //   ${(props) => props.theme.colors.background4};
  border-radius: ${(props) => props.theme.spaces[25]};
`;

const TodoTitleContainer = styled.div`
  flex: ${(props) => props.theme.spaces[35]};
  margin-right: ${(props) => props.theme.spaces[20]};
  font-size: ${(props) => props.theme.spaces[14]}
  wordwrap: break-word;
  wordbreak: break-word;
  display: flex;
  margin-bottom: 3px;
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

const TodoItem = ({ item }) => {
  const { completeTodo } = useTodoActions();
  const { toggle, handleToggle, hover, handleHover } = useVisibiltyState();
  const [date, setDate] = React.useState("");
  // const projectItems = useDefaultTodos();

  // const project = React.useMemo(
  //   () => Object.values(projectItems).find((i) => i.id === item.categoryId),
  //   [projectItems, item.categoryId]
  // );

  const handleCompleteTodo = (item) => {
    completeTodo(item);
    setTimeout(() => {
      completeTodo(item);
    }, 500);
  };

  return (
    <div>
      {!item.visible ? (
        <div>
          {!toggle ? (
            <MainTodoItemContainer>
              <MainDropDownIconButtonContainer>
                <DropDownIconButtonContainer>
                  <Icon name="th" />
                </DropDownIconButtonContainer>
              </MainDropDownIconButtonContainer>
              <CheckBoxContainer onClick={() => handleCompleteTodo(item)}>
                <CheckBoxButton
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  style={{
                    border:
                      item.priority.id === "priority4"
                        ? "1px solid grey"
                        : `2px solid ${item.priority.color}`,
                    background:
                      item.priority.id === "priority1"
                        ? "rgba(209,69,59,.1)"
                        : item.priority.id === "priority2"
                        ? "rgba(235,137,9,.1)"
                        : item.priority.id === "priority3" &&
                          "rgba(36,111,224,.1)",
                  }}
                >
                  {hover && (
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 8,
                        fontWeight: 100,
                        background:
                          item.priority.id === "priority4" &&
                          "hsla(0,0%,50.2%,.1)",
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
                    </div>
                  )}
                </CheckBoxButton>
              </CheckBoxContainer>
              <div
                style={{
                  flex: 1,
                  padding: "2px 0",
                  marginRight: 30,
                }}
              >
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
              </div>
              <TodoButtonsContainer>
                <TodoEditButton onClick={handleToggle}>
                  <Icon name="edit" />
                </TodoEditButton>
                <TodoScheduleButton>
                  <Icon name="calendar1" />
                </TodoScheduleButton>
                <TodoCommentButton>
                  <Icon name="comment" />
                </TodoCommentButton>
                <TodoDotsButton>
                  <TodoItemDropDown item={item} handleToggle={handleToggle} />
                </TodoDotsButton>
              </TodoButtonsContainer>
            </MainTodoItemContainer>
          ) : (
            <EditTodoInput handleToggle={handleToggle} item={item} />
          )}
        </div>
      ) : (
        <div>
          {!toggle ? (
            <MainTodoItemContainer>
              <MainDropDownIconButtonContainer>
                <DropDownIconButtonContainer>
                  <Icon name="th" />
                </DropDownIconButtonContainer>
              </MainDropDownIconButtonContainer>
              <CheckBoxContainer onClick={() => handleCompleteTodo(item)}>
                <CheckBoxButton
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  style={{
                    background: "grey",
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 10,
                      fontWeight: 100,
                      color: "white",
                    }}
                  >
                    <Icon
                      name="check"

                      // color={
                      //   item.priority.id === "priority1"
                      //     ? item.priority.color
                      //     : item.priority.id === "priority2"
                      //     ? item.priority.color
                      //     : item.priority.id === "priority3"
                      //     ? item.priority.color
                      //     : item.priority.id === "priority4" &&
                      //       item.priority.color
                      // }
                    />
                  </div>
                </CheckBoxButton>
              </CheckBoxContainer>
              <div
                style={{
                  flex: 1,
                  padding: "2px 0",
                  marginRight: 30,
                }}
              >
                <TodoTitleContainer>
                  <TodoTitle
                    style={{ textDecoration: "line-through", color: "grey" }}
                  >
                    {item.title}
                  </TodoTitle>
                </TodoTitleContainer>
                {item.date && (
                  <TodoItemDatePicker
                    selected={date}
                    item={item}
                    onChange={setDate}
                  />
                )}
              </div>
              <TodoButtonsContainer>
                <TodoEditButton onClick={handleToggle}>
                  <Icon name="edit" />
                </TodoEditButton>
                <TodoScheduleButton>
                  <Icon name="calendar1" />
                </TodoScheduleButton>
                <TodoCommentButton>
                  <Icon name="comment" />
                </TodoCommentButton>
                <TodoDotsButton>
                  <TodoItemDropDown item={item} handleToggle={handleToggle} />
                </TodoDotsButton>
              </TodoButtonsContainer>
            </MainTodoItemContainer>
          ) : (
            <EditTodoInput handleToggle={handleToggle} item={item} />
          )}
        </div>
      )}
    </div>
  );
};

export default TodoItem;
