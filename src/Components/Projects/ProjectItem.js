import React from "react";
import { useParams } from "@reach/router";
import TodoItem from "../TodoItem";
import SubmitFormInput from "../SubmitFormInput";
import { useProjectActions, useTodos } from "../../Providers/ItemProvider";
import { useDefaultTodos } from "../../hooks/selectors";
import Icon from "../../shared/Icon";
import styled from "styled-components";
import ProjectDropDown from "../DropDowns/ProjectDropDown";
import MainInfoContent from "../../Components/MainInfoContent";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import CompletedTodosList from "./CompletedTodosList";

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

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  color: grey;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: ${(props) => props.theme.spaces[28]};
  margin: ${(props) => props.theme.spaces[28]};
`;

const HeaderContentTitleContainer = styled.span`
  font-size: ${(props) => props.theme.spaces[33]};
  font-weight: ${(props) => props.theme.spaces[34]};
  padding: 4px;
  border-radius: 5px;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
  }
`;

const HeaderContentButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.muted5};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[58]};
`;

const HeaderButtonsIconContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.text3};
`;

const HeaderButtonTitleContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[36]};
  margin-left: ${(props) => props.theme.spaces[1]};
  margin-right: ${(props) => props.theme.spaces[2]};
  color: ${(props) => props.theme.colors.text3};
`;

const EditInput = styled.input`
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  margin: -4px 0 10px;
  max-width: 100%;
  padding: 3px 8px 5px;
  outline: none;
  :focus {
    border: 1px solid grey;
  }
`;

const EditFormContainer = styled.div`
  width: 114px;
  height: 73px;
`;

const EditFormButtonsContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SaveButton = styled.button`
  margin-right: 5px;
  background-color: #dd4b39;
  color: #fff;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
  padding: 6px 12px 7px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  border-radius: 3px;
  text-align: center;
`;

const CancelButton = styled.button`
  color: #555;
  cursor: pointer;
  font-size: 13px;
  padding: 2px 5px;
  white-space: nowrap;
  background-color: transparent;
  border: none;
  margin: 0;
`;

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
  const [title, setTitle] = React.useState(item.title);

  const handleEditProject = () => {
    editProject({ ...item, title });
    handleOpenClose();
  };

  const handleChange = React.useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const renderTodosCounter = React.useCallback(() => {
    return Object.values(todos).filter((i) => i.categoryId === item.id).length;
  }, [todos, item.id]);

  const renderTodos = React.useCallback(() => {
    return Object.values(todos)
      .filter((i) => i.categoryId === id)
      .filter((i) => !i.visible)
      .map((i) => {
        return <TodoItem item={i} key={i.id} />;
      });
  }, [todos, id]);

  return (
    <div>
      <ContentHeader>
        <HeaderContent>
          {!open ? (
            <HeaderContentTitleContainer onClick={handleOpenClose}>
              {item && item.title}
            </HeaderContentTitleContainer>
          ) : (
            <EditFormContainer ref={ref}>
              <EditInput type="text" value={title} onChange={handleChange} />
              <EditFormButtonsContainer>
                <SaveButton onClick={handleEditProject}>Save</SaveButton>
                <CancelButton onClick={handleOpenClose}>Cancel</CancelButton>
              </EditFormButtonsContainer>
            </EditFormContainer>
          )}
          <HeaderContentButtonsContainer>
            <HeaderButton>
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
            </HeaderButton>
            <ProjectDropDown
              item={item}
              handleVisible={handleVisible}
              visible={visible}
            />
          </HeaderContentButtonsContainer>
        </HeaderContent>
      </ContentHeader>
      {renderTodosCounter() !== 0 && renderTodos()}
      <SubmitFormInput toggle={toggle} handleToggle={handleToggle} />
      {renderTodosCounter() !== 0 && visible && <CompletedTodosList />}
      {renderTodosCounter() === 0 && (
        <MainInfoContent
          item={item}
          toggle={toggle}
          handleToggle={handleToggle}
        />
      )}
    </div>
  );
};
export default ProjectItem;
