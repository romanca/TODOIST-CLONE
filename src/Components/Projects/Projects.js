import React from "react";
import styled, { useTheme } from "styled-components";
import { useStaticProjectsItems } from "../../hooks/selectors";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useProjectActions } from "../../Providers/ItemProvider";
import { useProjectsDialog } from "../../Providers/ModalProvider";
import { projectsId } from "../../shared/constants";
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

const Container = styled.div``;

const Projects = () => {
  const projects = useStaticProjectsItems();
  const { staticItems } = useProjectActions();
  const { switchItem, handleSwitchItem } = useVisibiltyState();
  const openProjectModal = useProjectsDialog();
  const { colors, spaces } = useTheme();

  const handleOpenCloseFavorites = (item) => {
    staticItems(item);
  };

  return (
    <Container>
      {Object.values(projects)
        .filter((i) => i.id === projectsId)
        .map((i) => (
          <Container>
            <ProjectsItemsContainer
              onMouseLeave={handleSwitchItem}
              onMouseEnter={handleSwitchItem}
            >
              <ContentProjectsContainer
                onClick={() => handleOpenCloseFavorites(i)}
              >
                {!i.opened ? (
                  <ContentIconContainer>
                    <Icon name="rightArrow" color={colors["text6"]} />
                  </ContentIconContainer>
                ) : (
                  <ContentIconContainer>
                    <Icon name="rightDown" color={colors["text6"]} />
                  </ContentIconContainer>
                )}
                <ContentTitleContainer>
                  <ProjectsTitle>Projects</ProjectsTitle>
                </ContentTitleContainer>
              </ContentProjectsContainer>
              {switchItem && (
                <PlusButtonContainer onClick={openProjectModal}>
                  <Icon
                    name="plus"
                    color={colors["text6"]}
                    style={{ fontSize: spaces[15] }}
                  />
                </PlusButtonContainer>
              )}
            </ProjectsItemsContainer>
            {i.opened && <ProjectsList />}
          </Container>
        ))}
    </Container>
  );
};
export default Projects;
