import React from "react";
import styled, { useTheme } from "styled-components";
// import DatePicker from "./Pickers/DatePicker";
import TodoDetailsEditTodoInput from "./TodoDetailsEditInput";
import { useTodoActions } from "../../Providers/ItemProvider";
import { useModal } from "../../Providers/ModalProvider";
import { useDefaultTodos } from "../../hooks/selectors";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import Icon from "../../shared/Icon";
import { inboxId, inboxTitle, todayId } from "../../shared/constants";
import PriorityProjectPicker from "../Pickers/PriorityPicker";
// import TodoItemDatePicker from "./Pickers/TodoItemDatePicker";

const MainTodoDetailsContainer = styled.div`
  width: ${(props) => props.theme.spaces[103]};
  border-radius: ${(props) => props.theme.spaces[30]};
  height: ${(props) => props.theme.spaces[59]};
  padding: ${(props) => props.theme.spaces[33]}
    ${(props) => props.theme.spaces[12]};
  overflow: auto;
  overflow-x: hidden;
`;

const TodoDetailsHeader = styled.div`
  padding-bottom: ${(props) => props.theme.spaces[104]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: ${(props) => props.theme.spaces[24]};
  max-width: ${(props) => props.theme.spaces[27]};
  margin-left: ${(props) => props.theme.spaces[1]};
`;

const TodosProjectContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 24px);
  flex: ${(props) => props.theme.spaces[35]}
    ${(props) => props.theme.spaces[35]} auto;
  margin: ${(props) => props.theme.spaces[28]} auto
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]};
  text-decoration: none;
  border-radius: ${(props) => props.theme.spaces[0]};
  padding: ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[9]} ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[39]};
`;

const TodosProjectsIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: ${(props) => props.theme.spaces[30]};
  margin-left: ${(props) => props.theme.spaces[39]};
  color: ${(props) => props.theme.colors.muted14};
  flex-shrink: ${(props) => props.theme.spaces[24]};
  font-size: ${(props) => props.theme.spaces[43]};
`;

const TodosProjectsTitleContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[36]};
`;

const ModalCloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.theme.spaces[7]};
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.spaces[21]};
  background: transparent;
  :hover {
    background: lightgrey;
    border-radius: ${(props) => props.theme.spaces[0]};
    cursor: pointer;
  }
`;

const ModalCloseButtonIcon = styled.div`
  transform: rotate(45deg);
  margin-left: ${(props) => props.theme.spaces[1]};
  margin-bottom: ${(props) => props.theme.spaces[1]};
`;

const TodoItemDetails = styled.div`
  display: flex;
  padding-bottom: ${(props) => props.theme.spaces[105]};
  flex-shrink: ${(props) => props.theme.spaces[24]};
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
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
  width: ${(props) => props.theme.spaces[37]};
  height: ${(props) => props.theme.spaces[37]};
  border-radius: ${(props) => props.theme.spaces[25]};
`;

const TodosDetails = styled.div`
  margin-left: ${(props) => props.theme.spaces[39]};
  flex: ${(props) => props.theme.spaces[35]};
`;

const TodosDetailsTitle = styled.div`
  max-height: ${(props) => props.theme.spaces[61]};
  overflow-y: auto;
  overflow-x: hidden;
  margin: ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[56]};
  padding-bottom: ${(props) => props.theme.spaces[9]};
  font-size: ${(props) => props.theme.spaces[37]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// const TodosDetailsDatePickerContainer = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   //   max-height: 80px;
//   //   min-height: 33px;
//   overflow: auto;
//   margin: 0 0 0 -4px;
//   padding-top: 8px;
//   padding-left: 4px;
//   //   width: 68px;
//   height: 28px;
// `;

const TodosDetailsButtonsContainer = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spaces[2]};
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text3};
  width: ${(props) => props.theme.spaces[106]};
  float: right;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  color: ${(props) => props.theme.colors.text7};
  cursor: pointer;
  background: transparent;
  outline: none;
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[0]};
  }
`;

const ProjectPickerIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainProjectPickersBoxContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  width: ${(props) => props.theme.spaces[71]};
  height: ${(props) => props.theme.spaces[71]};
  padding: ${(props) => props.theme.spaces[28]};
  border-radius: ${(props) => props.theme.spaces[1]};
  border: ${(props) => props.theme.spaces[8]} solid rgba(0, 0, 0, 0.1);
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[39]} ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]} rgb(0 0 0 / 8%);
  z-index: ${(props) => props.theme.spaces[47]};
  position: fixed;
  margin-left: ${(props) => props.theme.spaces[107]};
  margin-top: ${(props) => props.theme.spaces[30]};
`;

const ProjectsPickerBoxPopperContainer = styled.div`
  position: absolute;
  left: ${(props) => props.theme.spaces[28]};
  transform: translate(133px, 0px);
  z-index: ${(props) => props.theme.spaces[47]};
  margin-top: ${(props) => props.theme.spaces[73]};
  height: ${(props) => props.theme.spaces[28]};
  width: ${(props) => props.theme.spaces[28]};
  border: ${(props) => props.theme.spaces[9]} solid transparent;
  border-bottom-color: ${(props) => props.theme.colors.muted7};
`;

const ProjectsPickerBoxPopper = styled.div`
  position: absolute;
  border: ${(props) => props.theme.spaces[2]} solid transparent;
  border-bottom-color: ${(props) => props.theme.colors.background1};
  left: ${(props) => props.theme.spaces[74]};
  top: ${(props) => props.theme.spaces[75]};
`;

// const ProjectsPickerInputContainer = styled.div`
//   display: flex;
//   padding: ${(props) => props.theme.spaces[9]}
//     ${(props) => props.theme.spaces[30]};
//   align-items: center;
//   border-bottom: ${(props) => props.theme.spaces[8]} solid
//     ${(props) => props.theme.colors.muted7};
// `;

// const Input = styled.input`
//   border: ${(props) => props.theme.spaces[28]};
//   height: ${(props) => props.theme.spaces[12]};
//   outline: none;
//   background-color: ${(props) => props.theme.colors.background1};
//   padding: ${(props) => props.theme.spaces[8]}
//     ${(props) => props.theme.spaces[39]};
//   display: inline-block;
//   text-align: start;
// `;

const ProjectsPickerBoxContentContainer = styled.div`
  padding: ${(props) => props.theme.spaces[28]};
  margin: ${(props) => props.theme.spaces[28]};
  max-height: ${(props) => props.theme.spaces[76]};
`;

const ProjectsPickerBoxContentItemContainer = styled.div`
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]};
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[30]};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProjectsPickerBoxContentItemTitle = styled.span`
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[30]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  height: ${(props) => props.theme.spaces[12]};
  line-height: ${(props) => props.theme.spaces[77]};
  width: ${(props) => props.theme.spaces[78]};
  color: ${(props) => props.theme.colors.text3};
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

const TodoDetails = () => {
  const { closeModalDialog } = useModal();
  const { selectedTodo, completeTodo, editTodo } = useTodoActions();
  const {
    hover,
    handleHover,
    open,
    handleOpenClose,
    ref,
    handleToggle,
    toggle,
  } = useVisibiltyState();
  // const [date, setDate] = React.useState("");
  const [selectedPriority, setSelectedPriority] = React.useState(
    selectedTodo.priority
  );
  const projects = useDefaultTodos();
  const defaultOption = Object.values(projects).find(
    (i) => i.id === selectedTodo.categoryId
  );
  const optionProjects = Object.values(projects).filter(
    (i) => i.id !== todayId
  );
  const [selectedOption, setSelectedOption] = React.useState(defaultOption);
  const { colors, spaces } = useTheme();

  const optionClicked = (i) => {
    editTodo({ ...selectedTodo, categoryId: i.id });
    setSelectedOption(i);
    handleOpenClose();
  };

  const selectPriority = (i) => {
    editTodo({ ...selectedTodo, priority: i });
    setSelectedPriority(i);
  };

  const handleCompleteTodo = (i) => {
    completeTodo(i);
    setTimeout(() => {
      completeTodo(i);
    }, 500);
  };

  return (
    <MainTodoDetailsContainer>
      <TodoDetailsHeader>
        <TodosProjectContainer>
          <TodosProjectsIconContainer>
            {defaultOption.title || selectedOption.title === inboxTitle ? (
              <Icon
                name="inbox"
                style={{ fontSize: spaces[36] }}
                color={colors["primary2"]}
              />
            ) : (
              // <Icon name="dot" color={selectedOption?.color?.color} />
              <Icon name="dot" />
            )}
          </TodosProjectsIconContainer>
          <TodosProjectsTitleContainer>
            {(defaultOption && defaultOption.title) ||
              (selectedOption && selectedOption.title)}
          </TodosProjectsTitleContainer>
        </TodosProjectContainer>
        <ModalCloseButtonContainer onClick={closeModalDialog}>
          <ModalCloseButtonIcon>+</ModalCloseButtonIcon>
        </ModalCloseButtonContainer>
      </TodoDetailsHeader>
      {!toggle ? (
        <TodoItemDetails>
          {!selectedTodo.completed ? (
            <CheckBoxContainer onClick={() => handleCompleteTodo(selectedTodo)}>
              <CheckBoxButton
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                style={{
                  border:
                    selectedTodo.priority.id === "priority4"
                      ? "1px solid grey"
                      : `2px solid ${selectedTodo.priority.color}`,
                  background:
                    selectedTodo.priority.id === "priority1"
                      ? colors["accent3"]
                      : selectedTodo.priority.id === "priority2"
                      ? colors["accent4"]
                      : selectedTodo.priority.id === "priority3" &&
                        "rgba(36,111,224,.1)",
                }}
              >
                {hover && (
                  <CheckBoxIconContainer
                    style={{
                      background:
                        selectedTodo.priority.id === "priority4" &&
                        colors["muted13"],
                    }}
                  >
                    <Icon
                      name="check"
                      color={
                        selectedTodo.priority.id === "priority1"
                          ? selectedTodo.priority.color
                          : selectedTodo.priority.id === "priority2"
                          ? selectedTodo.priority.color
                          : selectedTodo.priority.id === "priority3"
                          ? selectedTodo.priority.color
                          : selectedTodo.priority.id === "priority4" &&
                            selectedTodo.priority.color
                      }
                    />
                  </CheckBoxIconContainer>
                )}
              </CheckBoxButton>
            </CheckBoxContainer>
          ) : (
            <CheckBoxContainer onClick={() => handleCompleteTodo(selectedTodo)}>
              <CheckBoxButton
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                style={{
                  background: "grey",
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
          )}

          <TodosDetails>
            <TodosDetailsTitle
              onClick={handleToggle}
              style={{
                textDecoration: selectedTodo.completed && "line-through",
              }}
            >
              {selectedTodo && selectedTodo.title}
            </TodosDetailsTitle>

            {/* <TodosDetailsDatePickerContainer>
              {selectedTodo.date && (
                <TodoItemDatePicker
                  selected={date}
                  item={selectedTodo}
                  onChange={setDate}
                />
              )}
            </TodosDetailsDatePickerContainer> */}
            <TodosDetailsButtonsContainer>
              <Container ref={ref}>
                <Button onClick={handleOpenClose}>
                  <Icon name="list" style={{ fontSize: spaces[33] }} />
                </Button>
                {open && (
                  <MainProjectPickersBoxContainer>
                    <ProjectsPickerBoxPopperContainer>
                      <ProjectsPickerBoxPopper />
                    </ProjectsPickerBoxPopperContainer>
                    {/* <ProjectsPickerInputContainer>
                      <Input type="text" placeholder="Type a project" />
                    </ProjectsPickerInputContainer> */}
                    <ProjectsPickerBoxContentContainer>
                      {Object.values(optionProjects)
                        .reverse(function (a, b) {
                          return b - a;
                        })
                        .map((i) => (
                          <ProjectsPickerBoxContentItemContainer
                            onClick={() => optionClicked(i)}
                          >
                            <ProjectPickerIconContainer>
                              {i.id === inboxId ? (
                                <Icon
                                  name="inbox"
                                  style={{ fontSize: spaces[36] }}
                                  color={colors["primary2"]}
                                />
                              ) : (
                                <Icon
                                  name="dot"
                                  // color={i?.color?.color}
                                  style={{ fontSize: spaces[30] }}
                                />
                              )}
                            </ProjectPickerIconContainer>
                            <ProjectsPickerBoxContentItemTitle>
                              {i.title}
                            </ProjectsPickerBoxContentItemTitle>
                          </ProjectsPickerBoxContentItemContainer>
                        ))}
                    </ProjectsPickerBoxContentContainer>
                  </MainProjectPickersBoxContainer>
                )}
              </Container>
              <Container>
                <PriorityProjectPicker
                  selectPriority={selectPriority}
                  selectedPriority={selectedPriority}
                />
              </Container>
            </TodosDetailsButtonsContainer>
          </TodosDetails>
        </TodoItemDetails>
      ) : (
        <TodoDetailsEditTodoInput
          handleToggle={handleToggle}
          item={selectedTodo}
          optionClicked={optionClicked}
        />
      )}
    </MainTodoDetailsContainer>
  );
};
export default TodoDetails;
