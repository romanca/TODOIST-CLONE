import React from "react";
import styled from "styled-components";
import { useProjectsDialog } from "../../Providers/ModalProvider";
import Icon from "../../shared/Icon";
import ProjectsList from "./ProjectsList";

const ProjectsItemsContainer = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
  cursor: pointer;
  padding-left: ${(props) => props.theme.spaces[1]};
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
  width: ${(props) => props.theme.spaces[13]};
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

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const [switchIcon, setSwitchIcon] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const openProjectModal = useProjectsDialog();

  const handleOpenClose = () => {
    setOpen((current) => !current);
    handleSwitchIcon();
  };
  const handleVisible = () => {
    setVisible((current) => !current);
  };

  const handleSwitchIcon = () => {
    setSwitchIcon((current) => !current);
  };

  return (
    <div>
      <ProjectsItemsContainer
        onClick={handleOpenClose}
        onMouseLeave={handleVisible}
        onMouseEnter={handleVisible}
      >
        {!switchIcon ? (
          <ContentIconContainer>
            <Icon name="rightArrow" color="rgba(0,0,0,.54);" />
          </ContentIconContainer>
        ) : (
          <ContentIconContainer>
            <Icon name="rightDown" color="rgba(0,0,0,.54);" />
          </ContentIconContainer>
        )}
        <ContentTitleContainer>
          <div
            style={{
              fontSize: 14,
              color: "#333",
              fontWeight: 700,
            }}
          >
            Projects
          </div>
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
        </ContentTitleContainer>
      </ProjectsItemsContainer>
      {open ? <ProjectsList /> : ""}
    </div>
  );
};
export default Projects;
