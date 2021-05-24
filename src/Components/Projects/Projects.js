import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useProjectsDialog } from "../../Providers/ModalProvider";
import Icon from "../../shared/Icon";
import ProjectsList from "./ProjectsList";

const ProjectsItemsContainer = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
  cursor: pointer;
  padding-left: ${(props) => props.theme.spaces[1]};
  align-items: center;
`;

const PlusButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.muted4};
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[1]};
    font-weight: ${(props) => props.theme.spaces[7]};
  }
`;
const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[42]};
  height: ${(props) => props.theme.spaces[12]};
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.muted5};
`;
const ContentIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[5]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProjectsTitle = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.muted5};
  font-weight: ${(props) => props.theme.spaces[34]};
`;
const ContentProjectsContainer = styled.div`
  display: flex;
`;

const Projects = () => {
  const {
    open,
    visible,
    switchItem,
    handleSwitchItem,
    handleVisible,
    handleOpenClose,
  } = useVisibiltyState();
  const openProjectModal = useProjectsDialog();

  const handleToggle = () => {
    handleOpenClose();
    handleSwitchItem();
  };

  return (
    <div>
      <ProjectsItemsContainer
        onMouseLeave={handleVisible}
        onMouseEnter={handleVisible}
      >
        <ContentProjectsContainer
          onClick={handleToggle}
          style={{ display: "flex" }}
        >
          {!switchItem ? (
            <ContentIconContainer>
              <Icon name="rightArrow" color="rgba(0,0,0,.54);" />
            </ContentIconContainer>
          ) : (
            <ContentIconContainer>
              <Icon name="rightDown" color="rgba(0,0,0,.54);" />
            </ContentIconContainer>
          )}
          <ContentTitleContainer>
            <ProjectsTitle>Projects</ProjectsTitle>
          </ContentTitleContainer>
        </ContentProjectsContainer>
        {visible ? (
          <PlusButtonContainer onClick={openProjectModal}>
            <Icon
              name="plus"
              color="rgba(0,0,0,.54);"
              style={{ fontSize: 12 }}
            />
          </PlusButtonContainer>
        ) : (
          ""
        )}
      </ProjectsItemsContainer>
      {open ? <ProjectsList /> : ""}
    </div>
  );
};
export default Projects;
