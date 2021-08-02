import React from "react";
import styled, { useTheme } from "styled-components";
import useVisibiltyState from "../../../hooks/useVisibiltyState";
import EditTodoInput from "../../Inputs/EditTodoInput";
import { useTodoActions } from "../../../Providers/ItemProvider";
import { useDefaultTodos } from "../../../hooks/selectors";
import Icon from "../../../shared/Icon";
import { inboxId } from "../../../shared/constants";
import TodoItemDropDown from "../../DropDowns/TodoItemDropDownMenu";

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
  font-size: ${(props) => props.theme.spaces[14]};
  wordwrap: break-word;
  wordbreak: break-word;
  display: flex;
  margin-bottom: ${(props) => props.theme.spaces[0]};
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
  /* margin-right: ${(props) => props.theme.spaces[65]}; */
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

const Container = styled.div``;

const CheckBoxIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[37]};
  height: ${(props) => props.theme.spaces[37]};
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

const ProjectContainer = styled.div`
  width: ${(props) => props.theme.spaces[27]};
  float: right;
  margin-top: ${(props) => props.theme.spaces[0]};
`;

const ProjectTitleContainer = styled.div`
  float: right;
  margin-right: ${(props) => props.theme.spaces[97]};
  font-size: ${(props) => props.theme.spaces[15]};
  color: ${(props) => props.theme.colors.text7};
`;

const TodayProjectItem = ({ item }) => {
  const {
    toggle,
    handleToggle,
    handleHover,
    hover,
    handleOpenClose,
    open,
    ref,
    handleClose,
  } = useVisibiltyState();
  const { completeTodo } = useTodoActions();
  const projectItems = useDefaultTodos();
  const project = React.useMemo(
    () =>
      item
        ? Object.values(projectItems).find((i) => i.id === item.categoryId)
        : [],
    [projectItems, item.categoryId]
  );
  const { colors } = useTheme();

  const handleCompleteTodo = (item) => {
    completeTodo(item);
    setTimeout(() => {
      completeTodo(item);
    }, 500);
  };

  const handleEditTodo = () => {
    handleToggle();
    handleClose();
  };

  if (!item || !project) return null;

  return (
    <Container>
      {!toggle ? (
        <MainTodoItemContainer>
          <MainDropDownIconButtonContainer></MainDropDownIconButtonContainer>
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
                    : item.priority.id === "priority3" && colors["text8"],
              }}
            >
              {hover && (
                <CheckBoxIconContainer
                  style={{
                    background:
                      item.priority.id === "priority4" && colors["muted13"],
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
            <ProjectContainer>
              <ProjectTitleContainer>
                <span style={{ marginRight: 5 }}>{project.title}</span>
                {project.id === inboxId ? (
                  project.icon
                ) : (
                  <Icon name="dot" color={project.color.color} />
                )}
              </ProjectTitleContainer>
            </ProjectContainer>
          </TitleContainer>
          <TodoButtonsContainer>
            <TodoEditButton onClick={handleEditTodo}>
              <Icon name="edit" />
            </TodoEditButton>
            <TodoDotsButton>
              <TodoItemDropDown
                item={item}
                handleToggle={handleToggle}
                handleOpenClose={handleOpenClose}
                open={open}
                divRef={ref}
              />
            </TodoDotsButton>
          </TodoButtonsContainer>
        </MainTodoItemContainer>
      ) : (
        <EditTodoInput handleToggle={handleToggle} item={item} />
      )}
    </Container>
  );
};

export default TodayProjectItem;
