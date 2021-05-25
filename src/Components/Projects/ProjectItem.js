import React from "react";
import { useParams } from "@reach/router";
import TodoItem from "../TodoItem";
import SubmitFormInput from "../SubmitFormInput";
import { useProjectActions, useTodos } from "../../Providers/ItemProvider";
import { useDefaultTodos } from "../../hooks/selectors";
import Icon from "../../shared/Icon";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import ProjectDropDown from "../ProjectDropDown";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import useSwitchDropDown from "../../hooks/useSwitchDropDown";

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
const ContentHeaderDotsIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[33]};
  height: ${(props) => props.theme.spaces[33]};
  font-size: ${(props) => props.theme.spaces[2]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text1};
`;

const ProjectItem = (props) => {
  const projectItems = useDefaultTodos();
  const item = Object.values(projectItems).find((i) => i.id === props.id);
  const { todos } = useTodos();
  const { id } = useParams();
  const { handleSelected } = useProjectActions();
  const { ref, isVisible, handleSwitchDropDown } = useSwitchDropDown();

  const handleSelectProject = (item) => {
    handleSwitchDropDown();
    handleSelected(item);
  };

  const renderProjects = () => {
    return (
      <div>
        <ContentHeader>
          <HeaderContent>
            <HeaderContentTitleContainer>
              {item && item.title}
            </HeaderContentTitleContainer>
            <HeaderContentButtonsContainer>
              <HeaderButton>
                <HeaderButtonsIconContainer>
                  <Icon name="comment" />
                </HeaderButtonsIconContainer>
                <HeaderButtonTitleContainer>
                  Comments
                </HeaderButtonTitleContainer>
              </HeaderButton>
              <HeaderButton>
                <HeaderButtonsIconContainer>
                  <Icon name="arrows" />
                  {/* <Icon name="longArrowDown" style={{ marginLeft: 2 }} /> */}
                </HeaderButtonsIconContainer>
                <HeaderButtonTitleContainer>Sort</HeaderButtonTitleContainer>
              </HeaderButton>
              <HeaderButton onClick={() => handleSelectProject(item)} ref={ref}>
                <ContentHeaderDotsIconContainer>
                  <Icon name="circle" />
                  <Icon name="circle" />
                  <Icon name="circle" />
                </ContentHeaderDotsIconContainer>
              </HeaderButton>
            </HeaderContentButtonsContainer>
            {isVisible ? <ProjectDropDown /> : ""}
          </HeaderContent>
        </ContentHeader>
        {Object.values(todos)
          .filter((i) => i.categoryId === id)
          .map((i) => {
            return <TodoItem item={i} key={i.id} />;
          })}
        <SubmitFormInput />
      </div>
    );
  };

  return renderProjects();
};
export default ProjectItem;
