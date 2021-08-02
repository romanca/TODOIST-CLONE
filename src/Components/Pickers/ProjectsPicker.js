import React from "react";
import Icon from "../../shared/Icon";
import styled, { useTheme } from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { inbox, inboxId, inboxTitle, todayId } from "../../shared/constants";

const ProjectsPickerButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.spaces[5]};
  padding: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[43]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted9};
  border-radius: ${(props) => props.theme.spaces[1]};
  color: ${(props) => props.theme.colors.text3};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
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
  margin-top: ${(props) => props.theme.spaces[92]};
  position: absolute;
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

const ProjectsPickerInputContainer = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[30]};
  align-items: center;
  border-bottom: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
`;

const Input = styled.input`
  border: ${(props) => props.theme.spaces[28]};
  height: ${(props) => props.theme.spaces[12]};
  outline: none;
  background-color: ${(props) => props.theme.colors.background1};
  padding: ${(props) => props.theme.spaces[8]}
    ${(props) => props.theme.spaces[39]};
  display: inline-block;
  text-align: start;
`;

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

const ContenContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectsPicker = ({
  selectedOption,
  defaultProject,
  projects,
  onOptionClicked,
}) => {
  const { open, handleOpenClose, ref } = useVisibiltyState();
  const { spaces, colors } = useTheme();

  const usedOption =
    typeof selectedOption === "string"
      ? { id: selectedOption }
      : selectedOption
      ? selectedOption
      : defaultProject;

  const renderDefaultProject = Object.values(projects)
    .filter((i) => i.id !== todayId)
    .filter((i) => i.id === inboxId)
    .map((item) => (
      <ProjectsPickerBoxContentItemContainer
        onClick={() => onOptionClicked(item)}
      >
        <ProjectPickerIconContainer>{item.icon}</ProjectPickerIconContainer>
        <ProjectsPickerBoxContentItemTitle>
          {item.title}
        </ProjectsPickerBoxContentItemTitle>
      </ProjectsPickerBoxContentItemContainer>
    ));

  const renderProjects = Object.values(projects)
    .filter((i) => i.id !== todayId)
    .filter((i) => i.id !== inboxId)
    .map((item) => (
      <ProjectsPickerBoxContentItemContainer
        onClick={() => onOptionClicked(item)}
      >
        <ProjectPickerIconContainer>
          <Icon
            name="dot"
            color={item.color.color}
            style={{ fontSize: spaces[30] }}
          />
        </ProjectPickerIconContainer>
        <ProjectsPickerBoxContentItemTitle>
          {item.title}
        </ProjectsPickerBoxContentItemTitle>
      </ProjectsPickerBoxContentItemContainer>
    ));

  return (
    <ContenContainer ref={ref}>
      <ProjectsPickerButton onClick={handleOpenClose}>
        <ProjectPickerIconContainer>
          <div>
            {usedOption.id === inboxId ? (
              <Icon name="inbox" />
            ) : (
              <Icon name="dot" style={{ fontSize: 10 }} />
            )}
          </div>
          {/* {selectedOption && selectedOption.id === inboxId ? (
            <Icon name="inbox" color={colors["primary2"]} />
          ) : (
            <Icon
              name="dot"
              color={
                (selectedOption && selectedOption?.color?.color) ||
                (defaultProject && defaultProject?.color?.color)
              }
              style={{ fontSize: spaces[43] }}
            />
          )} */}
        </ProjectPickerIconContainer>
        {(selectedOption && selectedOption.title) ||
          (defaultProject && defaultProject.title)}
      </ProjectsPickerButton>
      {open && (
        <MainProjectPickersBoxContainer>
          <ProjectsPickerBoxPopperContainer>
            <ProjectsPickerBoxPopper />
          </ProjectsPickerBoxPopperContainer>
          <ProjectsPickerInputContainer>
            <Input type="text" placeholder="Type a project" />
          </ProjectsPickerInputContainer>
          <ProjectsPickerBoxContentContainer>
            {renderDefaultProject}
            {renderProjects}
          </ProjectsPickerBoxContentContainer>
        </MainProjectPickersBoxContainer>
      )}
    </ContenContainer>
  );
};
export default ProjectsPicker;
