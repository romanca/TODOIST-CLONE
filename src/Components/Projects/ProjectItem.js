import React from "react";
import { useParams } from "@reach/router";
import TodoItem from "../Todo/TodoItem";
import { useProjectActions, useTodos } from "../../Providers/ItemProvider";
import { useDefaultTodos } from "../../hooks/selectors";
import styled from "styled-components";
// import MainInfoContent from "../../Components/MainInfoContent";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import CompletedTodosList from "./CompletedTodosList";
import { inboxId } from "../../shared/constants";
import SubmitFormInput from "../Inputs/SubmitFormInput";
import ProjectDropDown from "../DropDowns/ProjectDropDown";

const ContentHeader = styled.div`
  display: flex;
  background-color: #fff;
  top: ${(props) => props.theme.spaces[28]};
  padding-top: ${(props) => props.theme.spaces[55]};
`;

const HeaderContent = styled.div`
  display: flex;
  width: ${(props) => props.theme.spaces[27]};
  padding-bottom: ${(props) => props.theme.spaces[43]};
  margin: ${(props) => props.theme.spaces[28]} auto;
  border-bottom: ${(props) => props.theme.spaces[8]} solid transparent;
  align-items: flex-start;
  justify-content: space-between;
  word-break: break-word;
  margin: ${(props) => props.theme.spaces[56]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[57]};
  padding: ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[9]};
`;

const HeaderContentTitleContainer = styled.span`
  font-size: ${(props) => props.theme.spaces[33]};
  font-weight: ${(props) => props.theme.spaces[34]};
  padding: ${(props) => props.theme.spaces[9]};
  border-radius: ${(props) => props.theme.spaces[1]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
  }
`;

const HeaderContentButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.muted5};
  justify-content: flex-end;
  width: ${(props) => props.theme.spaces[58]};
`;

// const HeaderButtonsIconContainer = styled.div`
//   font-size: ${(props) => props.theme.spaces[14]};
//   color: ${(props) => props.theme.colors.text3};
// `;

// const HeaderButtonTitleContainer = styled.div`
//   font-size: ${(props) => props.theme.spaces[36]};
//   margin-left: ${(props) => props.theme.spaces[1]};
//   margin-right: ${(props) => props.theme.spaces[2]};
//   color: ${(props) => props.theme.colors.text3};
// `;

const EditInput = styled.input`
  border-radius: ${(props) => props.theme.spaces[1]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  box-sizing: border-box;
  font-size: ${(props) => props.theme.spaces[33]};
  font-weight: ${(props) => props.theme.spaces[34]};
  line-height: ${(props) => props.theme.spaces[100]};
  margin: ${(props) => props.theme.spaces[57]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[30]};
  max-width: ${(props) => props.theme.spaces[27]};
  padding: ${(props) => props.theme.spaces[0]}
    ${(props) => props.theme.spaces[43]} ${(props) => props.theme.spaces[1]};
  outline: none;
  :focus {
    border: ${(props) => props.theme.spaces[8]} solid grey;
  }
`;

const EditFormContainer = styled.div`
  width: ${(props) => props.theme.spaces[101]};
  height: ${(props) => props.theme.spaces[102]};
`;

const EditFormButtonsContainer = styled.div`
  width: ${(props) => props.theme.spaces[27]};
  display: flex;
`;

const SaveButton = styled.button`
  margin-right: ${(props) => props.theme.spaces[1]};
  background-color: ${(props) => props.theme.colors.accent1};
  color: ${(props) => props.theme.colors.background1};
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  font-weight: ${(props) => props.theme.spaces[34]};
  font-size: ${(props) => props.theme.spaces[36]};
  line-height: ${(props) => props.theme.spaces[67]};
  padding: ${(props) => props.theme.spaces[2]}
    ${(props) => props.theme.spaces[15]} ${(props) => props.theme.spaces[29]};
  position: relative;
  display: inline-block;
  white-space: nowrap;
  border-radius: ${(props) => props.theme.spaces[0]};
  text-align: center;
`;

const CancelButton = styled.button`
  color: ${(props) => props.theme.colors.text3};
  cursor: pointer;
  font-size: ${(props) => props.theme.spaces[36]};
  padding: ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[1]};
  white-space: nowrap;
  background-color: transparent;
  border: none;
  margin: ${(props) => props.theme.spaces[28]};
`;

const Container = styled.div``;

const ProjectItem = (props) => {
  const projectItems = useDefaultTodos();
  const item = React.useMemo(
    () => Object.values(projectItems).find((i) => i.id === props.id),
    [projectItems, props.id]
  );
  const { todos } = useTodos();
  const { id } = useParams();
  const {
    open,
    handleOpenClose,
    ref,
    toggle,
    handleToggle,
    visible,
    handleVisible,
  } = useVisibiltyState();
  const { editProject } = useProjectActions();
  const [title, setTitle] = React.useState(item && item.title);

  React.useEffect(() => {
    setTitle(item && item.title);
  }, [item]);

  const handleEditProject = React.useCallback(() => {
    editProject({ ...item, title });
    handleOpenClose();
  }, [item, title, editProject, handleOpenClose]);

  const handleChange = React.useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  // const renderTodosCounter = React.useCallback(() => {
  //   return Object.values(todos).filter((i) => i.categoryId === item.id).length;
  // }, [todos, item && item.id]);

  const renderTodos = React.useCallback(() => {
    return Object.values(todos)
      .filter((i) => i.categoryId === id)
      .filter((i) => !i.visible)
      .map((i) => {
        return <TodoItem item={i} key={i.id} />;
      });
  }, [todos, id]);

  return (
    <Container>
      <ContentHeader>
        <HeaderContent>
          {item && item.id === inboxId ? (
            <HeaderContentTitleContainer>
              {item && item.title}
            </HeaderContentTitleContainer>
          ) : (
            <Container>
              {!open ? (
                <HeaderContentTitleContainer onClick={handleOpenClose}>
                  {item && item.title}
                </HeaderContentTitleContainer>
              ) : (
                <EditFormContainer ref={ref}>
                  <EditInput
                    type="text"
                    value={title}
                    onChange={handleChange}
                  />
                  <EditFormButtonsContainer>
                    <SaveButton onClick={handleEditProject}>Save</SaveButton>
                    <CancelButton onClick={handleOpenClose}>
                      Cancel
                    </CancelButton>
                  </EditFormButtonsContainer>
                </EditFormContainer>
              )}
            </Container>
          )}
          <HeaderContentButtonsContainer>
            {/* <HeaderButton>
              <HeaderButtonsIconContainer>
                <Icon name="comment" />
              </HeaderButtonsIconContainer>
              <HeaderButtonTitleContainer>Comments</HeaderButtonTitleContainer>
            </HeaderButton>
            <HeaderButton>
              <HeaderButtonsIconContainer>
                <Icon name="arrows" />
              </HeaderButtonsIconContainer>
              <HeaderButtonTitleContainer>Sort</HeaderButtonTitleContainer>
            </HeaderButton> */}
            <ProjectDropDown
              item={item}
              handleVisible={handleVisible}
              visible={visible}
            />
          </HeaderContentButtonsContainer>
        </HeaderContent>
      </ContentHeader>
      {renderTodos()}
      <SubmitFormInput toggle={toggle} handleToggle={handleToggle} />
      {renderTodos && visible && <CompletedTodosList />}
    </Container>
  );
};
export default ProjectItem;
